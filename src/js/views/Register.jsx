import React from 'react';
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from '../component/NavBar.jsx';
import Footer from '../component/Footer.jsx';
import Banner from '../component/Banner.jsx';
import Login from '../component/Login.jsx';
import PropTypes from 'prop-types';

export default class Register extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <NavBar />
                <Banner />
                <Login  />
            </React.Fragment>
        );
    }
}

Register.propTypes = {
    match: PropTypes.object
    };