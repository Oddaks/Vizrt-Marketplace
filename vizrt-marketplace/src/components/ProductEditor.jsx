import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import BundleImages from "./BundleImages";

const ProductEditor = () => {
  //! Doing this for now, needs to be replaced with product card
  const product = {
    title: "Gamer Bundle",
    description:
      "This Gamer bundle includes overlays, banners and other assets for streamers.",
    image: "https://placehold.co/700x400", // Placeholder image link
  };

  const placeholderImages = [
    "https://placehold.co/300x200",
    "https://placehold.co/300x200",
    "https://placehold.co/300x200",
    "https://placehold.co/300x200",
  ];

  return (
    <div className="bg-viz-blue min-h-screen p-6 flex">
      <div className="max-w-7xl mx-auto flex w-full h-full ">
        {/* Left side with main main image and bundle images */}
        <div className="w-2/3 pr-4 border-r border-white">
          {/* Product image placeholder */}
          <div className="mb-4">
            <img
              src={product.image}
              alt="Product"
              className="object-cover rounded w-full h-auto"
            />
          </div>
          {/* Bundle images */}
          <div className="text-white font-bold mb-4">
            <p className="mt-4 p-3">Bundle Includes</p>
            <div className="flex space-x-4">
              <BundleImages
                images={placeholderImages}
                className="flex flex-col items-center"
              />
            </div>
          </div>
        </div>
        {/* Right side with vertical line and 3 sections */}
        <div className="w-1/3 pl-4 flex flex-col justify-between">
          <div className="flex-1 p-4 border-b border-white">
            <p className="text-white font-bold"> Gamer Bundle</p>
            <p className="text-white">
              This Gamer bundle it is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
            </p>
            <span className="text-white text-xs font-bold">
              Reviews:
              <FontAwesomeIcon icon={faStar} />
            </span>
          </div>
          <div className="flex-1 p-4 border-b border-white">
            <p className="text-white font-bold">Font</p>
          </div>
          <div className="flex-1 p-4">
            <p className="text-white font-bold">Colors</p>
            <p className="text-white">Select a color sample</p>
          </div>

          {/* Linking to Checkout Cart page */}
          <div className="flex justify-center mt-4">
            <Link to="/CartCheckoutPage">
              <button className=" bg-viz-orange text-white text-1xl p-4 rounded flex items-center space-x-2 hover:bg-orange-600">
                <span>Add to Cart</span>
                <FontAwesomeIcon icon={faShoppingCart} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductEditor;
