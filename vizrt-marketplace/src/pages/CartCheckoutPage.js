import React from 'react';
import { useCart } from '../Tools/CartContext'; // Ensure the path is correct

const CartCheckoutPage = () => {
    const { cart, removeFromCart } = useCart();

    console.log('CartCheckoutPage - Cart:', cart);

    return (
        <div className="cart-checkout-page grid bg-viz-blue justify-center">
            <h2>Cart Checkout</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul>
                    {cart.map((product) => (
                        <li key={product.id} className="cart-item">
                            <div>
                                <img src={product.image} alt={product.title} className="cart-item-image" />
                                <p>{product.title}</p>
                                <p>Price: {product.price} Kr</p>
                            </div>
                            <button onClick={() => removeFromCart(product.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CartCheckoutPage;
