import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import SingleRecipe from './SingleRecipe';
import { Redirect } from 'react-router-dom';

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
    console.log(recipes)
    const classes = useStyles();
    const {title, desciption, foodImage, ingredients, category} = recipes.recipe.fields;
    // const [redirect, setRedirect] = useState(false)
    // console.log('title',title, 'description', desciption, 'foodImage', foodImage, 'ingredients', ingredients, "category", category)
    console.log(recipes)
    function onClickCard(e){
        e.preventDefault();
        console.log(recipes);
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
                        <Typography variant="body2" color="textSecondary" component="p">
                            {/* {ingredients.map((ingredient, index) => {
                                return(
                                    <p key={index}>{ingredient}</p>
                                )
                            })} */}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Link to={{pathname: `/singleRecipe/${title}`, params: {recipes}}}  size="small" color="primary" >
                        Learn More
                    </Link>
                </CardActions>
            {/* <h1>{title}</h1>
            <p>{desciption}</p>
            <img className="image" src={foodImage.fields.file.url} alt={title} title={title}></img>
            <section>
                {ingredients.map((ingredient, index) => {
                    return(
                        <p key={index}>{ingredient}</p>
                    )
                })}
            </section>
            <section >
                {category.map((cat, index )=>{
                return(
                    <p key={index}>{cat.fields.title}</p>
                )
            })}
            </section> */}
            {/* {redirect && <SingleRecipe recipes={recipes} /> } */}
            </Card>
    )
}

// export default function MediaCard() {
//   const classes = useStyles();

//   return (
//     <Card className={classes.root}>
//       <CardActionArea>
//         <CardMedia
//           className={classes.media}
//           image="/static/images/cards/contemplative-reptile.jpg"
//           title="Contemplative Reptile"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             Lizard
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//             Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
//             across all continents except Antarctica
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <Button size="small" color="primary">
//           Share
//         </Button>
//         <Button size="small" color="primary">
//           Learn More
//         </Button>
//       </CardActions>
//     </Card>
//   );
// }
