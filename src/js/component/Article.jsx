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
                        </select>
                        <span className="select2 select2-container select2-container--default" dir="ltr" >
                            <style>{'.select2 {width: 146px}'}</style>
                            <span className="selection">
                                <span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false"  aria-labelledby="select2-sorting-0n-container">
                                    <span className="select2-selection__rendered" id="select2-sorting-0n-container" title="Default Sorting">Default Sorting</span>
                                    <span className="select2-selection__arrow" role="presentation">
                                        <b role="presentation"></b>
                                    </span>
                                </span>
                            </span>
                            <span className="dropdown-wrapper" aria-hidden="true">
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>);
}
            
export default Article;