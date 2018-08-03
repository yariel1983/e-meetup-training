import React from 'react';
import 'bootstrap';
import { Link } from "react-router-dom";

function Footer(props){
    return (
       
        <footer className="page-footer font-small unique-color-dark pt-4 bg-dark text-white">
            <div className="container">
                <ul className="list-unstyled list-inline text-center py-2">
                    <li className="list-inline-item">
                        <h5 className="mb-1">Register for free</h5>
                    </li>
                    <li className="list-inline-item">
                        <Link className="nav-item nav-link " to={"/Register"}>
                            <button type="button" className="btn btn-outline-warning">Sign-Up!</button>
                        </Link>
                    </li>
                </ul>
                <div className="textwidget mt-5 text-center">
                    <div>
                        <a href="[full link to your Twitter]"/>
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
            </div>
            
            <div className="footer-copyright text-center py-3">© 2018 Copyright:
                <a href="https://www.4geeksacademy.co/"> 4Geeks Academy Team</a>
            </div>
        </footer>

            );
}   
    
export default Footer;
 
            
                
                
            
            
            


