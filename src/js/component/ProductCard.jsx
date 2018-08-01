import React from 'react';
import { Link } from "react-router-dom";
import {Consumer} from "../stores/AppContext.jsx";

<<<<<<< HEAD
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
=======



function ProductCard(props){
    let ArticleId = 1;
return (
    <div>
        <div className="card-group mt-5 mb-5">
            <div className="card">
                <Link to={"/DetailsProduct/"+ArticleId} className="card-text" > 
                    <img className="card-img-top" src="https://assets.academy.com/mgen/81/10213981.jpg?is=500,500" alt="Card image cap"/>
                </Link>
                    
                <div className="card-body">
                    <h4 className="card-title">Marcy Gym System</h4>
                    <h5 className="card-title">See Price in Cart</h5>
                    
                    <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                  
                    {/*<div className="buy button alig-right">
                        <button className="btn btn-secondary my-2 sm-0" type="submit">Add to Cart</button>
                    </div>*/}
    
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div className="card">
                <img className="card-img-top" src="https://freepngimg.com/download/exercise_bike/1-2-exercise-bike-free-download-png.png" alt="Card image cap"/>
                <div className="card-body">
                    <h4 className="card-title">Exercise Bike</h4>
                    <h5 className="card-title">See Price in Cart</h5>
                    
                    <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    {/*<div className="buy button text-right">
                        <button className="btn btn-secondary my-2 sm-0" type="submit">Add to Cart</button>
                    </div>*/}
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div className="card">
                <img className="card-img-top" src="https://assets.academy.com/mgen/24/10711924.jpg" alt="Card image cap"/>
                <div className="card-body">
                    <h4 className="card-title">Incline Bench Gym</h4>
                    <h5 className="card-title">See Price in Cart</h5>
                    
                    <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    {/*<div className="buy button text-right">
                        <button className="btn btn-secondary my-2 sm-0" type="submit">Add to Cart</button>
                    </div>*/}
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
        
        <div className="card-group mt-5 mb-5">
            <div className="card">
                <img className="card-img-top" src="https://media.lifespanfitness.com/media/catalog/product/cache/1/small_image/500x/9df78eab33525d08d6e5fb8d27136e95/t/r/tr2000e-electric-folding-treadmill-female-running.jpg" alt="Card image cap"/>
                <div className="card-body">
                    <h4 className="card-title">Tread Mill</h4>
                    <h5 className="card-title">See Price in Cart</h5>
                    
                    <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    {/*<div className="buy button text-right">
                        <button className="btn btn-secondary my-2 sm-0" type="submit">Add to Cart</button>
                    </div>*/}
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div className="card">
                <img className="card-img-top" src="https://media.lifespanfitness.com/media/catalog/product/cache/1/small_image/500x/9df78eab33525d08d6e5fb8d27136e95/l/i/lifespan-r7000i-commercial-recumbent-exercise-bike.jpg" alt="Card image cap"/>
                <div className="card-body">
                    <h4 className="card-title">Exercise Bike</h4>
                    <h5 className="card-title">See Price in Cart</h5>
                    <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    {/*<div className="buy button text-right">
                        <button className="btn btn-secondary my-2 sm-0" type="submit">Add to Cart</button>
                    </div>*/}
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            
            <div className="card">
                <img className="card-img-top" src="https://www.bestwomensworkoutreviews.com/wp-content/uploads/2014/06/Bowflex-PR1000-Home-Gym-1-1024x1024.jpg" alt="Card image cap"/>
                <div className="card-body">
                    <h4 className="card-title">Bowflex home gym</h4>
                    <h5 className="card-title">See Price in Cart</h5>
                    
                    <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    {/*<div className="buy button text-right">
                        <button className="btn btn-secondary my-2 sm-0" type="submit">Add to Cart</button>
                    </div>*/}
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
>>>>>>> ef3e06353cb695facbd17a8faaf2e68618784368
                </div>
            </div>);
                }
}

export default ProductCard;