import React from 'react';
import 'bootstrap';
import { Link } from "react-router-dom";

function OrderConfirmation(props){
    return (
       
        <div className="container">
            <div className="row">
                <section>
                    <div className="wizard">
                        <div className="wizard-inner">
                            <div className="connecting-line"></div>
                            <ul className="nav  breadcrumb_checkout" role="tablist">
                                <li role="presentation" className="active">
                                    <a href="#step1" data-toggle="tab" aria-controls="step1" role="tab" title="Step 1">
                                        <h3>Shipping</h3>
                                    </a>
                                </li>
                                <li role="presentation" className="">
                                    <a href="#step2" data-toggle="tab" aria-controls="step2" role="tab" title="Step 2">
                                        <h3>Payment</h3>
                                    </a>
                                </li>
                                <li role="presentation" className="disabled">
                                    <a href="#step3" data-toggle="tab" aria-controls="step3" role="tab" title="Step 3">
                                        <h3>Confirmations</h3>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <form role="form">
                            <div className="tab-content">
                                <div className="tab-pane active" role="tabpanel" id="step1">
                                    <div className="step1">
                                        <div className="row" style="">
                                            <div className="checkout_details">
                                                <div className="col-sm-6 col-sm-offset-3">
                                                    <dl className="dl-horizontal">
                                                        <dt>First Name:<span></span></dt>
                                                        <dd>Priya</dd>
                                                    </dl>
                                                    <dl className="dl-horizontal">
                                                        <dt>Mobile Number:<span></span></dt>
                                                        <dd>970000000</dd>
                                                    </dl>
                                                    <dl className="dl-horizontal">
                                                        <dt>Pincode:<span></span></dt>
                                                        <dd>625014</dd>
                                                    </dl>
                                                    <dl className="dl-horizontal">
                                                        <dt>Email:<span></span></dt>
                                                        <dd>user@gmail.com</dd>
                                                    </dl>
                                                    <dl className="dl-horizontal">
                                                        <dt>Flat / House No. / Floor / Building:<span></span></dt>
                                                        <dd>#33/5</dd>
                                                    </dl>
                                                    <dl className="dl-horizontal">
                                                        <dt>Colony / Street / Locality:<span></span></dt>
                                                        <dd>Roja 1st Street</dd>
                                                    </dl>
                                                    <dl className="dl-horizontal">
                                                        <dt>Landmark:<span></span></dt>
                                                        <dd>Murugan Temple</dd>
                                                    </dl>
                                                    <div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                    
                                    </div>
                                    <div className="tab-pane" role="tabpanel" id="step2">
                                        <div className="col-sm-4">
                                            <h5><strong>Shipping address</strong></h5>                      
                                            <p>Name: John Albert</p>
                                            <p>Address: #33, Kaveri nadhi st, </p>
                                            <p>KK nagar, </p>
                                            <p> Madurai - 02</p>                     
                                        </div>
                                        <div className="col-sm-3">
                                            <h5><strong>Payment method </strong></h5>
                                            <p>Net Banking: Allahabad Bank </p>   
                                        </div>
                                        <div className="col-sm-5">
                                            <h5><strong>Place your order and pay</strong></h5>   
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th>Product</th>
                                                        <th>Price</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Sunflower oli</td>
                                                        <td><i className="fa fa-usd" aria-hidden="true"></i> 45</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Sun rich oil</td>
                                                        <td><i className="fa fa-usd" aria-hidden="true"></i> 90</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                        Total: <i className="fa fa-usd" aria-hidden="true"> 135
                                                        </i></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </div> 
        </div>

            );
}   
    
export default OrderConfirmation;
 
 
