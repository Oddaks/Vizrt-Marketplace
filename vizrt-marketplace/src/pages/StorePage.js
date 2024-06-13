import React, { useEffect, useState } from 'react';
import FilterMenu from "../components/FilterMenu";
import productsArray from "../Tools/ProductArray.json";
import BackButton from "../components/BackButton";
import ProductCard from "../components/ProductCard";

const StorePage = () => {
    const [category, setCategory] = useState("");
    const [verifiedUser, setVerifiedUser] = useState("");
    const [rating, setRating] = useState("");
    const [price, setPrice] = useState("");
    const [color, setColor] = useState("");
    const [filteredProducts, setFilteredProducts] = useState(productsArray);

    const filterProducts = () => {
        const chosenProducts = productsArray.filter(product => {
            return (
                (category === "" || product.category.includes(category)) &&
                (verifiedUser === "" || product.verifiedUser === (verifiedUser === 'true')) &&
                (isNaN(parseInt(rating, 10)) || Math.floor(product.rating.rate) === parseInt(rating, 10)) &&
                (isNaN(parseInt(price, 10)) || (product.price >= parseInt(price, 10) && product.price < (parseInt(price, 10) + 1000))) &&
                (color === "" || product.color.includes(color))
            );
        });

        setFilteredProducts(chosenProducts);
    };

    const resetFilters = () => {
        setCategory("");
        setVerifiedUser("");
        setRating("");
        setPrice("");
        setColor("");
        filterProducts();
    };

    useEffect(() => {
        filterProducts();
    }, [category, verifiedUser, rating, price, color]);

    return (
        <div className="min-h-screen bg-viz-green">
            <div className='p-6'>
                <BackButton />
            </div>
            {/* top filter buttons*/}
            <div className="flex justify-center gap-4 mb-4">
                <button onClick={resetFilters} className="bg-gradient-to-r text-white font-bold py-2 px-6 ">Reset Filters</button>
                <button className="bg-gradient-to-r text-white font-bold py-2 px-6 ">Banners</button>
                <button className="bg-gradient-to-r text-white font-bold py-2 px-6 ">Backgrounds</button>
                <button className="bg-gradient-to-r text-white font-bold py-2 px-6 ">Transitions</button>
            </div>
            <div className=" grid grid-cols-4 gap-4 p-4">
                <FilterMenu
                    category={category} setCategory={setCategory}
                    verifiedUser={verifiedUser} setVerifiedUser={setVerifiedUser}
                    rating={rating} setRating={setRating}
                    price={price} setPrice={setPrice}
                    color={color} setColor={setColor}
                    filterProducts={filterProducts}
                />

                <section className="overflow-auto  p-2 auto-rows-min col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 place-items-start">
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </section>
            </div>
        </div>
    );
};

export default StorePage;
