import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import RatingStar from "./RatingStar";
import { Link } from "react-router-dom";

const ProductEditor = ({ product }) => {
  product = {
    title: "Gamer Bundle",
    description:
      "This Gamer bundle includes overlays, banners and other assets for streamers.",
    reviews: 15000,
    likes: 65000,
    color: "white",
    image: "https://placehold.co/600x400", // Placeholder image link
  };

  return (
    <div className="bg-viz-blue min-h-screen p-6">
      <div className="max-w-7xl mx-auto p-4 rounded-lg"></div>

      <div className="flex mt-4">
        {/* Product image placeholder */}
        <div className="flex-shrink-0">
          <img
            src={product.image}
            alt="Product"
            className="w-64 h-64 object-cover rounded"
          ></img>
        </div>
      </div>

      {/* Linking to Checkout Cart page */}
      <div className="flex justify-end">
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
