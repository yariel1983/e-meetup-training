import React from 'react';
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from '../component/NavBar.jsx';
import Footer from '../component/Footer.jsx';
import EventCard from '../component/EventCard.jsx';

export default class Events extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <NavBar />
                <EventCard />
                <Footer />
                
            </React.Fragment>
        );
    }
}