import React from 'react';
import 'bootstrap';
import { Link } from "react-router-dom";
import Info from '../component/Info.jsx';

function Footer(props){
    return (
       
        <footer className="footer bg-dark text-white">
            <div className="container-footer">
                <ul className="text-center">
                    <li className="list-inline-item">
                        <small className="mb-1">Register for free</small>
                    </li>
                    <li className="list-inline-item">
                        <Link className="nav-item nav-link " to={"/Register"}>
                            <small><button type="button" className="btn btn-outline-warning btn-sm">Sign-Up!</button></small>
                        </Link>
                    </li>
                </ul>
                <div className="textwidget text-center mb-1">
                    <div>
                        <a href="[full link to your Twitter]"/>
                        <img title="Twitter" src="https://socialmediawidgets.files.wordpress.com/2014/03/01_twitter.png" alt="Twitter" width="20" height="20" />
                        <a href="[full link to your Pinterest]"/> 
                        <img title="Pinterest" src="https://socialmediawidgets.files.wordpress.com/2014/03/13_pinterest.png" alt="Pinterest" width="20" height="20" />
                        <a href="[full link to your Facebook page]"/>
                        <img title="Facebook" src="https://socialmediawidgets.files.wordpress.com/2014/03/02_facebook.png" alt="Facebook" width="20" height="20" />
                        <a href="linkedinaddress"/>
                        <img title="LinkedIn" src="https://socialmediawidgets.files.wordpress.com/2014/03/07_linkedin.png" alt="LinkedIn" width="20" height="20" />
                        <a href="instagramaddress"/>
                        <img title="Instagram" src="https://socialmediawidgets.files.wordpress.com/2014/03/10_instagram.png" alt="RSS" width="20" height="20" />
                        <small><div className="footer-copyright text-center">© 2018 Copyright:
                            <a href="https://www.4geeksacademy.co/"> 4Geeks Academy Team</a>
                        </div></small>
                    </div>
                </div>
            </div>
                
            
            
        </footer>

            );
}   
    
export default Footer;
 
            
                
                
            
            
            


