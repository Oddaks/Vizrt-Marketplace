import React from 'react';
<<<<<<< Updated upstream
import RatingStar from './RatingStar';
import { useCart } from '../Tools/CartContext';
=======
import RatingStar from './RatingStar'; // Adjust the import path as needed
import { useCart } from '../Tools/CartContext'; // Adjust the import path as needed
>>>>>>> Stashed changes

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart(product);
    };

    return (
<<<<<<< Updated upstream
        <div className="mb-8 text-white cursor-pointer" onClick={handleAddToCart}>
            <p>By {product.creator}</p>
            <article className="border p-4 bg-viz-dark-blue shadow-md">
                <img src={product.image} alt={product.title} className="w-full h-40 object-cover mb-2" />
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <RatingStar rate={product.rating.rate} />
                <p>Price: {product.price} Kr</p>
=======
        <div className="text-white cursor-pointer h-80 pt-6 " onClick={handleAddToCart}>
            <p>By {product.creator}</p>
            <article className="border bg-viz-dark-blue shadow-md w-full h-full ">
                <img src={product.image} alt={product.title} className="w-full h-50 object-cover" />
                <div className="p-4 flex flex-col justify-between">
                    <h3 className="text-lg font-semibold">{product.title}</h3>
                    <div className="flex flex-col justify-between">
                        <div className="flex items-center space-x-2">
                            <RatingStar rate={product.rating.rate} />
                            <p className="text-gray-400 text-sm">({product.rating.count})</p>
                        </div>
                        <p className="text-right mt-2">Price: {product.price} Kr</p>
                    </div>
                </div>
>>>>>>> Stashed changes
            </article>
        </div>
    );
};

export default ProductCard;
