import React from 'react';
import 'bootstrap';
import { Link } from "react-router-dom";
import Article from '../component/Article.jsx';



function ProductCard(props){
return (
    <div>
        <div className="card-group mt-5 mb-5">
            <div className="card">
                <Link className="card-text" to={"/DetailsProducts/:ArtId"}> 
                    <img className="card-img-top" src="https://assets.academy.com/mgen/81/10213981.jpg?is=500,500" alt="Card image cap"/>
                </Link>
                    
                <div className="card-body">
                    <h4 className="card-title">Weight & Strength</h4>
                    <h5 className="card-title">See Price in Cart</h5>
                    
                    <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                  
                    <div className="buy button alig-right">
                        <button className="btn btn-outline-danger my-2 sm-0" type="submit">Add to Cart</button>
                    </div>
    
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div className="card">
                <img className="card-img-top" src="https://freepngimg.com/download/exercise_bike/1-2-exercise-bike-free-download-png.png" alt="Card image cap"/>
                <div className="card-body">
                    <h4 className="card-title">Weight & Strength</h4>
                    <h5 className="card-title">See Price in Cart</h5>
                    
                    <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <div className="buy button text-right">
                        <button className="btn btn-outline-danger my-2 sm-0" type="submit">Add to Cart</button>
                    </div>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div className="card">
                <img className="card-img-top" src="https://assets.academy.com/mgen/24/10711924.jpg" alt="Card image cap"/>
                <div className="card-body">
                    <h4 className="card-title">Weight & Strength</h4>
                    <h5 className="card-title">See Price in Cart</h5>
                    
                    <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <div className="buy button text-right">
                        <button className="btn btn-outline-danger my-2 sm-0" type="submit">Add to Cart</button>
                    </div>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
        
        <div className="card-group mt-5 mb-5">
            <div className="card">
                <img className="card-img-top" src="https://media.lifespanfitness.com/media/catalog/product/cache/1/small_image/500x/9df78eab33525d08d6e5fb8d27136e95/t/r/tr2000e-electric-folding-treadmill-female-running.jpg" alt="Card image cap"/>
                <div className="card-body">
                    <h4 className="card-title">Weight & Strength</h4>
                    <h5 className="card-title">See Price in Cart</h5>
                    
                    <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <div className="buy button text-right">
                        <button className="btn btn-outline-danger my-2 sm-0" type="submit">Add to Cart</button>
                    </div>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div className="card">
                <img className="card-img-top" src="https://media.lifespanfitness.com/media/catalog/product/cache/1/small_image/500x/9df78eab33525d08d6e5fb8d27136e95/l/i/lifespan-r7000i-commercial-recumbent-exercise-bike.jpg" alt="Card image cap"/>
                <div className="card-body">
                    <h4 className="card-title">Weight & Strength</h4>
                    <h5 className="card-title">See Price in Cart</h5>
                    <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <div className="buy button text-right">
                        <button className="btn btn-outline-danger my-2 sm-0" type="submit">Add to Cart</button>
                    </div>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            
            <div className="card">
                <img className="card-img-top" src="https://www.bestwomensworkoutreviews.com/wp-content/uploads/2014/06/Bowflex-PR1000-Home-Gym-1-1024x1024.jpg" alt="Card image cap"/>
                <div className="card-body">
                    <h4 className="card-title">Weight & Strength</h4>
                    <h5 className="card-title">See Price in Cart</h5>
                    
                    <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <div className="buy button text-right">
                        <button className="btn btn-outline-danger my-2 sm-0" type="submit">Add to Cart</button>
                    </div>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
    </div>

    );
}

export default ProductCard;
                    
                                
                    
                        
                        