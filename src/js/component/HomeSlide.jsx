import React from 'react';
import { Link } from "react-router-dom";



function HomeSlide(props) {
    return (
        <div className="container text-center mt-5">
            <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100 img-fluid" src="https://ak9.picdn.net/shutterstock/videos/23114809/thumb/1.jpg" alt="Responsive image First slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 img-fluid" src="https://i.ytimg.com/vi/rFUz864JIOQ/maxresdefault.jpg" alt="Responsive image Second slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 img-fluid" src="https://cdn.muscleandstrength.com/sites/default/files/field/feature-image/workout/4-week-beginner-workout-women-featured.jpg" alt="Responsive image Third slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 img-fluid" src="https://gdsit.cdn-immedia.net/2015/10/Fitness.jpeg" alt="Responsive image Fourth slide"/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>        

    
    );
}
            
export default HomeSlide;