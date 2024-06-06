import React from "react";
import Logo from "../components/MarketplaceLogo";
import BackButton from "../components/BackButton";

const ProductPage = ()=>{
    return(
        <div className="bg-viz-blue">
            <div className='p-6'>
                <BackButton />
            </div>
            <p>Hello I am a product</p>
        </div>
    )
}
export default ProductPage