import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {withSession} from '../stores/AppContext.jsx';
import $ from "jquery";
import {Consumer} from "../stores/AppContext.jsx";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faUser from '@fortawesome/fontawesome-free-regular/faUser';
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch';



class Navbar extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
          username: '',
          password: '',
          modal: false
        };
    }
    
    /*componentDidUpdate(prevProps, prevState) {
        // Previous ThemeContext value is prevProps.theme
        // New ThemeContext value is this.props.theme
        if(this.props.session.token) $('#exampleModal').modal('hide');
    }*/

    render(){
        let homeActive = this.props.currentView === "home" ? "active" :"";
        
        const {session, actions} = this.props;
        
            return(
    
                <div>
                    <nav className="navbar navbar-expand-lg navbar-toggler-sm navbar-light bg-white border-bottom " id="mynavbar">
                        <Link to={"/"} className="nav-item text-left">
                            <img src="http://www.hertsmereleisure.co.uk/centre_uploads/1/images/HM%20-%20Training%20Academy%20logo.jpg" id="imglogo" width="100 px" height="40 px"/>
                        </Link>
                        
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className="navbar-nav mr-auto">
                                <div className="container">
                                    <form className="form-inline my-2 my-lg-0">
                                        <input className="form-control btn-sm mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                                        <button className="btn btn-secondary btn-sm &nbsp;text-white my-2 my-sm-0" type="submit">
                                            <span><FontAwesomeIcon className="fas fa-search text-white" icon={faSearch} />&nbsp;Search</span>  
                                        </button>
                                    </form>
                                </div>                              
                                <Link to={"/"} className="nav-item nav-link active" >Home <span className="sr-only">(current)</span></Link>
                                <Link to={"/about"} className="nav-item nav-link" >About</Link>
                                <Link to={"/products"} className="nav-item nav-link" >Products</Link>
                                {/*<Link to={"/DetailsProduct"} className="nav-item nav-link" >DetailsProduct</Link>*/}
                                <Link to={"/training"} className="nav-item nav-link" >Trainings</Link>
                                {/*<Link to={"/events"} className="nav-item nav-link" >Events</Link>*/}
                                <Link to={"/contact"} className="nav-item nav-link" >Contacts</Link>
                                <Link to={"/cart"} className="nav-item nav-link">Cart</Link>
                                <Link to={"/register"} className="nav-item nav-link">Register</Link>
                            </div>
                        </div>
    
                        {
                            session && typeof(session.user_nicename) !== 'undefined' ?
                                
                                <div className="d-flex">
                                    <Link className="nav-item nav-link " to={"/Register"}>
                                        Hello, {session.user_nicename}
                                        {/*.charAt(0).toUpperCase()+session.user_display_name.substring(1)}*/}
                                    </Link>
                                    <a className="nav-item nav-link" href="#" onClick={() => actions.logout()}>
                                        Logout
                                    </a>
                                </div>
                            :
                                <button type="button" 
                                        className="btn btn-success btn-sm" 
                                        data-toggle="modal" 
                                        data-target="#exampleModal">Login</button>
                        
                            
                        }
                    </nav>
                    
                    <div className="modal fade-sm" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
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
                                        <div className="form-group">
                                            <input type="text" name="user" value={this.state.username} placeholder="Username" onChange={(e) => this.setState({username: e.target.value})} />&nbsp;&nbsp;
                                            <input type="password" name="password" value={this.state.password} placeholder="Password" onChange={(e) => this.setState({password: e.target.value})} />
                                        </div>
                                        <input className="btn btn-success btn-sm" type="submit" value="Login" id="submitbotton"/>
                                    </form>
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
                                        
                            


            
