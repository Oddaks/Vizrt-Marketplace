import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart, faStar, faArrowCircleLeft, faArrowCircleRight,
  faFont, faUnderline, faAlignLeft, faAlignCenter, faAlignRight,
  faTextSlash, faTextWidth, faTextHeight, faRotate
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ColorSamples from "./ColorSamples";
import { useCart } from '../Tools/CartContext';


const ColorButton = ({ color, changeColor, text }) => {
  return (
    <button
      className={`mt-2 text-viz-blue font-bold bg-viz-orange hover:bg-orange-600 w-full py-2`}
      onClick={() => changeColor(color)}
    >
      {text}
    </button>
  );
};

const ProductEditor = ({ product }) => {
  const [showFontArrow, setShowFontArrow] = useState(true);
  const [showStyleArrow, setShowStyleArrow] = useState(true);
  const [showSizeArrow, setShowSizeArrow] = useState(true);
  const { cart, addToCart, removeFromCart } = useCart();


  const [frameColor, setFrameColor] = useState('border-green-500');
  const colors = ['border-pink-500', 'border-teal-300', 'border-viz-orange', 'border-yellow-300'];
  const buttonLabels = ["Overlay", "Banners", "Vizrt Orange", "Yellow Delight"];

  if (!product) {
    return <div>Loading...</div>;
  }

  const imageUrl = `/${product.image}`;
  const { title, description } = product;

  const changeColor = (newColor) => {
    setFrameColor(newColor);
  };

  const cycleColor = (direction) => {
    const currentIndex = colors.indexOf(frameColor);
    const nextIndex = (currentIndex + direction + colors.length) % colors.length;
    setFrameColor(colors[nextIndex]);
  };

  const options = [
    { value: 'Arial', label: 'Arial' },
    { value: 'Helvetica', label: 'Helvetica' },
    { value: 'Times New Roman', label: 'Times New Roman' },
    { value: 'Courier New', label: 'Courier New' },
    { value: 'Verdana', label: 'Verdana' },
  ];

  return (
    <div className="bg-viz-blue min-h-screen p-6">
      <div className="max-w-7xl mx-auto flex">
        {/* Left side */}
        <div className="w-2/3 pr-4 border-r border-white">
          <div className="grid grid-cols-6 grid-rows-4 gap-4 relative">
            <button className="absolute text-white left-20 top-1/2" onClick={() => cycleColor(-1)}>
              <FontAwesomeIcon icon={faArrowCircleLeft} size="2x" />
            </button>
            <div className={`col-span-4 col-start-2 row-span-3 ${frameColor} border-4 flex flex-col relative`}>
              <img src={imageUrl} alt={title} className="flex-grow" />
            </div>
            <button className="absolute text-white right-20 top-1/2" onClick={() => cycleColor(1)}>
              <FontAwesomeIcon icon={faArrowCircleRight} size="2x" />
            </button>
            <div className="col-span-4 col-start-2 row-start-4 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-3 place-items-start">
              {colors.map((color, index) => (
                <div key={index} className={`${color} p-1 flex flex-col border-2 ${color}`}>
                  <img src={imageUrl} alt={title} className="w-full h-auto" />
                  <ColorButton color={color} changeColor={changeColor} text={buttonLabels[index]} />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Right side */}
        <div className="w-1/3 pl-4 flex flex-col">
          <div className="flex-1 pb-4 border-b border-white">
            <p className="text-white font-bold">{title}</p>
            <p className="text-white">{description}</p>
            <span className="text-white text-xs font-bold">
              Reviews:
              <FontAwesomeIcon icon={faStar} />
            </span>
          </div>
          {/* Font section */}
          <div className="flex-1 p-4">
            <div className="text-edit flex justify-between items-center">
              <p className="text-white font-bold">Font</p>
            </div>
            <div className="text-dropdowns rounded-none text-base grid-cols-3 mt-4 flex justify-center items-center gap-2">
              <div className="dropdown-font mx-2 relative custom-arrow">
                <select
                  className="dropdown-font text-white rounded-sm text-base border border-radius-2 bg-viz-dark-blue p-2"
                  onFocus={() => setShowFontArrow(false)}
                  onBlur={() => setShowFontArrow(true)}
                >
                  {options.map(option => (
                    <option key={option.value} className="bg-viz-dark-blue" value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>
              <div className="dropdown-style mx-2 relative custom-arrow">
                <select
                  className="dropdown-style text-white rounded-sm text-base border border-radius-2 bg-viz-dark-blue p-2"
                  onFocus={() => setShowStyleArrow(false)}
                  onBlur={() => setShowStyleArrow(true)}
                >
                  <option className="bg-viz-dark-blue" value="Regular">Regular</option>
                  <option className="bg-viz-dark-blue" value="Bold">Bold</option>
                  <option className="bg-viz-dark-blue" value="Italic">Italic</option>
                  <option className="bg-viz-dark-blue" value="Bold Italic">Bold Italic</option>
                </select>
              </div>
              <div className="dropdown-size mx-2 relative custom-arrow">
                <select
                  className="dropdown-size text-white rounded-sm text-base border border-radius-2 bg-viz-dark-blue p-2"
                  onFocus={() => setShowSizeArrow(false)}
                  onBlur={() => setShowSizeArrow(true)}
                >
                  <option className="bg-viz-dark-blue" value="12">12</option>
                  <option className="bg-viz-dark-blue" value="14">14</option>
                  <option className="bg-viz-dark-blue" value="16">16</option>
                  <option className="bg-viz-dark-blue" value="18">18</option>
                  <option className="bg-viz-dark-blue" value="20">20</option>
                  <option className="bg-viz-dark-blue" value="22">22</option>
                  <option className="bg-viz-dark-blue" value="24">24</option>
                  <option className="bg-viz-dark-blue" value="26">26</option>
                  <option className="bg-viz-dark-blue" value="28">28</option>
                  <option className="bg-viz-dark-blue" value="30">30</option>
                  <option className="bg-viz-dark-blue" value="32">32</option>
                  <option className="bg-viz-dark-blue" value="34">34</option>
                  <option className="bg-viz-dark-blue" value="36">36</option>
                  <option className="bg-viz-dark-blue" value="38">38</option>
                  <option className="bg-viz-dark-blue" value="40">40</option>
                </select>
              </div>
            </div>
            <div className="mt-4 flex space-x-20">
              <span className="text-white flex items-center justify-center rounded-md px-2 py-1">
                <FontAwesomeIcon icon={faFont} />
              </span>
              <span className="text-white flex bg-viz-dark-blue items-center justify-center rounded-md px-2 py-1">
                <FontAwesomeIcon icon={faUnderline} />
              </span>
              <span className="text-white flex items-center justify-center rounded-md px-2 py-1">
                <FontAwesomeIcon icon={faTextSlash} />
              </span>
            </div>
            <div className="mt-2 flex space-x-20">
              <span className="text-white flex items-center justify-center rounded-md px-2 py-1">
                <FontAwesomeIcon icon={faRotate} />
              </span>
              <span className="text-white flex items-center justify-center rounded-md px-2 py-1">
                <FontAwesomeIcon icon={faTextWidth} />
              </span>
              <span className="text-white flex items-center justify-center rounded-md px-2 py-1">
                <FontAwesomeIcon icon={faTextHeight} />
              </span>
            </div>
            <div className="mt-2 flex space-x-20">
              <span className="text-white flex items-center justify-center rounded-md px-2 py-1">
                <FontAwesomeIcon icon={faAlignLeft} />
              </span>
              <span className="text-white flex items-center justify-center rounded-md px-2 py-1">
                <FontAwesomeIcon icon={faAlignCenter} />
              </span>
              <span className="text-white flex items-center justify-center rounded-md px-2 py-1">
                <FontAwesomeIcon icon={faAlignRight} />
              </span>
            </div>
          </div>
          <div className="border-b border-white pb-4"></div>
          {/* Color section */}
          <div className="flex-1 p-4">
            <p className="text-white font-bold">Colors</p>
            <p className="text-white">Select a color sample</p>
            <div className="flex justify-center items-center">
              <ColorSamples />
            </div>
          </div>
          {/* Checkout Cart link */}
          <div className="flex justify-center mt-4">
            <Link to="/CartCheckoutPage">
              <button className="bg-viz-orange text-white text-1xl p-4 rounded flex items-center space-x-2 hover:bg-orange-600" onClick={ addToCart(product) }>
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
