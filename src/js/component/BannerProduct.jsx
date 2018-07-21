import React from 'react';
import 'bootstrap';
import { Link } from "react-router-dom";
import Article from '../component/Article.jsx';
function BannerProduct(props){
    return (
        <div>   
            <div className="jumbotron jumbotron-sm text-center border border-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-lg-12">
                            <h1 className="h1">Products</h1>
                            <div className="btn-group" role="group">
                                <button id="btnGroupDrop1" type="button" className="btn btn-lg dropdown-toggle border border-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Categories
                                </button>
                                <div className="dropdown-menu border border-dark" aria-labelledby="btnGroupDrop1">
                                    <a className="dropdown-item" href="#">Weights</a>
                                    <a className="dropdown-item" href="#">Exercise Bicycle</a>
                                    <a className="dropdown-item" href="#">cardio Machine</a>
                                    <a className="dropdown-item" href="#">Women All in One Gym</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
          
                              
    );
}   
    
export default BannerProduct;
                        
                            
                            
                            
                        
                        