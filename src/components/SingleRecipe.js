import React, { useState, useQuery } from "react";
import ReactDOM from 'react-dom';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        width: 345,
    //   maxWidth: 345,
      padding: "20px",
      boxSizing: 'border-box',
      margin: '10px',
      
      
    },
    media: {
      height: 300,
    },
  });

export default function SingleRecipe(recipes) {
    console.log(recipes)
    const classes = useStyles();
    const {title, desciption, foodImage, ingredients, category} = recipes.location.params.recipes.recipe.fields;

    return(
        <Card className={classes.root}>
            <CardActionArea style={{ borderRadius: '1rem'}}>
            <CardMedia 
                className={classes.media}
                component="img"
                src={foodImage.fields.file.url}
                alt={title}
                title={title}
                style={{width: "300px", height: "300px", objectFit:"cover", objectPosition: "center", margin: '0px', borderRadius: '1rem'}}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">{title}</Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {ingredients.map((ingredient, index) => {
                        return(
                            <p key={index}>{ingredient}</p>
                        )
                    })} 
                </Typography>
            </CardContent>
        </CardActionArea> 
        <CardActions>
            <Button size="small" color="primary">
                Share
            </Button>
            <Button size="small" color="primary">
                Learn More
            </Button>
        </CardActions> 
    </Card>
    )
}