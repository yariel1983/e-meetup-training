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
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                        <div className="view">
                            <video className="video-fluid" autoPlay loop>
                                <source src="https://mdbootstrap.com/img/video/Lines.mp4" type="video/mp4" />
                            </video>
                            <div className="mask rgba-indigo-light"></div>
                        </div>
                        <div className="carousel-caption">
                            <div className="animated fadeInDown">
                                <h3 className="h3-responsive">Light mask</h3>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="view">
                            <video className="video-fluid" autoPlay loop>
                                <source src="https://mdbootstrap.com/img/video/Lines.mp4" type="video/mp4" />
                            </video>
                            <div className="mask rgba-purple-slight"></div>
                        </div>
                        <div className="carousel-caption">
                            <div className="animated fadeInDown">
                                <h3 className="h3-responsive">Super light mask</h3>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
            <div className="container text-center">
                <div className="slick">
                    <div className="item youtube">
                        <iframe id="youtube" width="920" height="518" src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?rel=0&amp;enablejsapi=1" frameBorder="0" allowFullScreen></iframe> 
                        <p className="caption">YouTube</p>
                    </div>
                    <div className="item vimeo">
                        <iframe id="vimeo" src="https://player.vimeo.com/video/100902001?byline=0&amp;portrait=0&amp;api=1" width="920" height="517" frameBorder="0" webkitallowfullscreen mozallowfullscreen allowFullScreen></iframe> 
                        <p className="caption">Vimeo</p>
                    </div>
                </div>
            </div>
        </div>    
        );
    }
    
    export default TrainingVideo;
                        
    
            
                
    
                                    
                        
                            
                            
       
            
               
                    
    
                
                
            
                
                    
    
                
               
            
                
                    
    
                
                
            
        
    
        
                