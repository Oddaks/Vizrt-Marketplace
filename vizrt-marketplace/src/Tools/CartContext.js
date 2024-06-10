import React, { createContext, useContext, useState, useEffect } from 'react';

//adding to and removing from local storage

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

//Defines a CartProvider component using Context, and initalizes its state with the cart items retrieved from localStorage or an empty array if there are none.
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
            const excistingProduct = prevCart.find(item => item.id === product.id);
            if(excistingProduct){
                return prevCart;
            } else{
                return [...prevCart, { ...product, quantity: 1}];
            } 
        });
    }

    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter(product => product.id !== productId));
    };

    const removeAllFromCart = ()=>{
        setCart([])
        localStorage.removeItem('cart')
    }
    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, removeAllFromCart }}>
            {children}
        </CartContext.Provider>
    );

};
