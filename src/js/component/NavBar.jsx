import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {withSession} from '../stores/AppContext.jsx';
import $ from "jquery";
import {Consumer} from "../stores/AppContext.jsx";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faUser from '@fortawesome/fontawesome-free-regular/faUser';
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch';
import faShoppingCart from '@fortawesome/fontawesome-free-solid/faShoppingCart';


import Modal from 'react-responsive-modal';



class Navbar extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
                        username: '',
                        password: '',
                        modal: false,
                        open: false  };
                        
        this.myRef = React.createRef();
    
        this.onOpenModal = this.onOpenModal.bind(this);    
        this.onCloseModal = this.onCloseModal.bind(this);
    }
    
    
    onOpenModal () {
        this.setState({ open: true });
    }


    onCloseModal () {
        this.setState({ open: false });
    }
    
    /*componentDidUpdate(prevProps, prevState) {
        // Previous ThemeContext value is prevProps.theme
        // New ThemeContext value is this.props.theme
        if(this.props.session.token) $('#exampleModal').modal('hide');
    }*/

    render(){
        let homeActive = this.props.currentView === "home" ? "active" :"";
        const { open } = this.state;
        const {session, actions, cartNumItem} = this.props;
        
            return(
    
                <div className="containerNavbar">
                    <nav className="navbar navbar-expand-lg navbar-toggler-sm navbar-light fixed-top shadow-lg bg-white align-items-center" id="mynavbar">
                        <Link to={"/"} className="nav-item d-flex mr-3">
                            <img src="http://www.hertsmereleisure.co.uk/centre_uploads/1/images/HM%20-%20Training%20Academy%20logo.jpg" id="imglogo" width="100 px" height="40 px"/>
                        </Link>
                        
                        <button className="navbar-toggler float-sm-md-lg-right border-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon float-sm-md-lg-right"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className="navbar-nav mr-auto">
                                <div className="d-flex">
                                    <form className="form-inline my-2 my-lg-0">
                                        <input className="form-control btn-sm mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                                        <button className="btn btn-dark btn-sm text-white my-2 my-sm-0 mr-5" type="submit">
                                            <span><FontAwesomeIcon className="fas fa-search text-white" icon={faSearch} />Search</span>  
                                        </button>
                                    </form>
                                </div>                              
                                <Link to={"/"} className="nav-item nav-link active" >Home <span className="sr-only">(current)</span></Link>
                                <Link to={"/products"} className="nav-item nav-link" >Products</Link>
                                {/*<Link to={"/DetailsProduct"} className="nav-item nav-link" >DetailsProduct</Link>*/}
                                <Link to={"/training"} className="nav-item nav-link" >Trainings</Link>
                                {/*<Link to={"/events"} className="nav-item nav-link" >Events</Link>*/}
                                <Link to={"/contact"} className="nav-item nav-link" >Contacts</Link>
                                <Link to={"/about"} className="nav-item nav-link" >About</Link>
                                <Link to={"/cart"} className="nav-item nav-link">
                                    <span>&nbsp;<FontAwesomeIcon className="fa ShoppingCart text-dark" icon={faShoppingCart} /></span>
                                    <span className="badge badge-pill badge-danger" id="cartnoti">{cartNumItem}</span>
                                </Link>
                                
                                {
                                    session && typeof(session.user_nicename) !== 'undefined' ?
                                        
                                        <div className="d-sm-inline-flex align-items-sm-center" id="dropmenu">
                                            <div className="linkRegister m-0 p-0">
                                                <Link className="nav-item nav-link m-0 p-0" to={"/Register"}>
                                                    Hello, {session.user_nicename}
                                                    {/*.charAt(0).toUpperCase()+session.user_display_name.substring(1)}*/}
                                                </Link>
                                            </div>
                                            <div className="linkRegister m-0 p-0">
                                                <Link  className="nav-item nav-link " to={"/"} >
                                                    <span className="nav-item nav-link m-0 p-0" href="#" onClick={() => actions.logout()}>&nbsp;  Logout </span>
                                                </Link>
                                            </div>
                                        </div>
                                    :
                                        
                                        <div className="d-sm-inline-flex align-items-sm-center">
                                            <div className="linkRegister ml-2 mr-2 p-0">
                                                <Link className="nav-item nav-link m-0 p-0" to={"/Register"}>
                                                    Sign-up
                                                </Link>
                                            </div>
                                            <div className="buttonLogin m-0 p-0">
                                                <button type="button" 
                                                        className="btn btn-outline-light text-dark" 
                                                        onClick={this.onOpenModal}>
                                                    <span><FontAwesomeIcon className="fas fa-search text-dark" icon={faUser} /> Login</span>
                                                </button>
                                            </div>
                                        </div>
                                }
                                
                                <div className="containerModalNavbar">
                                    <div ref={this.myRef} />
                                    <Modal open={open} onClose={this.onCloseModal} center container={this.myRef.current}>
                                        <button className="btn btn-dark rounded-circle mb-3">
                                            <span><FontAwesomeIcon className="fas fa-search text-light fa-2x" icon={faUser} /></span>
                                        </button>
                                        <div className="formModal">
                                            <form role="form" onSubmit={(e) => {e.preventDefault();
                                                                                actions.loadSession(this.state.username, this.state.password);
                                                                                this.onCloseModal();
                                                                                {/* actions.loadSession(this.state.username, this.state.password) ?
                                                                                    
                                                                                    this.onCloseModal()
                                                                                    
                                                                                :
                                                                                    alert('Error, contact to administrator');
                                                                                    
                                                                                */}
                                                                                }} className="col-sm-12 p-0">
                                                <div className="containerUserFormModal">
                                                    <div className="form-group row m-0">
                                                        <div className="col-12 col-sm-12 align-content-center  p-0">
                                                            <div className="col-10 col-sm-10 ml-4 mb-0 mr-0 mt-0 p-0">
                                                                <style>{'.col-10 {line-height: 0.5 !important}'}</style>
                                                                <input className="inputUserModal form-control is-valid form-control-sm" type="text" name="user" value={this.state.username} placeholder="Username" onChange={(e) => this.setState({username: e.target.value})} required/>&nbsp;&nbsp;
                                                                <style>{'.inputUserModal {border-color: #343a40 !important }'}</style>
                                                            </div>
                                                            <div className="col-10 col-sm-10 ml-4 mb-1 p-0">
                                                                <input className="inputPasswordModal form-control is-valid form-control-sm" type="password" name="password" value={this.state.password} placeholder="Password" onChange={(e) => this.setState({password: e.target.value})} required/>
                                                                <style>{'.inputPasswordModal {border-color: #343a40 !important}'}</style>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 m-0 p-0">
                                                            <div className="d-flex flex-row-reverse p-2 ">    
                                                                <div className="firstButtonModal order-1  ">
                                                                    <small><button className="btn btn-outline-dark btn-sm ml-auto" type="submit" id="submitbotton">Login</button></small>
                                                                </div>
                                                                <div className="SecondButtonModal order-0 ml-2 ">
                                                                    <button className="btn btn-outline-dark btn-sm ml-auto" type="button" onClick={this.onCloseModal}>Close</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </Modal>
                                </div>
                                
                            </div>
                        </div>
                    
                    </nav>
                    
                </div>
            );
        }
}


export default withSession(Navbar);

Navbar.propTypes = {
  session: PropTypes.object,
  actions: PropTypes.object,
  currentView: PropTypes.string,
  cartNumItem: PropTypes.number
};
    