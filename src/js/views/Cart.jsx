import React from 'react';
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from '../component/NavBar.jsx';
import PageAbout from '../component/PageAbout.jsx';
import UserCart from '../component/UserCart.jsx';
import Footer from '../component/Footer.jsx';
export default class About extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <NavBar />
                <UserCart />
                <Footer />
                
            </React.Fragment>
        );
    }
}