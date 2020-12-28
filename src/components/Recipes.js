import React, { useState, useEffect } from 'react';
import Recipe from './Recipe';
import { client } from "../client";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function Recipes() {
    const [fetchedRecipes, setFetchedRecipes] = useState([])
    function fetchData(){
        client.getEntries({
            'content_type': "recipe"
        })
        .then(res => {
            console.log(res)
            setFetchedRecipes(res.items)
            // res.items.map(item => {
            //     console.log(item)
            //     setFetchedRecipes(item.fields)
            // })
        })
        .catch(error => {
            console.log(error)
        })
    };
    
    useEffect(() => {
        fetchData();
    }, [])
    
    return(
        <React.Fragment>
        <CssBaseline />
        <Container style={{width:"90vw", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography component="div" style={{  background: 'rgb(208,133,210)', display: 'flex', borderRadius: '.5rem'}}>
            {fetchedRecipes.map((recipe, index) => {
                return(
                    <Recipe key={index} recipe={ recipe } />
                )}) 
            }
            </Typography>
        </Container>
      </React.Fragment>
        // <div>
        //     <h1>Hello from Recipes</h1>
        //     {fetchedRecipes.map((recipe, index) => {
        //         return(
        //         <Recipe key={index} recipe={ recipe } />
        //     )}) 
        //      }
        // </div>
    )
}