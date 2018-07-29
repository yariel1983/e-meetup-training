import React from 'react';
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from '../component/NavBar.jsx';
import HomeSlide from '../component/HomeSlide.jsx';
import ProductCard from '../component/ProductCard.jsx';
import Banner from '../component/Banner.jsx';
import BannerProduct from '../component/BannerProduct.jsx';
import Article from '../component/Article.jsx';
import Footer from '../component/Footer.jsx';
import Login from '../component/Login.jsx';
import TrainingVideo from '../component/TrainingVideo.jsx';

export default class Home extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <NavBar />
                <HomeSlide />
                <Footer />
                
            </React.Fragment>
        );
    }
}
               
               




                
