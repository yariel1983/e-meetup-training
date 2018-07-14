import React from 'react';
import 'bootstrap';
import { Link } from "react-router-dom";

function Footer(props){
    return (
        <footer className="container py-5 text-center">
            <div className="row">
                <div className="col-12 col-md">
                    <small className="d-block mb-3 text-muted">&copy; 2018-2019</small>
                </div>
                <div className="col-6 col-md">
                    <h5>Buy</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="text-muted" href="#">Registration</a></li>
                        <li><a className="text-muted" href="#">Stores </a></li>
                        <li><a className="text-muted" href="#">Warranty</a></li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>Sell</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="text-muted" href="#">Start Selling</a></li>
                        <li><a className="text-muted" href="#">Business Sellers</a></li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>Resources</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="text-muted" href="#">Business</a></li>
                        <li><a className="text-muted" href="#">Social Network</a></li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>About</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="text-muted" href="#">Team</a></li>
                        <li><a className="text-muted" href="#">Privacy</a></li>
                        <li><a className="text-muted" href="#">Terms</a></li>
                    </ul>
                </div>
            </div>
        </footer>   
        
        );
}

export default Footer;
                    
                        
                        
                        
                        