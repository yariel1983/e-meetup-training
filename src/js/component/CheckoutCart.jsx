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
        const { cart, actions } = this.props;
    

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
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Promo code"></input>
                                        <div className="input-group-append">
                                            <button type="submit" className="btn btn-secondary" onClick={() => actions.delProductToCart(index, item.articleId,item.quantity )}>Delete item</button>&nbsp;
                                            <button className="btn btn-warning text-white" href="#">Buy it Now</button>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>));
                return <div className="container mt-5 mb-5">{showpingCart}</div>;
            }
        }
    }

export default withSession(CheckoutCart);

CheckoutCart.propTypes = {
    cart: PropTypes.array,
    actions: PropTypes.object
    };
                        
                        
