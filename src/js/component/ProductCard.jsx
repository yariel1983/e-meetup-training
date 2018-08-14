import React from 'react';
import { Link } from "react-router-dom";
import {Consumer} from "../stores/AppContext.jsx";

class ProductCard extends React.Component {
    constructor() {
        super();
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
                                                    <img className="card-img" src={article.img_src} alt="Card image cap"/>
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
                                            </div>
                                            
                                           
                                           
                                                
                                        );}))}
                        </Consumer>
                    </div>
                </div>
            </div>);
        }
    }

export default ProductCard;