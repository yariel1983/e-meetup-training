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
                    <h3 className="text-center">Sample Video Gallery</h3>
                    <div className="row pb-row">
                        <div className="col-md-3 pb-video">
                            <iframe className="pb-video-frame" width="100%" height="230" src="https://www.youtube.com/embed/K68UrdUOr2Y?list=RDzuAcaBkcYGE?ecver=1" frameBorder="0" allowFullScreen></iframe>
                            <label className="form-control label-warning text-center">Claydee - Alena</label>
                        </div>
                        <div className="col-md-3 pb-video">
                            <iframe className="pb-video-frame" width="100%" height="230" src="https://www.youtube.com/embed/wjT2JVlUFY4?list=RDzuAcaBkcYGE?ecver=1" frameBorder="0" allowFullScreen></iframe>
                            <label className="form-control label-warning text-center">Manuel Riva - Mhm Mhm</label>
                        </div>
                        <div className="col-md-3 pb-video">
                            <iframe className="pb-video-frame " width="100%" height="230" src="https://www.youtube.com/embed/papuvlVeZg8?list=RDzuAcaBkcYGE?ecver=1" frameBorder="0" allowFullScreen></iframe>
                            <label className="form-control label-warning text-center">Clean Bandit - Rockabye</label>
                        </div>
                        <div className="col-md-3 pb-video">
                            <iframe className="pb-video-frame" width="100%" height="230" src="https://www.youtube.com/embed/Y1_VsyLAGuk?list=RDzuAcaBkcYGE?ecver=1" frameBorder="0" allowFullScreen></iframe>
                            <label className="form-control label-warning text-center">Burak Yeter - Tuesday</label>
                        </div>
                    </div>
                    <div className="row pb-row">
                        <div className="col-md-3 pb-video">
                            <iframe className="pb-video-frame" width="100%" height="230" src="https://www.youtube.com/embed/UY1bt8ilps4?ecver=1" frameBorder="0" allowFullScreen></iframe>
                            <label className="form-control label-warning text-center">F.O. and Peeva - Lichnata</label>
                        </div>
                        <div className="col-md-3 pb-video">
                            <iframe className="pb-video-frame" width="100%" height="230" src="https://www.youtube.com/embed/QpbQ4I3Eidg?ecver=1" frameBorder="0" allowFullScreen></iframe>
                            <label className="form-control label-warning text-center">Machine Gun - Bad Things</label>
                        </div>
                        <div className="col-md-3 pb-video">
                            <iframe className="pb-video-frame" width="100%" height="230" src="https://www.youtube.com/embed/h3kRIxLruDs?ecver=" frameBorder="0" allowFullScreen></iframe>
                            <label className="form-control label-warning text-center">INNA - Say it with your body</label>
                        </div>
                        <div className="col-md-3 pb-video">
                            <iframe className="pb-video-frame" width="100%" height="230" src="https://www.youtube.com/embed/Jr4TMIU9oQ4?ecver=1" frameBorder="0" allowFullScreen></iframe>
                            <label className="form-control label-warning text-center">INNA - Gimme Gimme</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>     
        );
    }
    
    export default TrainingVideo;
                        
            
    
                        
            
            
                
    
                                    
                        
                            
                            
       
            
               
                    
    
                
                
            
                
                    
    
                
               
            
                
                    
    
                
                
            
        
    
        
                