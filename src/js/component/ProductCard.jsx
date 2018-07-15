import React from 'react';
import 'bootstrap';
import { Link } from "react-router-dom";

function ProductCard(props){
return (
    <div className="container">
        <div className="product-slider owl-carousel owl-theme" style="display: block; opacity: 1;">
            <div className="owl-wrapper-outer">
                <div className="owl-wrapper" style="display: block; width: 3648px; left: 0px; transition: all 0ms ease; transform: translate3d(0px, 0px, 0px);">
                    <div className="owl-item" style="width: 228px;">
                        <div className="item" style="visibility: visible;">
                            <div className="product">
                                <div className="flip-container">
                                    <div className="flipper">
                                        <div className="front">
                                            <a href="detail.html" />
                                            <img src="img/product1.jpg" alt="" className="img-responsive" />
                                        </div>
                                        <div className="back">
                                            <a href="detail.html">
                                                <img src="img/product1_2.jpg" alt="" className="img-responsive" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <a href="detail.html" className="invisible">
                                    <img src="img/product1.jpg" alt="" className="img-responsive" />
                                </a>
                                <div className="text">
                                    <h3><a href="detail.html">Fur coat with very but very very long name</a></h3>
                                    <p className="price">$143.00</p>
                                </div>
                                {/*<!-- /.text -->*/}
                            </div>
                            {/*<!-- /.product -->*/}
                        </div>
                    </div>
                    <div className="owl-item" style="width: 228px;">
                        <div className="item" style="visibility: visible;">
                            <div className="product">
                                <div className="flip-container">
                                    <div className="flipper">
                                        <div className="front">
                                            <a href="detail.html">
                                                <img src="img/product2.jpg" alt="" className="img-responsive" />
                                            </a>
                                        </div>
                                        <div className="back">
                                            <a href="detail.html">
                                                <img src="img/product2_2.jpg" alt="" className="img-responsive" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <a href="detail.html" className="invisible">
                                    <img src="img/product2.jpg" alt="" className="img-responsive" />
                                </a>
                                <div className="text">
                                    <h3><a href="detail.html">White Blouse Armani</a></h3>
                                    <p className="price"><del>$280</del> $143.00</p>
                                </div>
                                {/*<!-- /.text -->*/}
                                <div className="owl-item" style="width: 228px;"><div className="item" style="visibility: visible;">
                                    <div className="product">
                                        <div className="flip-container">
                                            <div className="flipper">
                                                <div className="front">
                                                    <a href="detail.html">
                                                        <img src="img/product2.jpg" alt="" className="img-responsive" />
                                                    </a>
                                                </div>
                                                <div className="back">
                                                    <a href="detail.html">
                                                        <img src="img/product2_2.jpg" alt="" className="img-responsive" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="detail.html" className="invisible">
                                            <img src="img/product2.jpg" alt="" className="img-responsive" />
                                        </a>
                                        <div className="text">
                                            <h3><a href="detail.html">White Blouse Armani</a></h3>
                                            <p className="price"><del>$280</del> $143.00</p>
                                        </div>
                                        {/*<!-- /.text -->*/}

                                        <div className="ribbon sale">
                                            <div className="theribbon">SALE</div>
                                            <div className="ribbon-background">
                                            </div>
                                        </div>
                                        {/*<!-- /.ribbon -->*/}
                                        
                                        <div className="ribbon new">
                                            <div className="theribbon">NEW</div>
                                            <div className="ribbon-background">
                                            </div>
                                        </div>
                                        {/*<!-- /.ribbon -->*/}
                                        
                                        <div className="ribbon gift">
                                            <div className="theribbon">GIFT</div>
                                            <div className="ribbon-background">
                                            </div>
                                        </div>
                                        {/*<!-- /.ribbon -->*/}
                                    </div>
                                    {/*<!-- /.product -->*/}
                                </div>
                                </div>
                                {/*<!-- /.product -->*/}
                            </div>
                        </div>
                    </div>













 
                </div>
            </div>
            <div className="owl-controls clickable">
                <div className="owl-pagination">
                    <div className="owl-page active">
                        <span className=""></span>
                    </div>
                    <div className="owl-page">
                        <span className=""></span>
                    </div>
                </div>
            </div>    
            <div className="owl-buttons">
                <div className="owl-prev">prev</div>
                <div className="owl-next">next</div>
            </div>
        </div>
    </div>);
}

export default ProductCard;
                    