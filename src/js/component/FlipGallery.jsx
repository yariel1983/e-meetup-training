import React from 'react';
import 'bootstrap';
import { Link } from "react-router-dom";

function FlipGallery(props){
    return (
        <section id="team" className="pb-5">
            <div className="container">
                <h5 className="section-title h1"></h5>
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-4">
                        <div className="image-flip" onTouchStart="this.classNameList.toggle('hover');">
                            <div className="mainflip">
                                <div className="frontside">
                                    <div className="card">
                                        <div className="card-body text-center">
                                            <p>
                                                <img className=" img-fluid" alt="Team Cards Flipper" src="https://media.licdn.com/dms/image/C4E03AQHWsZFdJJiqXw/profile-displayphoto-shrink_200_200/0?e=1538006400&v=beta&t=e0wa1IpxitFfQ9DfvaKPgB00e1OnQ0i10DE3m9dID9g" /></p>
                                            <h4 className="card-title">Web Developer</h4>
                                            <p className="card-text">The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                                            <a href="#" className="btn btn-primary btn-sm">More</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="backside">
                                    <div className="card">
                                        <div className="card-body text-center mt-4">
                                            <h4 className="card-title">Web Developer</h4>
                                            <p className="card-text">The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                                            <ul className="list-inline">
                                                <li className="list-inline-item">
                                                    <a className="social-icon text-xs-center" target="_blank" href="#">
                                                        <i className="fa fa-facebook"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a className="social-icon text-xs-center" target="_blank" href="#">
                                                        <i className="fa fa-twitter"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a className="social-icon text-xs-center" target="_blank" href="#">
                                                        <i className="fa fa-skype"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a className="social-icon text-xs-center" target="_blank" href="#">
                                                        <i className="fa fa-google"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4">
                        <div className="image-flip" onTouchStart="this.classNameList.toggle('hover');">
                            <div className="mainflip">
                                <div className="frontside">
                                    <div className="card">
                                        <div className="card-body text-center">
                                            <p>
                                                <img className=" img-fluid" alt="Team Cards Flipper" src="https://media.licdn.com/dms/image/C5603AQFhIa1KfEmeUQ/profile-displayphoto-shrink_800_800/0?e=1538611200&v=beta&t=dEPzYDV_3Zj_B_k3TybyipR8MM4Rz0_W_IJcTXdfZig" /></p>
                                            <h4 className="card-title">Web Developer</h4>
                                            <p className="card-text">The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                                            <a href="#" className="btn btn-primary btn-sm">More</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="backside">
                                    <div className="card">
                                        <div className="card-body text-center mt-4">
                                            <h4 className="card-title">Web Developer</h4>
                                            <p className="card-text">The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                                            <ul className="list-inline">
                                                <li className="list-inline-item">
                                                    <a className="social-icon text-xs-center" target="_blank" href="#">
                                                        <i className="fa fa-facebook"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a className="social-icon text-xs-center" target="_blank" href="#">
                                                        <i className="fa fa-twitter"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a className="social-icon text-xs-center" target="_blank" href="#">
                                                        <i className="fa fa-skype"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a className="social-icon text-xs-center" target="_blank" href="#">
                                                        <i className="fa fa-google"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4">
                        <div className="image-flip" onTouchStart="this.classNameList.toggle('hover');">
                            <div className="mainflip">
                                <div className="frontside">
                                    <div className="card">
                                        <div className="card-body text-center">
                                            <p>
                                                <img className=" img-fluid" alt="Team Cards Flipper" src="https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-9/10389073_10152698987828269_2492101987113140912_n.jpg?_nc_cat=0&oh=87a29ada3b4114168e17a5e827ec185b&oe=5BCEBBB5" /></p>
                                            <h4 className="card-title">Web Developer</h4>
                                            <p className="card-text">The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                                            <a href="#" className="btn btn-primary btn-sm">More</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="backside">
                                    <div className="card">
                                        <div className="card-body text-center mt-4">
                                            <h4 className="card-title">Web Developer</h4>
                                            <p className="card-text">The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                                            <ul className="list-inline">
                                                <li className="list-inline-item">
                                                    <a className="social-icon text-xs-center" target="_blank" href="#">
                                                        <i className="fa fa-facebook"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a className="social-icon text-xs-center" target="_blank" href="#">
                                                        <i className="fa fa-twitter"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a className="social-icon text-xs-center" target="_blank" href="#">
                                                        <i className="fa fa-skype"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a className="social-icon text-xs-center" target="_blank" href="#">
                                                        <i className="fa fa-google"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4">
                        <div className="image-flip" onTouchStart="this.classNameList.toggle('hover');">
                            <div className="mainflip">
                                <div className="frontside">
                                    <div className="card">
                                        <div className="card-body text-center">
                                            <p>
                                                <img className=" img-fluid" alt="Team Cards Flipper" src="https://media.licdn.com/dms/image/C4D03AQESrBpJWvGXCA/profile-displayphoto-shrink_800_800/0?e=1538611200&v=beta&t=lnMFbmJJoQv1XRzWXR-TqmwTE-TqBircZjH6TA8i-iQ" /></p>
                                            <h4 className="card-title">Web Developer</h4>
                                            <p className="card-text">The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                                            <a href="#" className="btn btn-primary btn-sm">More</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="backside">
                                    <div className="card">
                                        <div className="card-body text-center mt-4">
                                            <h4 className="card-title">Web Developer</h4>
                                            <p className="card-text">The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                                            <ul className="list-inline">
                                                <li className="list-inline-item">
                                                    <a className="social-icon text-xs-center" target="_blank" href="#">
                                                        <i className="fa fa-facebook"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a className="social-icon text-xs-center" target="_blank" href="#">
                                                        <i className="fa fa-twitter"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a className="social-icon text-xs-center" target="_blank" href="#">
                                                        <i className="fa fa-skype"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a className="social-icon text-xs-center" target="_blank" href="#">
                                                        <i className="fa fa-google"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4">
                        <div className="image-flip" onTouchStart="this.classNameList.toggle('hover');">
                            <div className="mainflip">
                                <div className="frontside">
                                    <div className="card">
                                        <div className="card-body text-center">
                                            <p>
                                                <img className=" img-fluid" alt="Team Cards Flipper" src="https://media.licdn.com/dms/image/C4D03AQHc7oiIs2r9ig/profile-displayphoto-shrink_800_800/0?e=1538611200&v=beta&t=80K_NPUONEw8AgBEHAPWwBNsjTZnZkd9xRodY38fTfk" /></p>
                                            <h4 className="card-title">Web Developer</h4>
                                            <p className="card-text">The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                                            <a href="#" className="btn btn-primary btn-sm">More</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="backside">
                                    <div className="card">
                                        <div className="card-body text-center mt-4">
                                            <h4 className="card-title">Web Developer</h4>
                                            <p className="card-text">The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                                            <ul className="list-inline">
                                                <li className="list-inline-item">
                                                    <a className="social-icon text-xs-center" target="_blank" href="#">
                                                        <i className="fa fa-facebook"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a className="social-icon text-xs-center" target="_blank" href="#">
                                                        <i className="fa fa-twitter"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a className="social-icon text-xs-center" target="_blank" href="#">
                                                        <i className="fa fa-skype"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a className="social-icon text-xs-center" target="_blank" href="#">
                                                        <i className="fa fa-google"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4">
                        <div className="image-flip" onTouchStart="this.classNameList.toggle('hover');">
                            <div className="mainflip">
                                <div className="frontside">
                                    <div className="card">
                                        <div className="card-body text-center">
                                            <p>
                                                <img className=" img-fluid" alt="Team Cards Flipper" src="https://media.licdn.com/dms/image/C4E03AQFVSBPKDrdAZA/profile-displayphoto-shrink_800_800/0?e=1538611200&v=beta&t=FK7J24EZTG1MDnU5EQqwAd_pJwykG2dpqH_DASj9XW4" /></p>
                                            <h4 className="card-title">Web Developer</h4>
                                            <p className="card-text">The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                                            <a href="#" className="btn btn-primary btn-sm">More</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="backside">
                                    <div className="card">
                                        <div className="card-body text-center mt-4">
                                            <h4 className="card-title">Web Developer</h4>
                                            <p className="card-text">The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                                            <ul className="list-inline">
                                                <li className="list-inline-item">
                                                    <a className="social-icon text-xs-center" target="_blank" href="#">
                                                        <i className="fa fa-facebook"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a className="social-icon text-xs-center" target="_blank" href="#">
                                                        <i className="fa fa-twitter"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a className="social-icon text-xs-center" target="_blank" href="#">
                                                        <i className="fa fa-skype"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a className="social-icon text-xs-center" target="_blank" href="#">
                                                        <i className="fa fa-google"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    
    );
}   
    
export default FlipGallery;






























