import React from 'react';
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from '../component/NavBar.jsx';
import HomeSlide from '../component/HomeSlide.jsx';


export default class Home extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <NavBar />
                <HomeSlide />
                
            </React.Fragment>
        );
    }
}



