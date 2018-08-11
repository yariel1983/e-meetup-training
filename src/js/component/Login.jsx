import React from 'react';
import 'bootstrap';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import {Consumer} from "../stores/AppContext.jsx";
import {withSession} from '../stores/AppContext.jsx';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faUser from '@fortawesome/fontawesome-free-regular/faUser';

class Login extends React.Component {
    constructor(props){
        super(props);
    }
    
    render(){    
    let homeActive = this.props.currentView === "home" ? "active" :"";
        
    const { session, actions } = this.props;
    
    return (
        <div className="container-fluid text-center mt-5 mb-5" id="logbackimag">
            <div className="container-fluid py-3">
                <div className="row" id="loginpt">
                    <div className="col-md-6 mx-auto">
                        <div className="card card-body" id="signopacid">
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
                                            <input className="terms mr-1" type="checkbox"/>I have read and agree to the <a href="#"> terms of service </a>
                                        </label>
                                        
                                        <input className="btn btn-lg btn-secondary btn-block" value="Update" type="submit" />
                                    </div>
                                </fieldset>
                            :
                                <fieldset>
                                    <div className="form-group has-error">
                                        <button className="btn btn-dark rounded-circle mb-3">
                                            <span><FontAwesomeIcon className="fas fa-search text-light fa-5x" icon={faUser} /></span>
                                        </button>
                                        <h3>Profile</h3>
                                        <input className="form-control input-lg ml-1"  placeholder="E-mail Address" name="email" type="text" />
                                        <div className="col-lg-12 text-left"><small><strong>E-mail Address:</strong></small></div>
                                    </div>
                                    
                                    <div className="form-group has-success">
                                        <input className="form-control input-lg" placeholder="Password" name="password" value="" type="password" />
                                        <div className="col-lg-12 text-left"><small><strong>Password:</strong></small></div>
                                    </div>
                                    
                                    <div className="form-group has-success">
                                        <input className="form-control input-lg" placeholder="Confirm Password" name="password" value="" type="password" />
                                        <div className="col-lg-12 text-left"><small><strong>Confirm Password:</strong></small></div>
                                    </div>
                                    
                                    <div className="form-group has-error">
                                        <input className="form-control input-lg" placeholder="First Name" name="First Name" type="text" />
                                        <div className="col-lg-12 text-left"><small><strong>First Name:</strong></small></div>
                                    </div>
                                    
                                    <div className="form-group has-error">
                                        <input className="form-control input-lg" placeholder="Last Name" name="Last Name" type="text" />
                                        <div className="col-lg-12 text-left"><small><strong>Last Name:</strong></small></div>
                                    </div>
                                    
                                    <div className="form-group has-error">
                                        <input className="form-control input-lg" placeholder="Address Line 1" name="Address" type="text" />
                                        <div className="col-lg-12 text-left"><small><strong>Address Line 1:</strong></small></div>
                                    </div>
                                    
                                    <div className="form-group has-error">
                                        <input className="form-control input-lg" placeholder="Address Line 2" name="Address" type="text" />
                                        <div className="col-lg-12 text-left"><small><strong>Address Line 2:</strong></small></div>
                                    </div>
                                        
                                        
                                    <div className="form-group has-error">
                                        <input className="form-control input-lg" placeholder="City" name="City" type="text" />
                                        <div className="col-lg-12 text-left"><small><strong>City:</strong></small></div>
                                    </div>
                                            
                                    <div className="form-group has-error">
                                        <input type="text" className="form-control" id="validationTooltip04" placeholder="State" required />
                                        <div className="col-lg-12 text-left"><small><strong>State:</strong></small></div>
                                        <div className="invalid-tooltip">
                                            Please provide a valid state.
                                        </div>
                                    </div>
                                            
                                    <div className="form-group has-error">
                                        <input type="text" className="form-control" id="validationTooltip05" placeholder="Zip" required />
                                        <div className="col-lg-12 text-left"><small><strong>Zip:</strong></small></div>
                                        <div className="invalid-tooltip">
                                            Please provide a valid zip.
                                            
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-lg-12 text-center mb-2"><strong>Credit Card Info:</strong></div>
                                        <div className="form-control input-lg mb-3 bg-dark pb-4">
                                            <div className="col-lg-12 text-white"><strong>Card Type:</strong></div>
                                            <div className="col-lg-12">
                                                <select id="CreditCardType" name="CreditCardType" className="form-control">
                                                    <option value="5">Visa</option>
                                                    <option value="6">MasterCard</option>
                                                    <option value="7">American Express</option>
                                                    <option value="8">Discover</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group form-control input-lg bg-dark pb-4">
                                            <div className="col-lg-12 text-white"><strong>Credit Card Number:</strong></div>
                                            <div className="col-lg-12"><input type="text" className="form-control" name="car_number" value={session.user_nicename} /></div>
                                        </div>
                                        <div className="form-group form-control input-lg mb-3 bg-dark pb-4">
                                            <div className="col-lg-12 text-white"><strong>Card CVV:</strong></div>
                                            <div className="col-lg-12"><input type="text" className="form-control" name="car_code" value={session.user_nicename} /></div>
                                        </div>
                                        <div className="form-group form-control input-lg bg-dark pb-4">
                                            <div className="col-lg-12 mb-3 text-white">
                                                <strong>Expiration Date</strong>
                                            </div>
                                            <div className="col-lg-12">
                                                <select className="form-control" name="">
                                                    <option value="">Month</option>
                                                    <option value="01">01</option>
                                                    <option value="02">02</option>
                                                    <option value="03">03</option>
                                                    <option value="04">04</option>
                                                    <option value="05">05</option>
                                                    <option value="06">06</option>
                                                    <option value="07">07</option>
                                                    <option value="08">08</option>
                                                    <option value="09">09</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                </select>
                                            </div>&nbsp;
                                            <div className="col-lg-12">
                                                <select className="form-control" name="">
                                                    <option value="">Year</option>
                                                    <option value="2018">2018</option>
                                                    <option value="2019">2019</option>
                                                    <option value="2020">2020</option>
                                                    <option value="2021">2021</option>
                                                    <option value="2022">2022</option>
                                                    <option value="2023">2023</option>
                                                    <option value="2024">2024</option>
                                                    <option value="2025">2025</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="checkbox">
                                        <label className="small">
                                            <input className="terms mr-1" type="checkbox"/>I have read and agree to the <a href="#">terms of service</a>
                                        </label>
                                        <img src="https://static.shoplightspeed.com/shops/606600/files/001462255/cards.jpg" width="230 px" height="60 px"/>
                                        <input className="btn btn-lg btn-secondary btn-block text-white" value="Sign Me Up" type="submit" />
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
 
                                                    