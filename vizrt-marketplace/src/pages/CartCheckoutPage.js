import React from 'react';
import { useCart } from '../Tools/CartContext'; // Ensure the path is correct
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


const CartCheckoutPage = () => {
    const { cart, removeFromCart } = useCart();

    console.log('CartCheckoutPage - Cart:', cart);

    const total = cart.reduce((sum, item) => sum + item.price, 0).toLocaleString();

    return (
        <div className="min-h-screen bg-viz-blue text-white flex justify-center items-center">
            <div className="w-full max-w-4xl p-4 bg-gray-800 rounded-lg shadow-lg grid grid-cols-3 gap-4">
                <div className="col-span-2">
                    <h2 className="text-3xl font-bold mb-6">Cart Checkout</h2>
                    {cart.length === 0 ? (
                        <p>Your cart is empty</p>
                    ) : (
                        <div className="grid gap-4">
                            <ul className="divide-y divide-gray-600">
                                {cart.map((product) => (
                                    <li key={product.id} className="grid grid-cols-[1fr_auto] items-center p-4">
                                        <div className="flex items-center">
                                            <img src={product.image} alt={product.title} className="w-12 h-12 mr-4" />
                                            <div>
                                                <p className="font-bold">{product.title}</p>
                                                <p className="text-sm">Price: {product.price.toLocaleString()} Kr</p>
                                            </div>
                                        </div>
                                        <button onClick={() => removeFromCart(product.id)} className="text-red-500 hover:text-red-700">
                                            <FontAwesomeIcon icon={faTrash} />
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
                <div className="p-4 rounded-lg grid place-items-center">
                    <p className="mb-4">Total: {total} Kr</p>
                    <button className=" bg-gradient-to-r text-white font-bold py-2 px-4 rounded">
                        Buy ({cart.length})
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartCheckoutPage;
