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
        const categoryChoice = category;
        const verifiedUserChoice = verifiedUser === 'true';
        const ratingChoice = parseInt(rating, 10);
        const priceChoice = parseInt(price, 10);
        const colorChoice = color;

        const chosenProducts = productsArray.filter(product => {
            return (
                (categoryChoice === "" || product.category.includes(categoryChoice)) &&
                (verifiedUser === "" || product.verifiedUser === verifiedUserChoice) &&
                (isNaN(ratingChoice) || Math.floor(product.rating.rate) === ratingChoice) &&
                (isNaN(priceChoice) || (product.price >= priceChoice && product.price < (priceChoice + 1000))) &&
                (colorChoice === "" || product.color.includes(colorChoice))
            );
        });

        setFilteredProducts(chosenProducts);
    };

    useEffect(() => {
        filterProducts();
    }, [category, verifiedUser, rating, price, color]);

    return (
        <div className="min-h-screen bg-viz-green">
            <div className='p-6'>
                <BackButton />
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
                <section className=" overflow-auto bg-blue-500 p-2 auto-rows-min col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 place-items-start">                    
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </section>
            </div>
        </div>
    );
};

export default StorePage;
