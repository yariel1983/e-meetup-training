import React from 'react';
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from '../component/NavBar.jsx';
import TrainingVideo from '../component/TrainingVideo.jsx';
import Banner from '../component/Banner.jsx';
import Footer from '../component/Footer.jsx';
export default class Training extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <NavBar />
                <Banner />
                <TrainingVideo />
                <Footer />
            </React.Fragment>
        );
    }
}
