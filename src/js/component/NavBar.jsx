import React from 'react';
//import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {withSession} from '../stores/AppContext.jsx';
import $ from "jquery";
import {Consumer} from "../stores/AppContext.jsx";


class Navbar extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
          username: '',
          password: '',
          modal: false
        };
    }
    
    //componentDidUpdate(prevProps, prevState) {
        // Previous ThemeContext value is prevProps.theme
        // New ThemeContext value is this.props.theme
    //    if(this.props.session.token) $('#exampleModal').modal('hide');
    //}

    render(){
            let homeActive = this.props.currentView === "home" ? "active" :"";
            
            const {session, actions} = this.props;
            
            return(
    
                <div>
                    <nav className="navbar navbar-expand-lg navbar-toggler-sm navbar-light bg-white border-bottom" id="mynavbar">
                        <img src="http://www.hertsmereleisure.co.uk/centre_uploads/1/images/HM%20-%20Training%20Academy%20logo.jpg" width="150 px" height="60 px"/>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className="navbar-nav mr-auto">
                                <div className="container">
                                    <form className="form-inline my-2 my-lg-0">
                                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                                        <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
                                    </form>
                                </div>                              
                                <Link to={"/"} className="nav-item nav-link active" >Home <span className="sr-only">(current)</span></Link>
                                <Link to={"/about"} className="nav-item nav-link" >About</Link>
                                <Link to={"/products"} className="nav-item nav-link" >Products</Link>
                                <Link to={"/training"} className="nav-item nav-link" >Trainings</Link>
                                {/*<Link to={"/events"} className="nav-item nav-link" >Events</Link>*/}
                                <Link to={"/contact"} className="nav-item nav-link" >Contacts</Link>
                                <Link to={"/cart"} className="nav-item nav-link">Cart</Link>
                                <Link to={"/register"} className="nav-item nav-link">Register</Link>
                                {
                                    session && typeof(session.user_nicename) !== 'undefined' ?
                                        
                                        <div className="d-flex">
                                            <Link className="nav-item nav-link " to={"/user/"+session.user_nicename.value}>
                                                    Hello, session.user_display_name.charAt(0).toUpperCase()+session.user_display_name.substring(1)
                                            </Link>
                                            <a className="nav-item nav-link" href="#" onClick={() => actions.logout()}>
                                                    Logout
                                            </a>
                                        </div>
                                    :
                                        
                                        <button 
                                            type="button"
                                            className="btn btn-outline-success pl-3 pr-3 mt-0 my-3 my-sm-0 ml-3" 
                                            data-toggle="modal" 
                                            data-target="#exampleModal">Login</button>
                                }
    
                            </div>
                        </div>
                
                    </nav>
                    
                    <div className="modal fade-md" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header bg-outline-secondary">
                                    <h5 className="modal-title" id="exampleModalLabel">Login</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <form role="form" onSubmit={(e) => {
                                                                        e.preventDefault();
                                                                        actions.loadSession(this.state.username, this.state.password);
                                    }}>
                                        <div className="form-group text-center">
                                            <input type="text" name="user" id="myuser"value={this.state.user} placeholder="Username" onChange={(e) => this.setState({username: e.target.value})} />
                                            <input type="password" name="password" value={this.state.password} placeholder="Password" onChange={(e) => this.setState({password: e.target.value})} />
                                        </div>
                                        <button className="btn btn-primary" id="mylogb" type="submit" value="Login">Login</button>
                                    </form>
                                    <div className="checkbox">
                                        <label className="small">
                                            <input className="Remember mr-1" type="checkbox"/>Remember me
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
}

export default withSession(Navbar);
Navbar.propTypes = {
  session: PropTypes.object,
  actions: PropTypes.object,
  currentView: PropTypes.string
};
                                        
                            
