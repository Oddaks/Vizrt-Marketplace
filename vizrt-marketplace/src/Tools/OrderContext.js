import React, { createContext, useContext, useState, useEffect } from 'react';

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
    const [order, setOrder] = useState(() => {
        const savedOrder = JSON.parse(localStorage.getItem('order'));
        return savedOrder || [];
    });

    useEffect(() => {
        localStorage.setItem('order', JSON.stringify(order));
    }, [order]);

    const addOrder = (cart) => {
        setOrder(cart);
    };

    return (
        <OrderContext.Provider value={{ order, addOrder }}>
            {children}
        </OrderContext.Provider>
    );
};

export const useOrder = () => {
    const context = useContext(OrderContext);
    if (context === undefined) {
        throw new Error('useOrder must be used within an OrderProvider');
    }
    return context;
};

export default OrderContext;
