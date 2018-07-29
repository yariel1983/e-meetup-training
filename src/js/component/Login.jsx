import React from 'react';
import 'bootstrap';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import {Consumer} from "../stores/AppContext.jsx";
import {withSession} from '../stores/AppContext.jsx';


class Login extends React.Component {
    constructor(props){
        super(props);
    }
    
    render(){    
    let homeActive = this.props.currentView === "home" ? "active" :"";
        
    const { session, actions } = this.props;
    
    return (
        <div className="container text-center mt-5 mb-5">
            <div className="container-fluid py-3">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <div className="card card-body">
                            {
                            session && typeof(session.user_nicename) !== 'undefined' ?
                                <fieldset>
                                    <div className="form-group has-error">
                                        <input className="form-control input-lg" value={session.user_nicename} placeholder="E-mail Address" name="email" type="text" />
                                    </div>
                                    
                                    <div className="form-group has-success">
                                        <input className="form-control input-lg" value={session.user_nicename} placeholder="Password" name="password" type="password" />
                                    </div>
                                    
                                    <div className="form-group has-success">
                                        <input className="form-control input-lg" value={session.user_nicename} placeholder="Confirm Password" name="password" type="password" />
                                    </div>
                                    
                                    <div className="form-group has-error">
                                        <input className="form-control input-lg" value={session.user_nicename} placeholder="First Name" name="First Name" type="text" />
                                    </div>
                                    
                                    <div className="form-group has-error">
                                        <input className="form-control input-lg" value={session.user_nicename} placeholder="Last Name" name="Last Name" type="text" />
                                    </div>
                                    
                                    <div className="form-group has-error">
                                        <input className="form-control input-lg" value={session.user_nicename} placeholder="Address Line 1" name="Address" type="text" />
                                    </div>
                                    
                                    <div className="form-group has-error">
                                        <input className="form-control input-lg" value={session.user_nicename} placeholder="Address Line 2" name="Address" type="text" />
                                    </div>
                                        
                                        
                                    <div className="form-group has-error">
                                        <input className="form-control input-lg" value={session.user_nicename} placeholder="City" name="City" type="text" />
                                    </div>
                                            
                                    <div className="form-group has-error">
                                        <input type="text" className="form-control" value={session.user_nicename} id="validationTooltip04" placeholder="State" required />
                                        <div className="invalid-tooltip">
                                            Please provide a valid state.
                                        </div>
                                    </div>
                                            
                                    <div className="form-group has-error">
                                        <input type="text" className="form-control" value={session.user_nicename} id="validationTooltip05" placeholder="Zip" required />
                                        <div className="invalid-tooltip">
                                            Please provide a valid zip.
                                        </div>
                                    </div>
                                            
                                          
                                    <div className="form-group">
                                    </div>
    
          
                                    <div className="checkbox">
                                        <label className="small">
                                            <input className="terms mr-1" type="checkbox"/>I have read and agree to the <a href="#">terms of service</a>
                                        </label>
                                        
                                        <input className="btn btn-lg btn-secondary btn-block" value="Update" type="submit" />
                                    </div>
                                </fieldset>
                            :
                                <fieldset>
                                    <div className="form-group has-error">
                                        <input className="form-control input-lg"  placeholder="E-mail Address" name="email" type="text" />
                                    </div>
                                    
                                    <div className="form-group has-success">
                                        <input className="form-control input-lg" placeholder="Password" name="password" value="" type="password" />
                                    </div>
                                    
                                    <div className="form-group has-success">
                                        <input className="form-control input-lg" placeholder="Confirm Password" name="password" value="" type="password" />
                                    </div>
                                    
                                    <div className="form-group has-error">
                                        <input className="form-control input-lg" placeholder="First Name" name="First Name" type="text" />
                                    </div>
                                    
                                    <div className="form-group has-error">
                                        <input className="form-control input-lg" placeholder="Last Name" name="Last Name" type="text" />
                                    </div>
                                    
                                    <div className="form-group has-error">
                                        <input className="form-control input-lg" placeholder="Address Line 1" name="Address" type="text" />
                                    </div>
                                    
                                    <div className="form-group has-error">
                                        <input className="form-control input-lg" placeholder="Address Line 2" name="Address" type="text" />
                                    </div>
                                        
                                        
                                    <div className="form-group has-error">
                                        <input className="form-control input-lg" placeholder="City" name="City" type="text" />
                                    </div>
                                            
                                    <div className="form-group has-error">
                                        <input type="text" className="form-control" id="validationTooltip04" placeholder="State" required />
                                        <div className="invalid-tooltip">
                                            Please provide a valid state.
                                        </div>
                                    </div>
                                            
                                    <div className="form-group has-error">
                                        <input type="text" className="form-control" id="validationTooltip05" placeholder="Zip" required />
                                        <div className="invalid-tooltip">
                                            Please provide a valid zip.
                                        </div>
                                    </div>
                                            
                                          
                                    <div className="form-group">
                                    </div>
    
          
                                    <div className="checkbox">
                                        <label className="small">
                                            <input className="terms mr-1" type="checkbox"/>I have read and agree to the <a href="#">terms of service</a>
                                        </label>
                                        
                                        <input className="btn btn-lg btn-secondary btn-block" value="Sign Me Up" type="submit" />
                                    </div>
                                </fieldset>                                
                        }
                                    
                        </div>
                    </div>
                </div>
            </div>
        </div>        

    );
}
}
Login.propTypes = {
    username: PropTypes.string,
    session: PropTypes.object,
    actions: PropTypes.object,
    currentView: PropTypes.string
    };
            
export default withSession(Login);
