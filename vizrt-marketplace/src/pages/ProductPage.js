import React, { useState } from "react";
import BackButton from "../components/BackButton";
import ProductEditor from "../components/ProductEditor";
import BundleImages from "../components/BundleImages";

//! Do i need this???
//  const ProductCard = ({ product }) => {
//      const { addToCart } = useCart();
//      const handleAddToCart = () => {
//          addToCart(product);
//     };
//  };


const ProductPage = (product) => {
    const [selectedProduct, setSelectedProduct] = useState(product[0]);

    const handleProductClick = (product) => {
        setSelectedProduct(product)
    }
    return (
        <div className="bg-viz-blue">
            {/* Create space on below back arrow */}
            <div className='p-6'>
                <BackButton />
                <ProductEditor />
                <BundleImages />
            </div>
            {/* <p className="text-white font-bold">Bundle Includes</p> */}

            {/* //! Should the btn be here */}
            {/* Linking to Checkout Cart page */}
            {/* <div className="flex justify-end">
                <Link to="/CartCheckoutPage">
                    <button className=" bg-viz-orange text-white text-1xl p-4 rounded flex items-center space-x-2 hover:bg-orange-600">
                        <span>Add to Cart</span>
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </button>
                </Link>
            </div> */}
        </div>
    )
}
export default ProductPage