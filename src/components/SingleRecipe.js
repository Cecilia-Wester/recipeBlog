import React, { useState } from "react";
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

export default function SingleRecipe(recipes) {
    console.log(recipes)
    const classes = useStyles();
    const {title, desciption, foodImage, ingredients, category} = recipes.location.params.recipes.recipe.fields;
    const [fetchedRecipes, setFetchedRecipes] = useState([])

    // if(!recipes){
    //     function fetchData(){
    //         client.getEntries({
    //             'content_type': "recipe"
    //         })
    //         .then(res => {
    //             console.log(res)
    //             setFetchedRecipes(res.items)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    //     };
    // }
    
    return(
        
        <div className="outerContainter">
            <Header />
            <div className={classes.innerContainer}>
        <Card className={classes.root} tag="div">
            <CardActionArea style={{ borderRadius: '1rem'}}>
            <CardMedia 
                className={classes.media}
                component="img"
                src={foodImage.fields.file.url}
                alt={title}
                title={title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">{title}</Typography>
                {ingredients.map((ingredient, index) => {
                    return(
                        <Typography key={index} variant="body2" color="textSecondary">
                        {ingredient}
                        </Typography>
                    )
                })} 
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