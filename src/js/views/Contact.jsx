import React from 'react';
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from '../component/NavBar.jsx';
import Footer from '../component/Footer.jsx';


export default class Contact extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <NavBar />
               
                
                <div className="jumbotron jumbotron-sm border border-dark">
                    <div className="container text-center">
                        <div className="row">
                            <div className="col-sm-12 col-lg-12">
                                <h1 className="h1">
                    Contact us <small>Feel free to contact us</small></h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="well well-sm">
                                <form>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="name">
                                Name</label>
                                                <input type="text" className="form-control" id="name" placeholder="Enter name" required="required" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="email">
                                Email Address</label>
                                                <div className="input-group">
                                                    <span className="input-group-addon"><span className="glyphicon glyphicon-envelope"></span>
                                                    </span>
                                                    <input type="email" className="form-control" id="email" placeholder="Enter email" required="required" /></div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="subject">
                                        Subject</label>
                                                <select id="subject" name="subject" className="form-control" required="required">
                                                    <option value="na" selected="">Choose One:</option>
                                                    <option value="service">General Customer Service</option>
                                                    <option value="suggestions">Suggestions</option>
                                                    <option value="product">Product Support</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="name">
                                Message</label>
                                                <textarea name="message" id="message" className="form-control" rows="9" cols="25" required="required"
                                placeholder="Message"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <button type="submit" className="btn btn-primary pull-right mb-5" id="btnContactUs">
                            Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <form>
                                <legend><span className="glyphicon glyphicon-globe"></span> Our office</legend>
                                <address>
                                    <strong>Xtreme Training Products and Events Inc. </strong>
                                    <br/>
                                    66 W Flagler St #900,
                                    <br/>
                                    Miami, FL 33130
                                    <abbr title="Phone">
                                        <br/>
                                    Phone# </abbr>
                                    (786) 808-5655
                                    <br/>
                                </address>
                                <address>
                                    <strong>Full Name</strong><br/>
                                    <a href="mailto:#">support@xtremetraining.com</a>
                                </address>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}