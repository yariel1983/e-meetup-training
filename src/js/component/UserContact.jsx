import React from 'react';
import { Link } from "react-router-dom";
import faUser from '@fortawesome/fontawesome-free-regular/faUser';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

function UserContact(props) {
    return (
        <div className="container-fluid text-center mt-5 mb-5" id="contbackimag">
            <div className="container-fluid py-3">
                <div className="row" id="loginpt">
                    <div className="col-md-6 mx-auto">
                        <div className="card card-body" id="contopacid">
                            <div className="form-group has-error">
                                <input className="form-control input-lg"  placeholder="E-mail Address" name="email" type="text" />
                            </div>
                            <div className="form-group has-error">
                                <input className="form-control input-lg" placeholder="First Name" name="First Name" type="text" />
                            </div>
                            <div className="form-group has-error">
                                <input className="form-control input-lg" placeholder="Last Name" name="Last Name" type="text" />
                            </div>
                            <label htmlFor="name"></label>
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
 