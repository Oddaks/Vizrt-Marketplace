import React from 'react';
import RatingStar from './RatingStar';


const ProductInfo= ({ product }) => {
    if (!product) {
        return <div>Loading product details...</div>;
    }
    console.log(product.image); 
return (
    <div className="text-white cursor-pointer h-80 pt-6 " >
        <p>By {product.creator}</p>
        <article className="border bg-viz-dark-blue shadow-md w-full h-full ">
            <img src={product.image} alt={product.title} className="w-full h-full"/>
            <div className="p-4 flex flex-col justify-between">
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p>{product.description}</p>
                <div className="flex items-center space-x-2">
                    <RatingStar rate={product.rating.rate} />
                    <p className="text-gray-400 text-sm">({product.rating.count})</p>
                </div>
                <p className="text-right mt-2">Price: {product.price} Kr</p>
            </div>
        </article>
    </div>
);
};

export default ProductInfo;
