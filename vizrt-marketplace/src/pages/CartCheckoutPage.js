import React from 'react';
import { useCart } from '../Tools/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useOrder } from '../Tools/OrderContext'; 
import BackButton from '../components/BackButton';

const CartCheckoutPage = () => {
    const { cart, removeFromCart, removeAllFromCart } = useCart();
    const { addOrder } = useOrder();
    const navigate = useNavigate();

    const total = cart.reduce((sum, item) => sum + item.price, 0).toLocaleString();

    const handleRemoveCart = (productId) => {
        removeFromCart(productId);
    };

    const handlePurchase = () => {
        addOrder(cart);
        removeAllFromCart();
        navigate('/OrderPage'); // Redirects to OrderPage after purchase
    };

    return (
        <div className="min-h-screen bg-viz-blue text-white grid place-items-center">
            <div className="w-1/2 p-4 bg-viz-dark-blue rounded-lg border border-[#82AAB9] border-solid shadow-lg grid grid-cols-3 gap-4">
                <div className="col-span-2">
                    <h2 className="text-3xl font-bold mb-6">Cart Checkout</h2>
                    {cart.length === 0 ? (
                        <div>
                            <p>Your cart is empty</p>
                            <button onClick={() => navigate('/StorePage')} className="bg-gradient-to-r center-items text-white mt-5 font-bold py-2 px-4 rounded hover:bg-gradient-to-r-dark"> {/* Gjøre boksen penere når cart er empty*/}
                                Browse Products
                            </button>
                        </div>
                    ) : (
                        <div className="grid gap-4">
                            <ul className="divide-y divide-[#82AAB9]">
                                {cart.map((product) => (
                                    <li key={product.id} className="grid grid-cols-[1fr_auto] items-center p-4">
                                        <div className="grid grid-cols-2">
                                            <img src={product.image} alt={product.title} className="w-12 h-12 mr-4" />
                                            <div>
                                                <p className="font-bold">{product.title}</p>
                                                <p className="text-sm">Price: {product.price.toLocaleString()} Kr</p>
                                            </div>
                                        </div>
                                        <button onClick={() => handleRemoveCart(product.id)} className="text-red-500 hover:text-red-700-dark">
                                            <FontAwesomeIcon icon={faTrash} />
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
                {cart.length > 0 && (
                    <div className="p-4 rounded-lg grid place-items-center">
                        <p className="mb-4 font-bold">Total: {total} Kr</p>
                        <button onClick={handlePurchase} className=" bg-gradient-to-r text-white font-bold py-2 px-4 rounded">
                            Buy ({cart.length})
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartCheckoutPage;
