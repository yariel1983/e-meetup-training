import React from 'react';
import { Link } from "react-router-dom";
import {Consumer} from "../stores/AppContext.jsx";
import PropTypes from 'prop-types';
import {withSession} from '../stores/AppContext.jsx';


class ProcessCheckout extends React.Component{
    constructor() {
    super();
        this.state = {
                        discount: 25,
                        totalItems: 0,
                        totalPrice: 0   };
    }

    render(){
        const { cart, article, actions } = this.props;


        if (cart.length <= 0) {
            const showpingCart = 
                <div className="ShoppingCard mt-5">
                    <style>{'.ShoppingCard{with: 300px; height:400px;}'}</style>
                    <div className="row">
                        <img className="card-img-top h-50" src="https://www.mwave.com/mwave/images/emptycarticon.png" alt="Card image cap"/>
                    </div>
                </div>;
                return (<div className="container mt-5 mb-5">{showpingCart}</div>);
            } 
        else {
            return (    
                <div className="containerCheckout ">
                    <style>{'.containerCheckout{margin-top: 100px; max-width: 960px; width: 100%; padding-right: 15px; padding-left: 15px; margin-right: auto; margin-left: auto;}'}</style>
                    <div className="row">
                        <div className="col-md-4 order-md-2 mb-4">
                            <h4 className="d-flex justify-content-between align-items-center mb-3">
                                <span className="text-muted">Your cart</span>
                                <span className="badge badge-secondary badge-pill">3</span>
                            </h4>
                            
                            <ul className="list-group mb-3">
                                <Consumer>
                                    {
                                        ({ state, actions }) => 
                                                (state.cart.map((cartItem, index) => {
        
                                                return (
                                                    <li className="list-group-item d-flex justify-content-between lh-condensed" key={index}>
                                                        <div className="row">
                                                            <div className="col-sm-6">
                                                                <img className="card-img-top" src={actions.getInfoArticle(cartItem.articleId).img_src} />
                                                                <style>{'.ShoppingCard .containerleft .card-img-top {max-width: 20rem;}'}</style>
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <span className="text-muted">Price ${actions.getInfoArticle(cartItem.articleId).price}</span>
                                                            </div>
                                                            <div className="itemName">
                                                                <h6 className="my-0">{actions.getInfoArticle(cartItem.articleId).name}</h6>
                                                            </div>
                                                            <div className="itemDescription">
                                                                <small className="text-muted ml-1">{actions.getInfoArticle(cartItem.articleId).description}</small> 
                                                            </div>
                                                            <div className="col-12 m-0 p-0">
                                                                <div className="d-flex flex-row-reverse p-2">
                                                                    <div className="text-success order-0 mr-5">
                                                                        <h6 className="quantity my-0 ml-auto ">Quantity {cartItem.quantity}</h6>
                                                                        <style>{'.quantity{line-height: 0.5 !important}'}</style>
                                                                    </div>
                                                                    <div className="buttonDeleteItem order-1">
                                                                        <button type="submit" className="btn btn-secondary btn-sm " onClick={() => actions.delProductToCart(index, cartItem.articleId, cartItem.quantity )}>Delete item</button>&nbsp;
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                    </li>
                                                                        
                                    );}))}
                                </Consumer>
                                <li className="list-group-item d-flex justify-content-between bg-light">
                                    <div className="text-success">
                                        <h6 className="my-0">Promo code</h6>
                                        <small>EXAMPLECODE</small>
                                    </div>
                                    <span className="text-success">-$5</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between">
                                    <span>Total (USD)</span>
                                    <strong>$20</strong>
                                </li>
                            </ul>
                                
                            
                            <form className="card p-2">
                                <div className="input-group">
                                    <input type="text" className="form-control form-control-sm" placeholder="Promo code" />
                                    <div className="input-group-append">
                                        <button type="submit" className="btn btn-secondary">Redeem</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        
                        <div className="col-md-8 order-md-1">
                            <h4 className="mb-3">Billing address</h4>
                            <form className="needs-validation" >
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="firstName" className="col-sm-12 col-form-label col-form-label-sm" >First name</label>
                                        <input type="text" className="form-control form-control-sm" id="firstName" placeholder="" value="" required="" />
                                        <div className="invalid-feedback">
                                            Valid first name is required.
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="lastName" className="col-sm-12 col-form-label col-form-label-sm">Last name</label>
                                        <input type="text" className="form-control form-control-sm" id="lastName" placeholder="" value="" required="" />
                                        <div className="invalid-feedback">
                                            Valid last name is required.
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="username" className="col-sm-2 col-form-label col-form-label-sm">Username</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">@</span>
                                        </div>
                                        <input type="text" className="form-control form-control-sm" id="username" placeholder="Username" required="" />
                                        <div className="invalid-feedback" >
                                            <style>{'.invalid-feedback{style=width: 100%}'}</style>
                                            Your username is required.
                                        </div>
                                    </div>
                                </div>
                            
                                <div className="mb-3">
                                    <label htmlFor="email" className="col-sm-2 col-form-label col-form-label-sm">Email <span className="text-muted">(Optional)</span></label>
                                    <input type="email" className="form-control form-control-sm" id="email" placeholder="you@example.com" />
                                    <div className="invalid-feedback">
                                        Please enter a valid email address for shipping updates.
                                    </div>
                                </div>
                            
                                <div className="mb-3">
                                    <label htmlFor="address" className="col-sm-2 col-form-label col-form-label-sm">Address</label>
                                    <input type="text" className="form-control form-control-sm" id="address" placeholder="1234 Main St" required="" />
                                    <div className="invalid-feedback">
                                        Please enter your shipping address.
                                    </div>
                                </div>
                            
                                <div className="mb-3">
                                    <label htmlFor="address2" className="col-sm-2 col-form-label col-form-label-sm">Address 2 
                                        <span className="text-muted">(Optional)</span>
                                    </label>
                                    <input type="text" className="form-control form-control-sm" id="address2" placeholder="Apartment or suite" />
                                </div>
                            
                                <div className="row">
                                    <div className="col-md-5 mb-3">
                                        <label htmlFor="country" className="col-sm-2 col-form-label col-form-label-sm">Country</label>
                                        <select className="custom-select custom-select-sm d-block w-100" id="country" required="">
                                            <option value="">Choose...</option>
                                            <option>United States</option>
                                        </select>
                                        <div className="invalid-feedback">
                                            Please select a valid country.
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label htmlFor="state" className="col-sm-2 col-form-label col-form-label-sm">State</label>
                                        <select className="custom-select custom-select-sm d-block w-100" id="state" required="">
                                            <option value="">Choose...</option>
                                            <option>California</option>
                                        </select>
                                        <div className="invalid-feedback">
                                            Please provide a valid state.
                                        </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="zip" className="col-sm-2 col-form-label col-form-label-sm">Zip</label>
                                        <input type="text" className="form-control form-control-sm" id="zip" placeholder="" required="" />
                                        <div className="invalid-feedback">
                                            Zip code required.
                                        </div>
                                    </div>
                                </div>
                                {/*<div className="mb-4">*/}
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="same-address" />
                                    <label className="custom-control-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
                                </div>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="save-info" />
                                    <label className="custom-control-label" htmlFor="save-info">Save this information for next time</label>
                                </div>
                                {/*<div className="mb-4">*/}
                            
                                <h4 className="mb-3">Payment</h4>
                
                                <div className="d-block my-3">
                                    <div className="custom-control custom-radio">
                                        <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" checked="" required="" />
                                        <label className="custom-control-label" htmlFor="credit">Credit card</label>
                                    </div>
                                    <div className="custom-control custom-radio">
                                        <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" required="" />
                                        <label className="custom-control-label" htmlFor="debit">Debit card</label>
                                    </div>
                                    <div className="custom-control custom-radio">
                                        <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input" required="" />
                                        <label className="custom-control-label" htmlFor="paypal">Paypal</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="cc-name">Name on card</label>
                                        <input type="text" className="form-control form-control-sm" id="cc-name" placeholder="" required="" />
                                        <small className="text-muted">Full name as displayed on card</small>
                                        <div className="invalid-feedback">
                                            Name on card is required
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="cc-number" className="col-sm-2 col-form-label col-form-label-sm">Credit card number</label>
                                        <input type="text" className="form-control form-control-sm" id="cc-number" placeholder="" required="" />
                                        <div className="invalid-feedback">
                                            Credit card number is required
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="cc-expiration" className="col-sm-2 col-form-label col-form-label-sm">Expiration</label>
                                            <input type="text" className="form-control form-control-sm" id="cc-expiration" placeholder="" required="" />
                                            <div className="invalid-feedback">
                                                Expiration date required
                                            </div>
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="cc-expiration" className="col-sm-2 col-form-label col-form-label-sm">CVV</label>
                                            <input type="text" className="form-control form-control-sm" id="cc-cvv" placeholder="" required="" />
                                            <div className="invalid-feedback">
                                                Security code required
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*<div className="mb-4">*/}
                                <button className="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
                            </form>
                        </div>
                    </div>
                </div>);
        }
    }
}

export default withSession(ProcessCheckout);

ProcessCheckout.propTypes = {
    cart: PropTypes.array,
    actions: PropTypes.object,
    article: PropTypes.array
};      


