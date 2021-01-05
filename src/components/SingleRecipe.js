import React, { useState, useEffect, useCallback } from "react";
import {Link} from 'react-router-dom';
import { client } from "../client";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Header from './Header';
import Footer from './Footer';



const useStyles = makeStyles({
    root: {
        width: 900,
        padding: "20px",
        boxSizing: 'border-box',
        margin: '10px',
    },
    media: {
        width: "300px", 
        height: "300px",
        objectFit:"cover", 
        objectPosition: "center", 
        margin: '0px', 
        borderRadius: '1rem',
        display: 'inline-block'
    },
    innerContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }
});

export default function SingleRecipe() { 
    console.log(window.location.pathname.split('/')[2]);
    // console.log(recipes)
    const [fetchRecipe, setFetchRecipe] = useState(window.location.pathname.split('/')[2]);
    const classes = useStyles();
    const [recipe, setRecipe] = useState();

    const fetchMyAPI = useCallback(async () => {
        let respons = await client.getEntries({
                    'content_type': "recipe",
                    'fields.title[in]': fetchRecipe
                })
                // respons = await respons.json()
        setRecipe(respons.items[0].fields)
        
      }, [])

      useEffect(() => {
        fetchMyAPI()
      }, [])

    // useEffect(() => {
    //     client.getEntries({
    //         'content_type': "recipe",
    //         'fields.title[in]': fetchRecipe
    //     })
    //     .then((res) => {
    //         setRecipe(res.items[0].fields)
    //     })
    // }, [])

   
    if(recipe){
        return(
            <div className="outerContainter">
                <Header />
                <div className={classes.innerContainer}>
                <Card className={classes.root} tag="div">
                <CardActionArea style={{ borderRadius: '1rem'}}>
                <CardMedia 
                    className={classes.media}
                    component="img"
                    src={recipe.foodImage.fields.file.url}
                    alt={recipe.title}
                    title={recipe.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">{recipe.title}</Typography>
                    {recipe.ingredients.map((ingredient, index) => {
                        return(
                            <Typography key={index} variant="body2" color="textSecondary">
                            {ingredient}
                            </Typography>
                        )
                    })}
                    <Typography>  
                        {recipe.category.map((cat, index )=>{
                            return(
                                <p key={index}>{cat.fields.title}</p>
                            )
                        })}
                    </Typography> 

                    <Typography>{recipe.desciption}</Typography>
                </CardContent>
            </CardActionArea> 
            <CardActions>
                <Link to="/" size="small" color="primary">
                    <Button variant="contained">Tillbaka till första sidan</Button>
                </Link>
            </CardActions> 
        </Card>
        </div>
        <Footer />
        </div>
        )
    }
    return(
    <p>wait...</p>
    )
}