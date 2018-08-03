import React from 'react';
import { Link } from "react-router-dom";
import {Consumer} from "../stores/AppContext.jsx";
import PropTypes from 'prop-types';
import {withSession} from '../stores/AppContext.jsx';


class CheckoutCart extends React.Component{
    constructor() {
        super();
        this.state = {
            discount: 25,
            totalItems: 0,
            totalPrice: 0
        };
    }
    
    render(){
        const { cart } = this.props;
    

        if (cart.length <= 0) {
            return (
                <div className="container mt-5">
                    <div className="row">
                        <img className="card-img-top" src="https://envato-shoebox-0.imgix.net/d058/5643-5fee-4d55-8c62-d322b6ddf1ed/012812+%2810%29.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=700&s=2e7b71bb4617088f5f6dd9daa5644873" alt="Card image cap"/>
                        <h1>Your shopping cart is empty, but it does not have to be.</h1>
                        <h4>There are lots of great deals and one-of-a-kind items just waiting for you.</h4>
                        <h4>Start shopping, and look for the Add to cart button. You can add several items to your cart from different sellers and pay for them all at once.</h4>
                        <h4>Covers your purchase price plus original shipping on virtually all items.</h4>

                        <h5>Do you have a gift certificate or promotional code? We will ask you to enter the redemption code at the time of payment.</h5>
                    </div>
                </div>);
            } 
        else {
            const showpingCart = cart.map((item, index) => (
                <div className="ShoppingCard p-5 mt-5" key={index}>
                    <div className="row">
                        <div className="d-md-flex flex-md-6">
                            <div className="containerleft ml-5">
                                <img className="card-img-top" src={item.imgurl} />
                                <style>{'.ShoppingCard .containerleft .card-img-top {max-width: 20rem;}'}</style>
                            </div>
                            <div className="containerRight mr-5">
                                <div className="col-md-12 order-md-2 mb-4">
                                    <ul className="list-group mb-3">
                                        <li key={item.articleid} className="list-group-item d-flex justify-content-between lh-condensed">
                                            <div>
                                                <h6 className="my-0">{item.name}</h6>
                                                <small className="text-muted">{item.desc}</small>
                                            </div>
                                            <span className="text-muted">${item.price}</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between bg-light">
                                            <div className="text-success">
                                                <h6 className="my-0">Promo code</h6>
                                                <small>{this.state.discount}% Discount</small>
                                            </div>
                                            <span className="text-success">-${(this.state.discount/100 * this.state.totalPrice).toFixed(2)}</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between">
                                            <span className="text-muted">{this.state.quantity} Quantity</span>
                                        </li>        
                                        <li className="list-group-item d-flex justify-content-between">
                                            <span>Total (USD)</span>
                                            <strong>${(this.state.totalPrice - this.state.discount/100 * (this.state.quantity * this.state.totalPrice)).toFixed(2)}</strong>
                                        </li>
                                    </ul>
                                    <form className="card p-2">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Promo code"></input>
                                            <div className="input-group-append">
                                                <button type="submit" className="btn btn-secondary">Redeem</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>));
                return <div className="container mt-5 mb-5">{showpingCart}</div>;}
        }
    }

export default withSession(CheckoutCart);

CheckoutCart.propTypes = {
    cart: PropTypes.object,
    actions: PropTypes.object
    };