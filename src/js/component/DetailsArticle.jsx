import React from 'react';
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { browserhistory } from "react-router";
import PropTypes from 'prop-types';
import {Consumer} from "../stores/AppContext.jsx";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faStar from '@fortawesome/fontawesome-free-regular/faStar';
import {withSession} from '../stores/AppContext.jsx';

class DetailsArticle extends React.Component {
    constructor(props) {
        super(props);
        
    this.state = {quantity: 1};
    
    }
    
    handleChange(event) {
        this.setState({quantity: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
    } 
    
    getSmailImage (array) {
        const smallimg = array.map((array, index) => (
            <div className="card border-light " key={index}>
                <img className="card-img" id="smallImg" src={array.src} alt="Card image" />
                <style>{'.card-img-overlay {position: unset}'}</style>
                <div className="card-img-overlay" >
                    <style>{'.card-img {max-width: 4rem;}'}</style>
                </div>
            </div>));
            return <div className="card-deck flex-row col-sm-12 ">
                <style>{'.card-deck .card {display: unset; flex: unset;}'}</style>
                {smallimg}
            </div>;         
        }
        
    render () {
        return (
            <div className="containerDetailsArticle mt-5 mb-5">
                <style>{'.containerDetailsArticle{margin-top: 100px; max-width: 960px; width: 100%; padding-right: 15px; padding-left: 15px; margin-right: auto; margin-left: auto;}'}</style>   
                <Consumer>
                    {
                        ({ state, actions }) => {   const product = state.article.find( product => product.id === parseInt(this.props.artId) );
                            if (!product) {
                                return <div>Erros, Contact to Administrator</div>;
                            } else {
                   
                            return (
                                <div className="row mt-5 mb-5">
                                    <div className="containerleftProduct col-sm-6 p-2">
                                        <div className="row mt-5 mb-5">
                                            <div className="imageCardProduct col-sm-12">
                                                <div className="icpLeft col">
                                                    <img className="card-img-top" src={product.img_src} />
                                                    <style>{'.card-img-top{max-width: 18rem}'}</style>
                                                </div>
                                                <div className="iGProduct col-sm-12">
                                                    {this.getSmailImage(product.gallery)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="containerRigthProduct col-sm-6 p-2">
                                        <div className="row mt-5 mb-5">
                                            <h1 className="mb-4">{product.name}</h1>
                                            <div className="d-flex align-items-center justify-content-between mb-4">
                                                <div className="list-inline mb-0">
                                                    <div className="list-inline-item h4 font-weight-light mb-0">${product.sale_price}</div>
                                                    <div className="list-inline-item text-muted font-weight-light"> 
                                                        <div>${product.regular_price}</div>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <div className="list-inline mr-2 mb-0">
                                                        <span><FontAwesomeIcon className="fas fa-star text-dark" icon={faStar} /></span>
                                                        <span><FontAwesomeIcon className="fas fa-star text-dark" icon={faStar} /></span>
                                                        <span><FontAwesomeIcon className="fas fa-star text-dark" icon={faStar} /></span>
                                                        <span><FontAwesomeIcon className="fas fa-star text-dark" icon={faStar} /></span>
                                                        <span><FontAwesomeIcon className="fas fa-star text-dark" icon={faStar} /></span>
                                                    </div>
                                                    <span className="text-muted text-sm mt-1">REVIEWS</span>
                                                </div>
                                            </div>
                                            <span className="align-items-center">
                                                <p className="mb-4 text-muted">{product.description}</p>
                                            </span>
                                            <div className="list-inline" >
                                                <form onSubmit={this.handleSubmit}>
                                                    <label className="font-weight-bold mr-3">
                                                        Items 
                                                        <span> (required) </span>
                                                        <input type="number" min="1" max="100" value={this.state.quantity} onChange={this.handleChange} />
                                                    </label>
                                                    <button className="btn btn-primary" type="submit" value="Add to Cart" onClick={() => actions.addProductToCart(product.id,this.state.quantity)}></button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>   
                                </div>);
                            }
                        }
                    }
                </Consumer>
            </div>);
    }
}
 
export default DetailsArticle;

DetailsArticle.propTypes = {
    artId: PropTypes.string
    };

                                                    
