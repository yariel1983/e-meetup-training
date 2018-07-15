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
                <ProductCard />
                <footer />
                
            </React.Fragment>
        );
    }
}