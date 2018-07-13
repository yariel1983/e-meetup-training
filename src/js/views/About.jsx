import React from 'react';
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from '../component/NavBar.jsx';

export default class About extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <NavBar />
                
            </React.Fragment>
        );
    }
}