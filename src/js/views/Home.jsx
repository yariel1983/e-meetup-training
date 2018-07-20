import React from 'react';
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from '../component/NavBar.jsx';
import HomeSlide from '../component/HomeSlide.jsx';
import ProductCard from '../component/ProductCard.jsx';
import Banner from '../component/Banner.jsx';
import Footer from '../component/Footer.jsx';

export default class Home extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <NavBar />
                <Banner />
                <HomeSlide />
                <ProductCard />
                <Footer />
                
            </React.Fragment>
        );
    }
}
               




