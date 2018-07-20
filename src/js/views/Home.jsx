import React from 'react';
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from '../component/NavBar.jsx';
import HomeSlide from '../component/HomeSlide.jsx';
import ProductCard from '../component/ProductCard.jsx';
import Banner from '../component/Banner.jsx';
import BannerProduct from '../component/BannerProduct.jsx';
import Footer from '../component/Footer.jsx';
import Login from '../component/Login.jsx';

export default class Home extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <NavBar />
                <Banner />
                <HomeSlide />
                <BannerProduct />
                <ProductCard />
                <Footer />
                
            </React.Fragment>
        );
    }
}
               




