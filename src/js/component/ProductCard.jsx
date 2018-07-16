import React from 'react';
import 'bootstrap';
import { Link } from "react-router-dom";

function ProductCard(props){
return (
    <div className="album py-5 bg-light">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="card mb-4 box-shadow">
                        <img className="_7ye img" src="https://assets.academy.com/mgen/81/10213981.jpg?is=500,500" />
                        <div className="card-body">
                            <div className="_f3l _3fcx _4x3g text-bottom mb-2">$75</div>
                            <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <div className="buy button text-right">
                                <button className="btn btn-outline-danger my-2 sm-0" type="submit">Buy</button>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <small className="text-muted"></small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    </div>
    
    );
}

export default ProductCard;
                    
                                
                        
                        