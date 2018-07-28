import React from 'react';
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { browserhistory } from "react-router";
import PropTypes from 'prop-types';
import {Consumer} from "../stores/AppContext.jsx";


function ProductDetails(props) {
    return (
        <div className="container">
            <div className="row">
                <Consumer>
                    {
                ({ state, actions }) => {   const product = state.article.find( product => product.articleid === parseInt(props.artId) );
                            if (!product) {
                                return <div>Erros, Contact to Administrator</div>;
                            } else {

                            return (
                                <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3 ">
                                    <div className="containerleftProduct mr-5 p-2">
                                        <img className="card-img-top" src={product.imgurl} />
                                    </div>
                                    <div className="containerRigthProduct mr-5 p-2">
                                        <h1 className="mb-4">{product.name}</h1>
                                        <div className="d-flex align-items-center justify-content-between mb-4">
                                            <ul className="list-inline mb-0">
                                                <li className="list-inline-item h4 font-weight-light mb-0">${product.price}</li>
                                                <li className="list-inline-item text-muted font-weight-light"> 
                                                    <del>${product.oldprice}</del>
                                                </li>
                                            </ul>
                                            <div className="d-flex align-items-center">
                                                <ul className="list-inline mr-2 mb-0">
                                                    <li className="list-inline-item mr-0"><i className="fa fa-star text-primary"></i></li>
                                                    <li className="list-inline-item mr-0"><i className="fa fa-star text-primary"></i></li>
                                                    <li className="list-inline-item mr-0"><i className="fa fa-star text-primary"></i></li>
                                                </ul><span className="text-muted text-uppercase text-sm">25 reviews</span>
                                            </div>
                                        </div>
                                        <p className="mb-4 text-muted">{product.desc}</p>
                                        <form >
                                            <div className="row">
                                                <div className="col-12 detail-option mb-5">
                                                    <label className="detail-option-heading font-weight-bold">Items <span> (required) </span></label>
                                                    <input name="items" type="number" value="1" />
                                                </div>
                                            </div>
                                            <ul className="list-inline">
                                                <li className="list-inline-item">
                                                    <button type="submit" className="btn btn-dark btn-lg mb-1"><i className="fa fa-shopping-cart mr-2"></i>Add to Cart</button>
                                                </li>
                                                <li className="list-inline-item"><a href="#" className="btn btn-outline-secondary mb-1"> 
                                                    <i className="far fa-heart mr-2"></i>Add to wishlist</a>
                                                </li> 
                                            </ul>
                                        </form>
                                    </div>
                                </div>);
                            }
                }
            }
                    

                </Consumer>
            </div>
        </div>);
}

ProductDetails.propTypes = {
    artId: PropTypes.string
    };

export default ProductDetails;