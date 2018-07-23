import React from 'react';
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from '../component/NavBar.jsx';
import ProductCard from '../component/ProductCard.jsx';
import BannerProduct from '../component/BannerProduct.jsx';
import Footer from '../component/Footer.jsx';
import Article from '../component/Article.jsx';


export default class Products extends React.Component{
    constructor(props) {
        super(props);
        
        }
    
    render(){
        return (
            <React.Fragment>
                <NavBar />
                <BannerProduct />
<<<<<<< HEAD
                <ProductCard />

=======
>>>>>>> ab7d0bb9a9509487e2998aadf63f0bab590042a3
                <Article />
                <ProductCard />
                <Footer />
            </React.Fragment>
        );
    }
}
   