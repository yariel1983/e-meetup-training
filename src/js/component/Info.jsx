import React from 'react';
import { Link } from "react-router-dom";
import faUser from '@fortawesome/fontawesome-free-regular/faUser';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

function info(props) {
    return (
        <div>    
            <div className="col-md-12 text-white">
                <form>
                    <legend><span className="glyphicon glyphicon-globe"></span> Our Office</legend>
                    <address>
                        <strong>Xtreme Training Products and Videos Inc. </strong>
                        <br/>
                        66 W Flagler St #900,
                        <br/>
                        Miami, FL 33130 &nbsp;
                        <abbr title="Phone">
                        </abbr>
                        Phone: +1 (786) 808-5655
                    </address>
                    <address>
                        <strong>Email Address</strong><br/>
                        <a href="mailto:#">support@xtremetraining.com</a>
                    </address>
                </form>
            </div>
            <div className="textwidget mb-3 text-center">
                <a href="[full link to your Twitter]"/>
                <img title="Twitter" src="https://socialmediawidgets.files.wordpress.com/2014/03/01_twitter.png" alt="Twitter" width="20" height="20" />
                <a href="[full link to your Pinterest]"/> 
                <img title="Pinterest" src="https://socialmediawidgets.files.wordpress.com/2014/03/13_pinterest.png" alt="Pinterest" width="20" height="20"/>
                <a href="[full link to your Facebook page]"/>
                <img title="Facebook" src="https://socialmediawidgets.files.wordpress.com/2014/03/02_facebook.png" alt="Facebook" width="20" height="20"/>
                <a href="linkedinaddress"/>
                <img title="LinkedIn" src="https://socialmediawidgets.files.wordpress.com/2014/03/07_linkedin.png" alt="LinkedIn" width="20" height="20"/>
                <a href="instagramaddress"/>
                <img title="Instagram" src="https://socialmediawidgets.files.wordpress.com/2014/03/10_instagram.png" alt="RSS" width="20" height="20"/>
            </div>                    
        </div>
                


    );
}
export default info;                                                          
 