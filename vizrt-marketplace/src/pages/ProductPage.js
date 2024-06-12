import React, { useEffect, useState } from 'react';
import BackButton from "../components/BackButton";
import ProductEditor from "../components/ProductEditor";
import BundleImages from "../components/BundleImages";

const ProductPage = (product) => {
    const [selectedProduct, setSelectedProduct] = useState(product[0]);

    const handleProductClick = (product) => {
        setSelectedProduct(product)
    }
    return (
        <div className="min-h-screen bg-viz-green">
            <div className="bg-viz-blue">
                {/* Create space on below back arrow */}
                <div className='p-6'>
                    <BackButton />
                    <ProductEditor />
                    <BundleImages />
                </div>
            </div>
            );
};

            export default ProductPage;

            )
}
            export default ProductPage;