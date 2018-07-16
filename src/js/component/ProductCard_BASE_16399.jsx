import React from 'react';
import 'bootstrap';
import { Link } from "react-router-dom";

function ProductCard(props){
return (
    <div class="container">
        <div class="product-slider owl-carousel owl-theme" style="display: block; opacity: 1;">
            <div class="owl-wrapper-outer">
                <div class="owl-wrapper" style="display: block; width: 3648px; left: 0px; transition: all 0ms ease; transform: translate3d(0px, 0px, 0px);">
                    <div class="owl-item" style="width: 228px;">
                        <div class="item" style="visibility: visible;">
                            <div class="product">
                                <div class="flip-container">
                                    <div class="flipper">
                                        <div class="front">
                                            <a href="detail.html" />
                                            <img src="img/product1.jpg" alt="" class="img-responsive" />
                                        </div>
                                        <div class="back">
                                            <a href="detail.html">
                                                <img src="img/product1_2.jpg" alt="" class="img-responsive" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <a href="detail.html" class="invisible">
                                    <img src="img/product1.jpg" alt="" class="img-responsive" />
                                </a>
                                <div class="text">
                                    <h3><a href="detail.html">Fur coat with very but very very long name</a></h3>
                                    <p class="price">$143.00</p>
                                </div>
                                {/*<!-- /.text -->*/}
                            </div>
                            {/*<!-- /.product -->*/}
                        </div>
                    </div>
                    <div class="owl-item" style="width: 228px;">
                        <div class="item" style="visibility: visible;">
                            <div class="product">
                                <div class="flip-container">
                                    <div class="flipper">
                                        <div class="front">
                                            <a href="detail.html">
                                            <img src="img/product2.jpg" alt="" class="img-responsive" />
                                            </a>
                                        </div>
                                        <div class="back">
                                            <a href="detail.html">
                                            <img src="img/product2_2.jpg" alt="" class="img-responsive" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <a href="detail.html" class="invisible">
                                <img src="img/product2.jpg" alt="" class="img-responsive" />
                                </a>
                                <div class="text">
                                    <h3><a href="detail.html">White Blouse Armani</a></h3>
                                    <p class="price"><del>$280</del> $143.00</p>
                                </div>
                                {/*<!-- /.text -->*/}
                                <div class="owl-item" style="width: 228px;"><div class="item" style="visibility: visible;">
                                    <div class="product">
                                        <div class="flip-container">
                                            <div class="flipper">
                                                <div class="front">
                                                    <a href="detail.html">
                                                    <img src="img/product2.jpg" alt="" class="img-responsive" />
                                                    </a>
                                                </div>
                                                <div class="back">
                                                    <a href="detail.html">
                                                    <img src="img/product2_2.jpg" alt="" class="img-responsive" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="detail.html" class="invisible">
                                        <img src="img/product2.jpg" alt="" class="img-responsive" />
                                        </a>
                                        <div class="text">
                                            <h3><a href="detail.html">White Blouse Armani</a></h3>
                                            <p class="price"><del>$280</del> $143.00</p>
                                        </div>
                                        {/*<!-- /.text -->*/}

                                        <div class="ribbon sale">
                                            <div class="theribbon">SALE</div>
                                                <div class="ribbon-background">
                                                </div>
                                            </div>
                                        {/*<!-- /.ribbon -->*/}
                                        
                                        <div class="ribbon new">
                                            <div class="theribbon">NEW</div>
                                                <div class="ribbon-background">
                                                </div>
                                            </div>
                                        {/*<!-- /.ribbon -->*/}
                                        
                                        <div class="ribbon gift">
                                            <div class="theribbon">GIFT</div>
                                            <div class="ribbon-background">
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
            <div class="owl-controls clickable">
                <div class="owl-pagination">
                    <div class="owl-page active">
                        <span class=""></span>
                    </div>
                    <div class="owl-page">
                        <span class=""></span>
                    </div>
                </div>
            </div>    
            <div class="owl-buttons">
                <div class="owl-prev">prev</div>
                <div class="owl-next">next</div>
            </div>
        </div>
    </div>);
}

export default ProductCard;
                    