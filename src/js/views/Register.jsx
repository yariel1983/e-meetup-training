import React from 'react';
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from '../component/NavBar.jsx';
import Footer from '../component/Footer.jsx';


export default class Contact extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <NavBar />
               
                <div id="login-box">
                    <div className="left-box">
                        <h1> Sign Up</h1>
          
                        <input type="text" name="username" placeholder="Username"/>
                        <input type="text" name="email" placeholder="Email"/>
                        <input type="password" name="password" placeholder="Password"/>
        
                        <input type="password" name="password2" placeholder="Retype password"/>
        
                        <input type="submit" name="signup-button" value="Sign Up"/>
        
                    </div>
                    <div className="right-box">
                        <span class="signinwith">Sign in with<br/>Social Network     </span>
        
                        <button className="social facebook">Log in with Facebook</button>    
                        <button className="social twitter">Log in with Twitter</button> 
                        <button className="social google">Log in with Google+</button> 
            
        
                    </div>
                    <div className="or">OR</div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}