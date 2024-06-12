import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BackButton from "../components/BackButton";
import productsArray from '../Tools/ProductArray.json';
import ProductEditor from "../components/ProductEditor";
import ProductInfo from '../components/ProductInfo';

const ProductPage = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = () => {
            const productData = productsArray.find(p => p.id === parseInt(productId));
            setProduct(productData);
        };

        fetchProduct();
    }, [productId]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-viz-green">
            <div className='p-6'>
                <BackButton />
                <ProductEditor product={product} onProductUpdate={(updatedProduct) => setProduct(updatedProduct)} />
            </div>
            <div className="grid grid-cols-1 p-4">
                <ProductInfo product={product} />

            </div>
        </div>
    );
};

export default ProductPage;