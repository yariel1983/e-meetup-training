import React from 'react';
import 'bootstrap';
import { Link } from "react-router-dom";

function TrainingVideo(props){
    return (
        <div>    
            <div id="video-carousel-example2" className="carousel slide carousel-fade" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#video-carousel-example2" data-slide-to="0" className="active"></li>
                    <li data-target="#video-carousel-example2" data-slide-to="1"></li>
                </ol>
                <div className="carousel-inner text-center" role="listbox">
                    <div className="carousel-item active">
                        <div className="view">
                            <video className="video-fluid" autoPlay loop>
                                <source src="https://mdbootstrap.com/img/video/Tropical.mp4" type="video/mp4" />
                            </video>
                            <div className="mask rgba-indigo-light"></div>
                        </div>
                        <div className="carousel-caption">
                            <div className="animated fadeInDown">
                                <h3 className="h3-responsive"></h3>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="view">
                            <video className="video-fluid" autoPlay loop>
                                <source src="https://mdbootstrap.com/img/video/forest.mp4" type="video/mp4" />
                            </video>
                            <div className="mask rgba-purple-slight"></div>
                        </div>
                        <div className="carousel-caption">
                            <div className="animated fadeInDown">
                                <h3 className="h3-responsive"></h3>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
            <div className="container text-center mt-5">
                <div className="slick">
                    <div className="item youtube">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Tx3W6XAO7Yo" frameBorder="0" allow="autoplay; encrypted-media" allowFullscreen></iframe>
                        <p className="caption">YouTube</p>
                    </div>
                    <div className="item youtube">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/ralZmBh4lk0" frameBorder="0" allow="autoplay; encrypted-media" allowFullscreen></iframe>
                        <p className="caption">YouTube</p>
                    </div>
                </div>
            </div>
            
            {/***************************************
             **** Manejo de VIdeos en Training  ****
             ***************************************
             ***************************************/}
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card mb-4 box-shadow">
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/Tx3W6XAO7Yo" data-gtm-yt-inspected-2340190_699="true"></iframe>
                                </div>
                                <div className="card-body">
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                        </div>
                                        <small className="text-muted">9 mins</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>     
        );
    }
    
    export default TrainingVideo;
                        
    
            
                
    
                                    
                        
                            
                            
       
            
               
                    
    
                
                
            
                
                    
    
                
               
            
                
                    
    
                
                
            
        
    
        
                