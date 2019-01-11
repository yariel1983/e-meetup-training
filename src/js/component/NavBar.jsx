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
import faDumbbell from '@fortawesome/fontawesome-free-solid/faDumbbell';


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
                <div>   
                    <div className="container-fluid Navbar">
                        <nav className="navbar navbar-expand-lg navbar-toggler-sm navbar-dark fixed-top shadow-lg bg-dark align-items-center" id="mynavbar">
                            <Link to={"/"} className="nav-item d-flex mr-3">
                                <span>&nbsp;<FontAwesomeIcon className="fa Dumbbell text-warning fa-3x" icon={faDumbbell} /></span>
                            </Link>
                            
                            <button className="navbar-toggler float-sm-md-lg-right border-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon float-sm-md-lg-right"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                                   
                                <Link to={"/"} className="nav-item nav-link active" >Home <span className="sr-only">(current)</span></Link>
                                <Link to={"/products"} className="nav-item nav-link" >Products</Link>
                                {/*<Link to={"/DetailsProduct"} className="nav-item nav-link" >DetailsProduct</Link>*/}
                                <Link to={"/training"} className="nav-item nav-link" >Training Videos</Link>
                                {/*<Link to={"/events"} className="nav-item nav-link" >Events</Link>*/}
                                <Link to={"/contact"} className="nav-item nav-link" >Contact</Link>
                                <Link to={"/about"} className="nav-item nav-link" >About</Link>
                                <Link to={"/cart"} className="nav-item nav-link">
                                    <span>&nbsp;<FontAwesomeIcon className="fa ShoppingCart text-warning" icon={faShoppingCart} /></span>
                                    <span className="badge badge-pill badge-danger" id="cartnoti">{cartNumItem}</span>
                                </Link>
                                <div className="navbar-nav mr-auto ">
                                    <div className="d-flex">
                                        <form className="form-inline my-2 my-lg-0">
                                            <input className="form-control btn-sm mr-sm-0" type="search" placeholder="Search" aria-label="Search" id="navsearch"/>
                                            <button className="btn btn-primary btn-sm text-white my-2 my-sm-0 mr-0" type="submit" id="navsearchbutton">
                                                <span><FontAwesomeIcon className="fas fa-search text-dark" icon={faSearch} /></span>  
                                            </button>
                                        </form>
                                    </div>           
                                </div>               
                            </div>          
                        </nav>          
                    </div>          
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
    