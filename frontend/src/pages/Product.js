import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



function Product_Page(){
    return(
        <>
           <div className='container'>
                <div className='product_img'>
                    <img></img>
                </div>

                <div className='product_title'>

                </div>

                <div className='product_description'>

                </div>

                <div className='similar_products'>
                    <div>
                        <img></img>
                        <div>Price</div>
                    </div>
                    <div>
                        <img></img>
                        <div>Price</div>
                    </div>
                    <div>
                        <img></img>
                        <div>Price</div>
                    </div>
                    <div>
                        <img></img>
                        <div>Price</div>
                    </div>
                    <div>
                        <img></img>
                        <div>Price</div>
                    </div>
                    <div>
                        <img></img>
                        <div>Price</div>
                    </div>
                </div>

                <div className='Reviews'>
                    <div>Info</div>
                    <div>Review</div>
                </div>

           </div>
        </>
    );
}
export default Product_Page;