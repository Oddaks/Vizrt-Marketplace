import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
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
    <div className="bg-viz-blue min-h-screen p-6 flex flex-col">
      <div className="max-w-7xl mx-auto p-4 rounded-lg flex h-full">
        {/* Left side with main main image and bundle images */}
        <div className="w-2/3 pr-4">
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
              ></BundleImages>
            </div>
          </div>
        </div>
        {/* Right side with vertical line and 3 sections */}
        <div className="w-1/3 pl-4 border-l border-red-600">
          <div className="flex flex-col h-full justify-between">
            <div className="flex-1 p-4 border-b-red-600">
              <p className="text-white"> Section 1</p>
            </div>
            <div className="flex-1 p-4 border-t border-red-600">
              <p className="text-white"> Section 2</p>
            </div>
            <div className="flex-1 p-4 border-t border-red-600">
              <p className="text-white">Section 3</p>
            </div>
          </div>
        </div>
      </div>
      {/* Linking to Checkout Cart page */}
      <div className="flex justify-end mt-4">
        <Link to="/CartCheckoutPage">
          <button className=" bg-viz-orange text-white text-1xl p-4 rounded flex items-center space-x-2 hover:bg-orange-600">
            <span>Add to Cart</span>
            <FontAwesomeIcon icon={faShoppingCart} />
          </button>
        </Link>
      </div>
    </div>
  );
};
export default ProductEditor;
