import React from 'react';
import RatingStar from './RatingStar';
import { useCart } from '../Tools/CartContext';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faShoppingCart} from '@fortawesome/free-solid-svg-icons';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();
    const navigate = useNavigate(); 

    const handleAddToCart = (event) => {
        //event.stopPropagation();
        addToCart(product);
    };

    const handleNavigateToProductPage = () => {
        navigate(`/ProductPage/${product.id}`);
    };
 //onClick={handleAddToCart}

    return (
        <div className="text-white cursor-pointer h-80 pt-6 " >
            <p>By {product.creator}</p>
            <article className="border bg-viz-dark-blue shadow-md w-full h-full ">
                <img src={product.image} alt={product.title} className="w-full h-50 object-cover" onClick={handleNavigateToProductPage}/>
                <div className="p-4 flex flex-col justify-between" onClick={handleAddToCart}>
                    <h3 className="text-lg font-semibold">{product.title}</h3>
                    <div className="flex items-center space-x-2">
                        <RatingStar rate={product.rating.rate} />
                        <p className="text-gray-400 text-sm">({product.rating.count})</p>
                    </div>
                         
                            <button className="cart-button"  >
                                <FontAwesomeIcon onClick={handleAddToCart} icon={faShoppingCart} style={{ fontSize: '30px' }} />
                            </button>
                        
                    <p className="text-right mt-2">Price: {product.price} Kr</p>
                </div>
            </article>
        </div>
    );
};

export default ProductCard;
