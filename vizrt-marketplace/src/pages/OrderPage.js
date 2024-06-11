import React from "react";
import { useOrder } from "../Tools/OrderContext"; 
import BackButton from "../components/BackButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const OrderPage = () => {
    const { order } = useOrder();

    return (
        <div className="min-h-screen bg-viz-blue">
            <div className="p-6">
                <BackButton />
            </div>
            <div className="flex justify-center items-center">
                <div className="download-box flex flex-col justify-center items-center h-[500px] w-[80%] max-w-[900px] bg-white p-8 rounded-md shadow-lg">
                    <div className="box-border">
                        {order.length > 0 ? (
                            <>
                                <div className="download-order flex flex-col justify-center items-center text-center space-y-4">
                                    <h2 className="order-complete text-3xl font-bold">Thank you for your order!</h2>
                                    <p className="download-order text-xl">You can download your order here:</p>
                                    <button className="text-3xl hover:text-blue-700 mt-4">
                                        <FontAwesomeIcon icon={faDownload} />
                                    </button>
                                </div>
                                <div className="order-details flex flex-col justify-center items-center text-center space-y-4 mt-8">
                                    <h2 className="order-details text-3xl font-bold">Order Details</h2>
                                    <p className="order-details text-xl">Order Number: 34998760</p>
                                    {order.map((product, index) => (
                                        <div key={index} className="order-product bg-gray-100 p-4 rounded-lg w-full max-w-md mt-4">
                                            <img src={product.image} alt={product.title} className="w-12 h-12 mr-4" />
                                            <h3 className="text-lg font-semibold">{product.title}</h3>
                                            <p className="text-sm">Price: {product.price.toLocaleString()} Kr</p>
                                        </div>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <p className="text-xl">Nothing in your order.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderPage;
