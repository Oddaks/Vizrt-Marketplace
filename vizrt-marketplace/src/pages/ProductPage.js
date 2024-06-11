import React, { useState } from "react";
import BackButton from "../components/BackButton";
import ProductEditor from "../components/ProductEditor";
import ProductCard from "../components/ProductCard";

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
            <div className='p-6'>
                <BackButton />
                <ProductEditor />

            </div>
            <p className="text-white">Hello I am a product</p>

        </div>
    )
}
export default ProductPage