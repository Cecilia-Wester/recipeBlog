import React from "react";
import Header from './Header';
import Footer from './Footer';
import Recipes from './Recipes';

export default function Main(){
    return(
        <>
            <Header />
            <Recipes />
            <Footer />
        </>
    )
}