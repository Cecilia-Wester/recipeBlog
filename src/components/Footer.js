import React from 'react';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';


export default function Footer() {
    return(
        <div style={{width: '100vw', height: '200px', display: "flex", background: '#b4b4b4', marginTop: '20px' }}>
            <div  style={{display: "flex", alignItems: "center", display: "flex", flexDirection: 'column', justifyContent: "center", alignSelf: "left"}}>
            <h1>Cecilias matblogg </h1>
            <RestaurantMenuIcon style={{height: "50px", width: "30%"}}/>
            </div>
        </div>
    )
}