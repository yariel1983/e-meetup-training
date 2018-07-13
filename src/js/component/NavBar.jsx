import React from 'react';
import { Link } from "react-router-dom";


//NavBar
function NavBar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <img src="http://www.hertsmereleisure.co.uk/centre_uploads/1/images/HM%20-%20Training%20Academy%20logo.jpg" width="150 px" height="60 px"/>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="#"></a>
        
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to={"/"} className="nav-item nav-link active" >Home <span className="sr-only">(current)</span></Link>
                    <Link to={"/About"} className="nav-item nav-link" >About</Link>
                    <Link to={"/Products"} className="nav-item nav-link" >Products</Link>
                    <Link to={"/Training"} className="nav-item nav-link" >Trainings</Link>
                    <Link to={"/Events"} className="nav-item nav-link" >Events</Link>
                    <Link to={"/Contact"} className="nav-item nav-link" >Contacts</Link>
                </div>
                <div className="container text-right">
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
                        <button className="btn btn-outline-success my-2 my-sm-0 ml-2" type="submit">Log in</button>
                    </form>
                </div>
            </div>
        </nav>
            
    );
}
            
export default NavBar;           
            

    

                        
                    
