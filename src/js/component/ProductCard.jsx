import React from 'react';
import { Link } from "react-router-dom";
import {Consumer} from "../stores/AppContext.jsx";

class ProductCard extends React.Component {
    constructor() {
        super();
        }
    
    render () {
        const a = <div className="card-group mt-5 mb-5">;
        const b = </div>;
        return (
            
            <div className="container  mt-5" >
                <div className="row align-center">
                    <Consumer>
                        {
                        ({ state }) => 
                                    (state.article.map((article, index) => {
    
                                    return (
                                        
                                        <div className="card border-light col-lg-4 col-md-6 col-sm-12 ml-5 mt-5 mb-5 " key={index} >
                                            <Link to={"/DetailsProduct/"+article.articleId}>
                                                <style>{'.card{max-width: 18rem;}'}</style>
                                                <img className="card-img" src={article.imgurl} alt="Card image cap"/>
                                                <div className="card-img-overlay">
                                                    
                                                </div>
                                                <div className="card-footer border-light">
                                                    <p className="card-text border-light m-0 p-0">
                                                        <small className="text-muted border-light">{article.name}</small>
                                                    </p>
                                                </div>
                                            </Link>
                                        </div>
                                         
                                            
                                    );}))}
                    </Consumer>
                </div>
            </div>);
                }
}

export default ProductCard;