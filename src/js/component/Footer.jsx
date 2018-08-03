import React from 'react';
import 'bootstrap';
import { Link } from "react-router-dom";

function Footer(props){
    return (
        <div>
            <footer className="container-fluid py-5 mt-5 text-center border-top">
                <div className="row">
                    <div className="col-12 col-md">
                        <small className="d-block mb-3 text-muted">&reg; 2018-2019</small>
                    </div>
                    <div className="col-6 col-md">
                        <h5> Buy</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="text-muted" href="#">Registration</a></li>
                            <li><a className="text-muted" href="#">Warranty </a></li>
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
                        <h5> About</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="text-muted" href="#">Terms</a></li>
                            <li><a className="text-muted" href="#">Privacy</a></li>
                            
                        </ul>
                    </div>
                </div>
                <div className="textwidget mt-5">
                    <div>
                        <Link to="https://twitter.com/"/>
                        <img title="Twitter" src="https://socialmediawidgets.files.wordpress.com/2014/03/01_twitter.png" alt="Twitter" width="35" height="35" />
                        <a href="[full link to your Pinterest]"/> 
                        <img title="Pinterest" src="https://socialmediawidgets.files.wordpress.com/2014/03/13_pinterest.png" alt="Pinterest" width="35" height="35"/>
                        <a href="[full link to your Facebook page]"/>
                        <img title="Facebook" src="https://socialmediawidgets.files.wordpress.com/2014/03/02_facebook.png" alt="Facebook" width="35" height="35"/>
                        <a href="linkedinaddress"/>
                        <img title="LinkedIn" src="https://socialmediawidgets.files.wordpress.com/2014/03/07_linkedin.png" alt="LinkedIn" width="35" height="35"/>
                        <a href="instagramaddress"/>
                        <img title="Instagram" src="https://socialmediawidgets.files.wordpress.com/2014/03/10_instagram.png" alt="RSS" width="35" height="35"/>
                    </div>
                </div>
                
                
            </footer>   
        </div>     
            );
}   
    
export default Footer;
                        
                            
                            
                            
                        
                        