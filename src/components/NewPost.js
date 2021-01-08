import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import { clientManagement } from '../clientManagement';
import { client } from "../client";

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { Checkbox } from "@material-ui/core";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            top: 'calc(50% - 350px)',
            left: 'calc(50% - 450px)',
            backgroundColor: '#F2F2F2',
            listStyle: 'none',
            cursor: 'pointer',
            width: '900px',
            height: '700px',
            borderRadius: '5px',
            flexDirection: 'column',
            boxSizing: 'border-box',
            padding: '10px'
        },
    },
    button: {
        width: '150px',
        height: '50px',
        margin: '10px',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    formGroup: {
        width: '100%',
        border: '1px solid grey',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
    }
}));

export default function NewPost({setModalOpen}) {
    const classes = useStyles();
    const [title, setTitle] = useState('');
    const [ingredient, setIngredient] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const [description, setDiscription] = useState('');
    const [categories, setCategories] = useState([]);
    const [fetchedCategories, setFetchedCategories] = useState([]);
    const [image, setImage] = useState();

    const publishNewRecipe = () => {
        var fileData = {
            fields: {
                title: {
                    'en-US': title
                },
                file: {
                    'en-US': {
                        contentType: 'image/*',
                        fileName: `${title}.jpg`,
                        upload: image
                    }
                }
            }
        };
        clientManagement.getSpace('n8h12pdxd08n')

        .then((space) => space.getEnvironment('master'))
        .then((environment) => environment.createAsset(fileData))
        .then((asset) => asset.processForAllLocales())
        .then(function (processedAsset) {
            console.log(processedAsset.sys.id)
            processedAsset.publish()
            .then(function (publishedAsset) {
                console.log(publishedAsset);                            
                createNewRecipe(publishedAsset.sys.id)
            })
        })
        .catch((error) => {
            console.log(error)
        })           
    }


    const createNewRecipe = (assetId) => {
        console.log('publishedAsset',assetId)
        clientManagement.getSpace('n8h12pdxd08n')
        .then((space) => {
            space.getEnvironment('master')
            .then((environment) => {
                environment.createEntry('recipe', {
                    linkType: "ContentType",
                    id: "recipe",
                    fields: {
                        title: {
                            'en-US': title
                        },
                        foodImage: {
                            'en-US': {
                                sys: {
                                    type: 'Link',
                                    linkType: 'Asset',

                                    id: assetId,
                                }
                            }
                        },
                        ingredients: {
                            'en-US': ingredients
                        },
                        desciption: {
                            'en-US': description
                        },
                        category: {
                            'en-US': categories.map((categ) => ({
                                sys: {
                                    type: 'Link',
                                    linkType: 'Entry',
                                    id: categ.sys.id
                                }
                            }))
                        }
                    }
                })
            })
        })
        .catch((error2) => {
            console.log(error2)
        })
    }

    function onSave(e) {
        e.preventDefault();
        publishNewRecipe();
        setModalOpen(false)
    }

    const addAnotherIngredient = (e) => {
        e.preventDefault();
        if (ingredient) {
            setIngredients([...ingredients, ingredient]);
            setIngredient('');
        }
        return
    }

    useEffect(() => {
        client.getEntries({
                'content_type': "category"
            })
            .then(res => {
                setFetchedCategories(res.items)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    const handleCategory = (category) => {
        setCategories([...categories, category]);
    }


    return ReactDOM.createPortal(( 
        <div className = {classes.root}>
            <form className = {classes.form} noValidate autoComplete = "off" >
                <header>
                    <h3> Lägg in ett nytt recept </h3> 
                </header > 

                <TextField required id = "receptnamn" label = "Receptnamn" variant = "outlined" value = {title} onChange = {(e) => setTitle(e.target.value)}/> 
                <input type = 'url' placeholder = 'Lägg till en länk till bild' onChange = {(e) => setImage(e.target.value)} /> 
                <ul> 
                    {ingredients.map((ing, index) => {
                        return ( 
                            <li key = {index}>{ing}</li>
                        )
                    })}
                </ul> 
                <TextField required id = "ingredient" label = "Ingrediens" variant = "outlined" value = {ingredient} onChange = {(e) => setIngredient(e.target.value)}/> 
                <Button className = {classes.button} onClick = {addAnotherIngredient} variant = "contained" > Lägg till ny ingrediens </Button>
                <TextareaAutosize required rowsMin = {10} rowsMax = {10} placeholder = "Beskrivning" value = {description} onChange = {(e) => setDiscription(e.target.value)}/>
                <FormControl component = "fieldset" className = {classes.formControl} style = {{display: 'block'}} >
                    <FormLabel component = "legend" > Välj kategori </FormLabel> 
                    {fetchedCategories.map((cat, id) => {
                        return ( 
                            <FormControlLabel key = {cat.fields.id} control = {<Checkbox onChange = {(e) => handleCategory(e, id, cat)}/>} 
                                name = {cat.fields.title}
                                label = {cat.fields.title}
                            />
                        )
                    })} 
                    <FormHelperText > Välj en eller flera kategorier </FormHelperText> 
                </FormControl> 
                <div style = {{display: 'block'}} >
                    <Button className = {classes.button} onClick = {onSave} variant = "contained" > Spara </Button> 
                    <Button className = {classes.button} onClick = {() => setModalOpen(false)} variant = "contained" > Stäng </Button> 
                </div> 
            </form> 
        </div >
    ), document.body);
}