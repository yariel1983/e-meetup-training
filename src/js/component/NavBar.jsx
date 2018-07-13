import React from 'react';
import { Link } from "react-router-dom";


//NavBar
function NavBar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <img src="http://www.hertsmereleisure.co.uk/centre_uploads/1/images/HM%20-%20Training%20Academy%20logo.jpg" width="150 px" height="60 px"/>
            <div className="container">
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
                    <button className="btn btn-outline-success my-2 my-sm-0 ml-2" type="submit">Log in</button>
                </form>
            </div>   
            <div className="navbar-brand" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to={"/"} className="nav-item nav-link active" >Home <span className="sr-only">(current)</span></Link>
                    <Link to={"/about"} className="nav-item nav-link" >About</Link>
                    <Link to={"/products"} className="nav-item nav-link" >Products</Link>
                    <Link to={"/training"} className="nav-item nav-link" >Trainings</Link>
                    <Link to={"/events"} className="nav-item nav-link" >Events</Link>
                    <Link to={"/contact"} className="nav-item nav-link" >Contacts</Link>
                </div>
            </div>
        
        </nav>
            
    );
}
            
export default NavBar;           
            
            
           
        
            
                

    

                        
                    
