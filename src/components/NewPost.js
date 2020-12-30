import React, { useState } from "react";
import ReactDOM from 'react-dom';
import {client} from '../client';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { FormGroup } from "@material-ui/core";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(3),
        display: "flex",
        justifyContent: "center",
        position: "absolute", 
        top: 'calc(50% - 150px)', 
        left: 'calc(50% - 250px)', 
        backgroundColor: '#F2F2F2', 
        listStyle: 'none', 
        cursor: 'pointer',
        width: '700px',
        height: '500px',
        borderRadius:'5px',
        flexDirection: 'column'
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

export default function NewPost({setModalOpen, modalOpen}) {
    const classes = useStyles();
    const [title, setTitle] = useState('');
    // const [measureUnit, setMeasureUnit] = useState('dl');
    // const [measure, setMeasure] = useState('0');
    const [ingredient, setIngredient] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const [description, setDiscription] = useState('');
  
function publishNewRecipe(){
        
    client.getSpace('RecipiesBlog')
    .then((space) => {
        console.log(space)
        space.getEnvironments()
    })
    .then((response) => {
      console.log(response.items)
    })
    .catch(console.error)


    // client.getSpace('RecipiesBlog')
    // .then((res) => {
    //     console.log(res)
    // })
    // .then((master) => master.getEnvironment({name: 'RecipiesBlog'}))
    // .then((environment) => environment.createAsset({
    //     fields:{
    //         title:{
    //             'en-US': 'Bröd'
    //         },
    //         description: {
    //             'en-US': 'Baka bröd'
    //         },
    //         file: {
    //             'en-US': {
    //                 contentType: 'image/jpeg',
    //                 fileName: 'example.jpeg',
    //                 upload: 'https://example.com/example.jpg'
    //             }
    //         }
    //     }
    // }))
    // .then((asset) => asset.processForAllLocales())
    // .then((asset) => console.log(asset))
    // .catch(console.error)
     
    // .then((res) => {
    //     console.log(res)
    // })

}

    function onSave(e){
        e.preventDefault();
        publishNewRecipe();
    }

    const addAnotherIngredient = (e) => {
        e.preventDefault();
        if(ingredient){
            setIngredients([...ingredients, ingredient]);
            setIngredient('');
        } 
        return
    }

    const removeIngredient = () => {
        
    }

    console.log(ingredients)
    return ReactDOM.createPortal((
        <div className={classes.root} >
                <form className={classes.form} noValidate autoComplete="off">
                    <TextField id="receptnamn" label="Receptnamn" variant="outlined" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <ul>
                        {ingredients.map((ing, index) => {
                            <li key={index}>{ing} <button onClick={removeIngredient}>remove item</button></li>
                        })}
                    </ul>
                    <TextField id="ingredient" label="Ingrediens" variant="outlined" value={ingredient} onChange={(e) => setIngredient(e.target.value)}/>
                    <Button className={classes.button} onClick={ addAnotherIngredient } variant="contained">Lägg till ny ingrediens</Button>
                    <TextField id="Description" label="Beskrivning" variant="outlined" />
                    <TextareaAutosize aria-label="minimum height" rowsMin={3} placeholder="Minimum 3 rows" />;
                    <Button className={classes.button} onClick={ onSave } variant="contained">Spara</Button>
                    <Button className={classes.button} onClick={ () => setModalOpen(false) } variant="contained">Stäng</Button>
                </form>
                
            
        </div>
    ), document.body);
}