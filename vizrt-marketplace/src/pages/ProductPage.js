import React, { useEffect, useState } from 'react';
import BackButton from "../components/BackButton";
import { useParams } from 'react-router-dom';
import ProductDetail from '../components/ProductInfo'; 
import productsArray from '../Tools/ProductArray.json'; 
import ProductEditor from "../components/ProductEditor";

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
  
  const ProductPage = (product) => {
    const [selectedProduct, setSelectedProduct] = useState(product[0]);

    const handleProductClick = (product) => {
        setSelectedProduct(product)

    return (
        <div className="min-h-screen bg-viz-green">
            <div className='p-6'>
                <BackButton />
                <ProductEditor />

            </div>
            <div className="grid grid-cols-1 p-4">
                <ProductDetail product={product} />
            </div>
            <div className="color">
                <p className="select-color b">
                    Select Color
                </p>
            </div>
        </div>
    );
};

export default ProductPage;
