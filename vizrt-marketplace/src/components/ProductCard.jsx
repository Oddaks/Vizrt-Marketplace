import React from 'react';
import RatingStar from './RatingStar'; 
import { useCart } from '../Tools/CartContext'; 

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart(product);
    };

    return (
        <div className="text-white cursor-pointer" onClick={handleAddToCart}>
            <p>By {product.creator}</p>
            <article className="border bg-viz-dark-blue shadow-md h-auto w-full">
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
            </article>
        </div>
    );
};

export default ProductCard;
