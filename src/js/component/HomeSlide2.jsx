import React from 'react';
import { Link } from "react-router-dom";




function HomeSlide2(props) {
    return (
        <div>    
            <div className="container-fluid mt-5">
                <div className="item active">
                    <img src="https://wallportal.com/uploads/posts/boxing-gym-wallpaper/boxing_gym_wallpaper_009.jpg"/>
        
                    <div className="header-text text-center hidden-xs">
                        <div className="main_title ">
                            <h2>Xtreme <span>Training</span> Academy</h2>
                            <p>Please Sign in or Register.</p>
                        </div>  
                        <div className="">
                            <div className="btn btn-theme btn-sm btn-min-block" href="#">Login</div>
                            <Link className="nav-item nav-link " to={"/Register"}>
                                <div className="btn btn-theme btn-sm btn-min-block" href="#">Register</div>
                            </Link>
                        </div>
                            
                    </div>
                </div>
                
            </div>
            
        </div>
                
                            
                
                    


    
    );
}
            
export default HomeSlide2;