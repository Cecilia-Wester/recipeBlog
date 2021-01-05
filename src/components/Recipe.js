import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
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

export default function Recipe( recipes ){
    const classes = useStyles();
    const {title, desciption, foodImage, ingredients, category} = recipes.recipe.fields;
    console.log(recipes)
    function onClickCard(e){
        e.preventDefault();
        <Link to='/singleRecipe' recipes={recipes} ></Link>
    }

    return(
        <Card className={classes.root} >
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
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Link to={{pathname: `/singleRecipe/${title}`, params: {recipes}}}  size="small" color="primary" >
                    Gå till recept
                </Link>
            </CardActions>
        </Card>
    )
}


