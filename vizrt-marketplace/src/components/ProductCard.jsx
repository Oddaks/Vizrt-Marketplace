import React, { useState, useRef, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBars, faCheck, faHeart, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../Tools/CartContext';
import { useNavigate } from 'react-router-dom';
import RatingStar from './RatingStar';

//uses dropdown menu from the header
const ProductCard = ({ product }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [favorited, setFavorited] = useState(false);
    const dropdownRef = useRef(null);
    const { cart, addToCart, removeFromCart } = useCart();
    const navigate = useNavigate();

//uses logic from cartcontext to add and remove items from cart

//checks of product is in cart or not
    const isInCart = cart.some(item => item.id === product.id);
    const toggleCartAction = (e) => {
        e.stopPropagation();
        if (isInCart) {
            removeFromCart(product.id);
        } else {
            addToCart(product);
        }
//feedback button dissapears after 2 sec
        setTimeout(() => {
            setDropdownOpen(false);
        }, 2000);
    };
//visibility toggle for dropdown menu
    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    //close menu if user clicks outside of it
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdownOpen(false);
        }
    };

        //eventlistener handles clicks outside the dropdown menu
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative bg-viz-dark-blue border border-gray-200 shadow-md w-full flex flex-col p-4">
            {/*if item is favorited add heart*/}
            {favorited && (
                <div className="absolute right-2 top-2">
                    <FontAwesomeIcon icon={faHeart} className="text-viz-orange text-2xl" />
                </div>
            )}
            {/*when image is clicked navigates to page for the product by id*/}
            <img src={product.image} alt={product.title} className="w-full object-cover cursor-pointer" onClick={() => navigate(`/ProductPage/${product.id}`)} />
            <div>
                <h3 className="text-lg font-semibold text-white">{product.title}</h3>
                <div className="flex items-center space-x-2">
                    <RatingStar rate={product.rating.rate} />
                    <p className="text-gray-400 text-xs">({product.rating.count})</p>
                </div>
                <div className="flex justify-between items-center mt-2">
                    <p className="text-sm text-white">{product.price} Kr</p>

                    <button onClick={toggleDropdown} className="text-white">
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    {/*show dropdown menu and style toggle modes*/}
                    {dropdownOpen && (
                        <div ref={dropdownRef} className="absolute right-0 mt-2 bg-white rounded shadow-lg z-10">
                            <button 
                                onClick={toggleCartAction}
                                className={`block w-full p-2 text-sm text-left hover:bg-viz-orange ${isInCart ? 'bg-white text-black' : 'bg-white text-black'}`}
                            >
                                {isInCart ? 'Remove from Cart' : 'Add to Cart'} <FontAwesomeIcon icon={isInCart ? faTrashAlt : faShoppingCart} className="ml-2" />
                            </button>
                            <button 
                                onClick={(e) => { e.stopPropagation(); setFavorited(!favorited); }}
                                className={`block w-full p-2 text-sm text-left hover:bg-viz-orange ${favorited ? 'bg-white text-black' : 'bg-white'}`}
                            >
                                {favorited ? 'Unfavorite' : 'Favorite'} <FontAwesomeIcon icon={faHeart} className="ml-2 flex-end" />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
