<div className="card-group mt-5 mb-5">
                <div className="card">
                    <img className="card-img-top" src="https://freepngimg.com/download/exercise_bike/1-2-exercise-bike-free-download-png.png" alt="Card image cap"/>
                    <div className="card-body">
                        <h4 className="card-title">Exercise Bike</h4>
                        <h5 className="card-title">See Price in Cart</h5>
                        
                        <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <div className="buy button text-right">
                            <button className="btn btn-secondary my-2 sm-0" type="submit">Add to Cart</button>
                        </div>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src="https://assets.academy.com/mgen/24/10711924.jpg" alt="Card image cap"/>
                    <div className="card-body">
                        <h4 className="card-title">Incline Bench Gym</h4>
                        <h5 className="card-title">See Price in Cart</h5>
                        
                        <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <div className="buy button text-right">
                            <button className="btn btn-secondary my-2 sm-0" type="submit">Add to Cart</button>
                        </div>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>


<Link to={"/cart"} className="nav-item nav-link">
                                    <span><FontAwesomeIcon className="fa ShoppingCart text-dark mr-1" icon={faShoppingCart} /></span>
                                    <span className="badge badge-pill badge-danger" id="cartnoti">{cartNumItem}</span>
                                </Link>
                                
                                
                                
                                <Link to={"Register"} className="nav-item text-right">
                                                <span className="nav-item nav-link" href="#"> Sign-Up! </span>
                                            </Link>