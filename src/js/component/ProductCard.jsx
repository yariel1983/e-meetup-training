import React from 'react';
import 'bootstrap';
import { Link } from "react-router-dom";

function ProductCard(props){
return (
    <div className="card-group">
        <div className="card">
            <img className="card-img-top" src="https://assets.academy.com/mgen/81/10213981.jpg?is=500,500" alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
        <div className="card">
            <img className="card-img-top" src="https://freepngimg.com/download/exercise_bike/1-2-exercise-bike-free-download-png.png" alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
        <div className="card">
            <img className="card-img-top" src="https://assets.academy.com/mgen/24/10711924.jpg" alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">Weight & Strength</h5>
                <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
    </div>

    );
}

export default ProductCard;
                    
                                
                        
                        