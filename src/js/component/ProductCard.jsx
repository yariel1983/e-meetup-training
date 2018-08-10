import React from 'react';
import { Link } from "react-router-dom";
import {Consumer} from "../stores/AppContext.jsx";

class ProductCard extends React.Component {
    constructor() {
        super();
        }
        
    getSmailImage (array) {
        const smallimg = array.map((array, index) => (
            <div className="card border-light col-lg-4 col-md-6" key={index}>
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
            
            <div className="container mt-5" >
                <div className="row align-center feature">
                    <Consumer>
                        {
                        ({ state }) => 
                                    (state.article.map((article, index) => {
    
                                    return (
                                        
                                        <div className="card border-light col-lg-4 col-md-6 ml-5 mt-5 mb-5" key={index} >
                                            <Link to={"/DetailsProduct/"+article.id}>
                                                <style>{'.card{max-width: 18rem;}'}</style>
                                                <img className="card-img" src={article.images[0].src} alt="Card image cap"/>
                                                <div className="card-img-overlay">
                                                    
                                                </div>
                                            </Link>
                                            <div className="card-footer border-light">
                                                <div className="card-text">
                                                    <p className="card-text border-light m-0 p-0">
                                                        <small className="text-muted border-light">{article.name}</small>
                                                    </p>
                                                </div>
                                                {this.getSmailImage(article.images)}                                                    
                                            </div>
                                            
                                        </div>
                                         
                                            
                                    );}))}
                    </Consumer>
                </div>
            </div>);
        }
    }

export default ProductCard;