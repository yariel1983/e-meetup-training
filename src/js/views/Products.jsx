import React from 'react';
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from '../component/NavBar.jsx';
import Article from '../component/Article.jsx';
import ProductCard from '../component/ProductCard.jsx';
import Footer from '../component/Footer.jsx';
export default class Products extends React.Component{
    
    
    render(){
        return (
            <React.Fragment>
                <NavBar />
<<<<<<< HEAD
                <Article />
                <Footer />
=======
                <ProductCard />
                <footer />
                
>>>>>>> 3c0b44aed79b07101baded8e75688eb5bf69d939
            </React.Fragment>
        );
    }
}