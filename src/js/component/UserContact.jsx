import React from 'react';
import { Link } from "react-router-dom";



function UserContact(props) {
    return (
        
        <div className="container col-4 mt-5 mb-5">
            <form>
                <div className="form-group mt-3">
                    <label className="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" className="form-text text-muted"></small>
                </div>
                <div className="form-group">
                    <label className="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input mt-1" id="exampleCheck1"/>
                    <label className="form-check-label">Check me out</label>
                </div>
                <button type="submit" className="btn btn-outline-success mt-5 mb-3">Submit</button>
            </form>
        </div>
        
            
    );
}
            
export default UserContact;           
            
        
        
            
           
        
            
                

    

                        
                    
