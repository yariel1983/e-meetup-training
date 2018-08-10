import React from 'react';
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { browserhistory } from "react-router";
import PropTypes from 'prop-types';
import {Consumer} from "../stores/AppContext.jsx";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faStar from '@fortawesome/fontawesome-free-regular/faStar';

class ProductDetails extends React.Component {
    constructor(props) {
        super(props);
        
    this.state = {quantity: 0};
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
    }
    
    handleChange(event) {
        this.setState({quantity: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
    }    
    
    
    
    render () {

                            return (
                                <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3 ">
                                    <div className="containerleftProduct mr-5 p-2">
                                        <img className="card-img-top" src={product.images[0].src} />
                                    </div>
                                    <div className="containerRigthProduct mr-5 p-2">
                                        <h1 className="mb-4">{product.name}</h1>
                                        <div className="d-flex align-items-center justify-content-between mb-4">
                                            <ul className="list-inline mb-0">
                                                <li className="list-inline-item h4 font-weight-light mb-0">${product.sale_price}</li>
                                                <li className="list-inline-item text-muted font-weight-light"> 
                                                    <del>${product.regular_price}</del>
                                                </li>
                                            </ul>
                                            <div className="d-flex align-items-center">
                                                <ul className="list-inline mr-2 mb-0">
                                                    <span><FontAwesomeIcon className="fas fa-star text-dark" icon={faStar} /></span>
                                                    <span><FontAwesomeIcon className="fas fa-star text-dark" icon={faStar} /></span>
                                                    <span><FontAwesomeIcon className="fas fa-star text-dark" icon={faStar} /></span>
                                                    <span><FontAwesomeIcon className="fas fa-star text-dark" icon={faStar} /></span>
                                                    <span><FontAwesomeIcon className="fas fa-star text-dark" icon={faStar} /></span>
                                                </ul><span className="text-muted text-sm mt-1">REVIEWS</span>
                                                
                                            </div>
                                            <ul className="list-inline">
                                                <label className=" font-weight-bold">Items <span> (required) </span></label>
                                                <input type="number" value={this.state.quantity} onChange={this.handleChange} />
                                                <li className="list-inline-item">
                                                    <button className="btn btn-primary" type="Add to cart" value="Add to cart" onClick={() => actions.addProductToCart(product.id,this.state.quantity)} />                                            
                                                </li>
                                                <li className="list-inline-item"><a href="#" className="btn btn-outline-secondary mb-1"> 
                                                    <i className="far fa-heart mr-2"></i>Add to wishlist</a>
                                                </li> 
                                            </ul>
                                        </div>
                                        <span className="align-items-center">
                                            <p className="mb-4 text-muted">{product.description}</p>
                                        </span>
                                        
                                        <ul className="list-inline">
                                            <label className="font-weight-bold mr-3">Items <span> (required) </span></label>
                                            <input type="number" value={this.state.quantity} onChange={this.handleChange} id="proquant"/>
                                            <li className="list-inline-item">
                                                <input className="btn btn-primary btn-sm ml-3" type="Add to cart" value="Add to cart" name="Add to Cart" onClick={() => actions.addProductToCart(product.id,this.state.quantity)} />                                            
                                            </li>
                                            
                                        </ul>
                                    </div>
                                </div>);
                            }
                }
                        
    
                    </Consumer>
                </div>
            </div>);
        }
}
 
export default ProductDetails;

ProductDetails.propTypes = {
    artId: PropTypes.string   
    };
