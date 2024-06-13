import React from 'react';
import { useOrder } from '../Tools/OrderContext';
import BackButton from '../components/BackButton';
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
                <div className="download-box flex flex-col justify-center items-center h-1/2 w-3/4 max-w-[900px] bg-white p-10 mb-14 rounded-md shadow-lg">
                    <div className="box-border">
                        {order.length > 0 ? (
                            <div>
                                <div className="download-order flex flex-col justify-center items-center border-b text-center-sm space-y-4">
                                    <h3 className="order-complete text-3xl font-bold">Thank you for your order!</h3>
                                    <p className="download-order text-xl">You can download your order here:</p>
                                    <button className="text-3xl hover:text-blue-700 mt-4">
                                        <FontAwesomeIcon icon={faDownload} />
                                    </button>
                                </div>
                                <div className="order-details flex flex-col justify-center items-center text-center space-y-4 mt-8">
                                    <h2 className="order-details text-3xl font-bold">Order Details</h2>
                                    <p className="order-details text-xl">Order Number: 34998760</p>
                                    <div className="flex flex-wrap justify-center items-center text-center mt-5">
                                    <button className="bg-gray-700 hover:bg-gray-900 mb-2 text-white font-bold py-2 px-4 border-radius-5 rounded">
                                        View receipt
                                    </button>
                                </div>
                                </div>
                                <div className="order-products flex flex-wrap justify-center items-center text-center space-y-4 mt-8">
                                    {order.map((product, index) => (
                                        <div key={index} className="order-product bg-gray-100 p-4 rounded-lg w-full max-w-md mt-4">
                                            <img src={product.image} alt={product.title} className="w-30 h-30 mr-4" />
                                            <h3 className="text-lg font-semibold">{product.title}</h3>
                                            <p className="text-sm">Price: {product.price.toLocaleString()} Kr</p> {/* Prøv å få det horisontalt */}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className="order-empty text-center">
                                <h2 className="text-3xl font-bold">Oops!</h2>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderPage;
