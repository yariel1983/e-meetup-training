import React from 'react';
import { Link } from "react-router-dom";
import faEnvelope from '@fortawesome/fontawesome-free-regular/faEnvelope';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import Info from '../component/Info.jsx';







function UserContact(props) {
    return (
        <div className="container-fluid text-center mt-5 mb-5" id="contbackimag">
            <div className="container-fluid py-3">
                <Info />
                <div className="row" id="loginpt">
                    <div className="col-md-6 mx-auto">
                        <div className="card card-body" id="contopacid">
                            <div className="form-group has-error">
                                <input className="form-control input-lg"  placeholder="E-mail Address" name="email" type="text" />
                                <div className="col-lg-12 text-left"><small><strong>E-mail Address:</strong></small></div>
                            </div>
                            <div className="form-group has-error">
                                <input className="form-control input-lg" placeholder="First Name" name="First Name" type="text" />
                                <div className="col-lg-12 text-left"><small><strong>First Name:</strong></small></div>
                            </div>
                            <div className="form-group has-error">
                                <input className="form-control input-lg" placeholder="Last Name" name="Last Name" type="text" />
                                <div className="col-lg-12 text-left"><small><strong>Last Name:</strong></small></div>
                            </div>
                            <label htmlFor="name"></label>
                            <div className="map-responsive" id="mymap">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.900434804487!2d-80.19714558495687!3d25.773852014387803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b69bc4ede3f9%3A0xd83da1cde65f9289!2s66+W+Flagler+St%2C+Miami%2C+FL+33130!5e0!3m2!1sen!2sus!4v1534819088731" width="300" height="300" frameBorder="0" border="0" allowFullScreen></iframe>
                            </div> &nbsp;
                            <textarea name="message" id="message" className="form-control" rows="9" cols="25" required="required"
                            placeholder="Message"></textarea>
                            <input className="btn btn-lg btn-primary btn-block mt-4" value="Send" type="submit" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
                            
                        


    );
}
export default UserContact;                                                          
 
                            