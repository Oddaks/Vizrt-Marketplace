import React from 'react';
import RatingStar from './RatingStar';

const ProductCard = ({ product }) => {
    return (
        <div className="mb-8 text-white">
            <p >By {product.creator}</p>
            <article className="border p-4 bg-viz-dark-blue shadow-md">
                <img src={product.image} alt={product.title} className="w-full h-40 object-cover mb-2" />
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <RatingStar rate={product.rating.rate}/>
                <p>Price: {product.price} Kr</p>
            </article>
        </div>
    );
};

export default ProductCard;
