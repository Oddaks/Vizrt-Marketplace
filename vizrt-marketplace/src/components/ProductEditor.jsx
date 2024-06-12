import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faStar, faArrowCircleLeft, faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

//Adds the color button component
const ColorButton = ({ color, changeColor, text }) => {
  return (
    <button className={`mt-2 text-viz-blue font-bold bg-viz-orange hover:bg-orange-600 w-full py-2`}
      onClick={() => changeColor(color)}>
      {text}
    </button>
  );
};

const ProductEditor = ({ product }) => {
  //Makes a preset of colors you can rotate between. Not responsive code but works for display purposes
  const [frameColor, setFrameColor] = useState('border-green-500');
  const colors = ['border-pink-500', 'border-teal-300', 'border-viz-orange', 'border-yellow-300'];
  const buttonLabels = ["Overlay", "Banners", "Vizrt Orange", "Yellow Delight"];

  //async to make sure the api loads before the code
  if (!product) {
    return <div>Loading...</div>;
  }
  //handles showing image from api
  const imageUrl = `/${product.image}`;
  const { title, description } = product;

  const changeColor = (newColor) => {
    setFrameColor(newColor);
  };

  //function to change the frame color
  const cycleColor = (direction) => {
    const currentIndex = colors.indexOf(frameColor);
    const nextIndex = (currentIndex + direction + colors.length) % colors.length;
    setFrameColor(colors[nextIndex]);
  };

  return (

    <div >
      {/*parent div with title*/}
      <h3 className="col-start-2 col-span-4 text-2xl font-bold text-white">Bundle Includes</h3>
      <div className="bg-viz-blue min-h-screen p-6 flex">
        {/* left side of grid - biggest image and arrows*/}
        <div className="flex-auto grid grid-cols-6 grid-rows-4 gap-4 relative">
          {/* left arrow cycles negative through array index*/}
          <button className="absolute text-white left-20 top-1/2 "
            onClick={() => cycleColor(-1)}>
            <FontAwesomeIcon icon={faArrowCircleLeft} size="2x" />
          </button>

          <div className={`col-span-4 col-start-2 row-span-3 ${frameColor} border-4 flex flex-col`}>
            <img src={imageUrl} alt={title} className="flex-grow" />
          </div>
          {/* right arrow cycles positive through array index*/}

          <button className="absolute text-white right-20 top-1/2 "
            onClick={() => cycleColor(1)}>
            <FontAwesomeIcon icon={faArrowCircleRight} size="2x" />
          </button>

          {/* Parent wrapper for the four smaller divs under the main img*/}
          <div className="col-span-4 col-start-2 row-start-4 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-3 place-items-start">
            {/* button on divs linked to color index*/}
            {colors.map((color, index) => (
              <div key={index} className={`${color} p-1 flex flex-col border-2 ${color}`}>
                <img src={imageUrl} alt={title} className="w-full h-auto" />
                <ColorButton color={color} changeColor={changeColor} text={buttonLabels[index]} />
              </div>
            ))}
          </div>
        </div>
        {/* Right side with product details */}
        <div className="bg-gray-600 w-1/4 pl-4 flex flex-col justify-between">
          <div className="flex-1 p-4 border-b border-white">
            <p className="text-white font-bold">{title}</p>
            <p className="text-white">{description}</p>
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

          {/* Checkout Cart link */}
          <div className="flex justify-center mt-4">
            <Link to="/CartCheckoutPage">
              <button className="bg-viz-orange text-white text-1xl p-4 rounded flex items-center space-x-2 hover:bg-orange-600">
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