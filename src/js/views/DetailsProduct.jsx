import React from 'react';
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from '../component/NavBar.jsx';
import ProductDetails from '../component/ProductDetails.jsx';
import Footer from '../component/Footer.jsx';
import PropTypes from 'prop-types';

export default class DetailsProduct extends React.Component{
    constructor(props) {
        super(props);
        }
    render(){
        return (
            <React.Fragment>
                <NavBar />
                <ProductDetails artId={this.props.match.params.artId}/>
                <Footer />
                
            </React.Fragment>
        );
    }
}
DetailsProduct.propTypes = {
    match: PropTypes.object
    };