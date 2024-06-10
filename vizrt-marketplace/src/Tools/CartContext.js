import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the Cart context
const CartContext = createContext();

// Custom hook to use the Cart context
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        // Initialize state from local storage
        const savedCart = JSON.parse(localStorage.getItem('cart'));
        return savedCart || [];
    });

    useEffect(() => {
        // Save cart to local storage whenever it changes
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter(product => product.id !== productId));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
