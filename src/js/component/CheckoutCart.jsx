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
                <div className="container">
                    <div className="row">
                        <h1>Tu cesta está vacía.</h1>
                        <h4>Haz que tu cesta de compra sea útil: llénala de libros, CD, vídeos, DVD, juguetes, productos electrónicos y otros productos. Si ya tienes una cuenta, Identifícate para ver su cesta.</h4>
                        <h4>Siga comprando en Amazon.es, vea información de las ofertas de hoy, o visite su Lista de deseos.</h4>
                        <h4>El precio y la disponibilidad de los productos de Amazon.es están sujetos a cambio. En la cesta de compra puedes dejar tempo/.ralmente los productos que quieres. En ella aparecerá el precio más reciente de cada producto.</h4>

                        <h5>¿Tienes un cheque regalo o código promocional? Te pediremos que introduzcas el código de canjeo en el momento de pago.</h5>
                    </div>
                </div>);
            } 
        else {
            const showpingCart = cart.map((item, index) => (
                <div className="ShoppingCard p-5" key={index}>
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
                                            <span>Total (USD)</span>
                                            <strong>${(this.state.totalPrice - this.state.discount/100 * this.state.totalPrice).toFixed(2)}</strong>
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
                return <div className="container">{showpingCart}</div>;}
        }
    }

export default withSession(CheckoutCart);

CheckoutCart.propTypes = {
    cart: PropTypes.object,
    actions: PropTypes.object
    };