import React from 'react';
import { Link } from "react-router-dom";
import {Consumer} from "../stores/AppContext.jsx";

class ProductCard extends React.Component {
    constructor() {
        super();
        }
        
    getSmailImage (array) {
        const smallimg = array.map((array, index) => (
            <div className="card border-light col-lg-4 col-md-6" key={index}>&nbsp;
                <div className="card-img-overlay" >
                    <img className="card-img" id="smallImg" src={array.src} alt="Card image cap" />
                    <style>{'#smallImg {max-width: 8rem;}'}</style>
                </div>
            </div>));
            return <div className="container"><div className="row">{smallimg}</div></div>;         
        }
    
    render () {
        const smallimg = [];
        return (
            <div>    
                <div className="container text-center mt-5" >&nbsp;
                    <div className="row align-center">
                        <Consumer>
                            {
                            ({ state }) => 
                                        (state.article.map((article, index) => {
        
                                        return (
                                            
                                            <div className="card text-center border-light col-lg-12 col-md-6 col-sm-8  mt-5 mb-5 mr-5 " key={index} >&nbsp;
                                                <Link to={"/DetailsProduct/"+article.id}>
                                                    <style>{'.card{max-width: 15rem;}'}</style>
                                                    <img className="card-img" src={article.images[0].src} alt="Card image cap"/>
                                                    <div className="card-img-overlay">
                                                        <style>{'.card{max-width: 15rem;}'}</style>   
                                                    </div>
                                                </Link>
                                                <div className="card-footer border-light mb-5">
                                                    <div className="card-text">
                                                        <p className="card-text border-light m-0 p-0">
                                                            <small className="text-muted border-light">{article.name}</small>
                                                        </p>
                                                    </div>
                                                                                                       
                                                </div>
                                                {/*<div className="card-img">{this.getSmailImage(article.images)}</div>*/}     
                                            </div>
                                            
                                           
                                           
                                                
                                        );}))}
                        </Consumer>
                    </div>
                </div>
            </div>);
        }
    }

export default ProductCard;