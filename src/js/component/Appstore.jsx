import React from 'react';
import { Link } from "react-router-dom";
import faMobile from '@fortawesome/fontawesome-free-solid/faMobile';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

function Appstore(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2>Download our Free Mobile App on:</h2>
                    <p className="text-warning">
                        <strong>Note: </strong> You may have an account with us:</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <a className="btn btn-lg btn-primary big-btn mr-3" href="#">
                        <span><FontAwesomeIcon className="faMobile fa-3x text-white" icon={faMobile} /></span>&nbsp;
                        <div className="btn-text">
                            <small>Available on the</small><br/><strong>App Store</strong></div></a>&nbsp;
                    <a className="btn btn-lg btn-success big-btn android-btn mr-3" href="#">
                        <img width="80px" className="pull-left" src="http://www.userlogos.org/files/logos/jumpordie/google_play_04.png"/>&nbsp;
                        <div className="btn-text"><small>Available on</small><br/><strong>Google Play</strong></div></a>
                    <a className="btn btn-lg btn-success big-btn windows-btn" href="#">
                        <img width="60px" className="pull-left" src="http://1.bp.blogspot.com/-rD2_M6Vvv6w/UbmywLq5V8I/AAAAAAAACko/BEcR4QqtkRI/s1600/Windows%2BStore%2BLogo.png"/>
                        <div className="btn-text">Windows<br/>Store</div></a>
                </div>
            </div>
        </div>


    );
}
export default Appstore;                                                          
 