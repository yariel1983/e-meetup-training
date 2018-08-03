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
            <div className="container-fluid pb-video-container">
                <div className="col-md-12 col-md-offset-1">
                    <h3 className="text-center">Videos Gallery</h3>
                    <div className="row pb-row">
                        <div className="col-md-3 pb-video">
                            <iframe className="pb-video-frame" width="100%" height="230" src="https://www.youtube.com/embed/Tx3W6XAO7Yo" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                            <label className="form-control label-warning text-center">Epic Girls Training</label>
                        </div>
                        <div className="col-md-3 pb-video">
                            <iframe className="pb-video-frame" width="100%" height="230" src="https://www.youtube.com/embed/plVyo39og3I" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                            <label className="form-control label-warning text-center">Female Fitness Motivation</label>
                        </div>
                        <div className="col-md-3 pb-video">
                            <iframe className="pb-video-frame" width="100%" height="230" src="https://www.youtube.com/embed/P84ktN7w-EM" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                            <label className="form-control label-warning text-center">Full Body Cable Workout</label>
                        </div>
                        <div className="col-md-3 pb-video">
                            <iframe className="pb-video-frame" width="100%" height="230" src="https://www.youtube.com/embed/Y1_VsyLAGuk?list=RDzuAcaBkcYGE?ecver=1" frameBorder="0" allowFullScreen></iframe>
                            <label className="form-control label-warning text-center">Full Body Workout In The Gym (Training for Women)</label>
                        </div>
                    </div>
                    <div className="row pb-row">
                        <div className="col-md-3 pb-video">
                            <iframe className="pb-video-frame" width="100%" height="230" src="https://www.youtube.com/embed/24fdcMw0Bj0" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                            <label className="form-control label-warning text-center">The Rock Working out</label>
                        </div>
                        <div className="col-md-3 pb-video">
                            <iframe className="pb-video-frame" width="100%" height="230" src="https://www.youtube.com/embed/wyNPbHOX_EI" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                            <label className="form-control label-warning text-center">Jhon Cena Working out</label>
                        </div>
                        <div className="col-md-3 pb-video">
                            <iframe className="pb-video-frame" width="100%" height="230" src="https://www.youtube.com/embed/zMPMJo5kdVc" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                            <label className="form-control label-warning text-center">Ryback Working out</label>
                        </div>
                        <div className="col-md-3 pb-video">
                            <iframe className="pb-video-frame" width="100%" height="230" src="https://www.youtube.com/embed/BWyN0bngHQs" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                            <label className="form-control label-warning text-center">Batista Working out</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>     
        );
    }
    
    export default TrainingVideo;
                        
            
    
                        
            
            
                
    
                                    
                        
                            
                            
       
            
               
                    
    
                
                
            
                
                    
    
                
               
            
                
                    
    
                
                
            
        
    
        
                