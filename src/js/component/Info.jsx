import React from 'react';
import { Link } from "react-router-dom";
import faUser from '@fortawesome/fontawesome-free-regular/faUser';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

function info(props) {
    return (
        <div className="col-md-12 text-white">
            <form>
                <legend><span className="glyphicon glyphicon-globe"></span> Our Office</legend>
                <address>
                    <strong>Xtreme Training Products and Videos Inc. </strong>
                    <br/>
                    {/*66 W Flagler St #900,
                    <br/>
                    Miami, FL 33130 &nbsp;*/}
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
                


    );
}
export default info;                                                          
 