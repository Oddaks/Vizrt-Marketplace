import React, { createContext, useContext, useState, useEffect } from 'react';

//adding to and removing from local storage

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

//Defines a CartProvider component using Context, and initalizes its state with the cart items retrieved from localStorage or an empty array if there are none.
//https://www.youtube.com/watch?v=shLz_kmA68Q (10.06.24) (How to persist the shopping cart state to local storage)(Creator: Web Dev Cody)
//https://www.youtube.com/watch?v=02ieJ1YXZM4 (10.06.24) (Live Coding a Shopping Cart using React)(Creator: Web Dev Cody)
//DS3103 1 23H Webutvikling Bergen Yuan Lin
//DS3103-2023_session6_local-storage_session-storage.ppt
//DS3103-2023_session15_React-context.ppt


export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart'));
        return savedCart || [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    //Checks if there is another product in the local storage with the same id

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find(item => item.id === product.id);
            if (existingProduct) {
                return prevCart;
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter(product => product.id !== productId));
    };

    const removeAllFromCart = () => {
        setCart([]);
        localStorage.removeItem('cart');
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, removeAllFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
