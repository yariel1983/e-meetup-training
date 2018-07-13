import React from 'react';
import { Link } from "react-router-dom";


//NavBar
export class NavBar extends React.Component{
    
    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <img src="http://www.hertsmereleisure.co.uk/centre_uploads/1/images/HM%20-%20Training%20Academy%20logo.jpg" width="150 px" height="60 px"/>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="#"></a>
            
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Products <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Trainings <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Contacts <span className="sr-only">(current)</span></a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
                        <button className="btn btn-outline-success my-2 my-sm-0 ml-2" type="submit">Log in</button>
                    </form>
                </div>
            </nav>
            
           
            
            
        );
    }
}
                        
                    
