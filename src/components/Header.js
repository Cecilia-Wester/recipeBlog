import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import NewPost from './NewPost';
import {Link} from 'react-router-dom'

export default function Header() {
    const [modalOpen, setModalOpen] = useState(false);
    return(  
        <div style=
            {{
                width: '100vw', 
                height: "150px", 
                background: 'rgb(208,133,210)', 
                background: 'linear-gradient(132deg, rgba(208,133,210,1) 29%, rgba(255,218,242,0.9139005944174545) 100%)', 
                margin: '10px', 
                boxSizing: 'border-box', 
                paddingLeft: '24px', 
                paddingRight: '24px'
                
            }}>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital@0;1&display=swap" rel="stylesheet" />
            
            <header>
                <h1 style={{fontFamily: 'Playfair Display' }}>Cecilias matblogg</h1>
                <h4 style={{fontFamily: 'Playfair Display' }}> -mina bästa samlade recept</h4>
                <Button variant="contained" onClick={() => setModalOpen(true)}>Lägg till nytt recept</Button>
                <Link to='./newRecipe' variant="contained" onClick={() => setModalOpen(true)}>Lägg till nytt recept</Link>
            </header>
            {modalOpen && <NewPost setModalOpen={setModalOpen} modalOpen={modalOpen} /> }
        </div>
    )
}