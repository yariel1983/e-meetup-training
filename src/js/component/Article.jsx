import React from 'react';
import { Link } from "react-router-dom";


//NavBar
function Article(props) {
    return (
        <div className="col-sm-6 col-md-8 col-lg-9 p-b-50">
            {/*<!--  -->*/}
            <div className="flex-sb-m flex-w p-b-35">
                <div className="flex-w">
                    <div className="rs2-select2 bo4 of-hidden w-size12 m-t-5 m-b-5 m-r-10">
                        <select className="selection-2 select2-hidden-accessible" name="sorting"  aria-hidden="true">
                            <option>Default Sorting</option>
                            <option>Popularity</option>
                            <option>Price: low to high</option>
                            <option>Price: high to low</option>
                        </select><span className="select2 select2-container select2-container--default" dir="ltr" style="width: 146px;"><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false"  aria-labelledby="select2-sorting-0n-container"><span className="select2-selection__rendered" id="select2-sorting-0n-container" title="Default Sorting">Default Sorting</span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
                    </div>

                    <div className="rs2-select2 bo4 of-hidden w-size12 m-t-5 m-b-5 m-r-10">
                        <select className="selection-2 select2-hidden-accessible" name="sorting"  aria-hidden="true">
                            <option>Price</option>
                            <option>$0.00 - $50.00</option>
                            <option>$50.00 - $100.00</option>
                            <option>$100.00 - $150.00</option>
                            <option>$150.00 - $200.00</option>
                            <option>$200.00+</option>
                        </select>
                        <span className="select2 select2-container select2-container--default" dir="ltr" style="width: 154px;">
                            <span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false"  aria-labelledby="select2-sorting-i5-container">
                                <span className="select2-selection__rendered" id="select2-sorting-i5-container" title="Price">Price
                                </span>
                                <span className="select2-selection__arrow" role="presentation">
                                    <b role="presentation"></b>
                                </span>
                            </span>
                            </span>
                            <span className="dropdown-wrapper" aria-hidden="true"></span>
                        </span>
                    </div>
                </div>

                {/*<span className="s-text8 p-t-5 p-b-5">
					Showing 1–12 of 16 results
                </span>*/}
            </div>
			
            {/*<!-- Product -->*/}
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-4 p-b-50">
                    {/*<!-- Block2 -->*/}
                    <div className="block2">
                        <div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelnew">
                            <img src="images/item-02.jpg" alt="IMG-PRODUCT" />

                            <div className="block2-overlay trans-0-4">
                                <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
                                    <i className="icon-wishlist icon_heart_alt" aria-hidden="true" />
                                    <i className="icon-wishlist icon_heart dis-none" aria-hidden="true" />
                                </a>

                                <div className="block2-btn-addcart w-size1 trans-0-4">
                                    {/*<!-- Button -->*/}
                                    <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
            {/*<!-- Pagination -->*/}
            <div className="pagination flex-m flex-w p-t-26">
                <a href="#" className="item-pagination flex-c-m trans-0-4 active-pagination">1</a>
                <a href="#" className="item-pagination flex-c-m trans-0-4">2</a>
            </div>
        </div>);
}
            
export default Article;