import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faStar, faFont, faUnderline, faAlignLeft,
        faAlignCenter, faAlignRight, faIndent, faOutdent,
        faTextSlash, faTextWidth, faTextHeight,
        faRotate,
        faMagicWandSparkles,
        faPenFancy,
        faBrush, faSliders} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import BundleImages from "./BundleImages";
import ColorButtons from './ColorButtons';

const options = [
  { value: 'Arial', label: 'Arial' },
  { value: 'Helvetica', label: 'Helvetica' },
  { value: 'Times New Roman', label: 'Times New Roman' },
  { value: 'Courier New', label: 'Courier New' },
  { value: 'Verdana', label: 'Verdana' },
];

const ProductEditor = () => {
  const [showFontArrow, setShowFontArrow] = useState(true);
  const [showStyleArrow, setShowStyleArrow] = useState(true);
  const [showSizeArrow, setShowSizeArrow] = useState(true);

  const product = {
    title: "Gamer Bundle",
    description: "This Gamer bundle includes overlays, banners and other assets for streamers.",
    image: "https://placehold.co/700x400",
  };

  const placeholderImages = [
    "https://placehold.co/300x200",
    "https://placehold.co/300x200",
    "https://placehold.co/300x200",
  ];

return (
    <div className="bg-viz-blue min-h-screen p-6 flex">
        <div className="max-w-7xl mx-auto flex w-full h-full">
            <div className="w-2/3 pr-4 border-r border-white">
                <div className="mb-4">
                    <img src={product.image} alt="Product" className="object-cover rounded w-full h-auto" />
                </div>
                <div className="text-white font-bold mb-4">
                    <p className="mt-4 p-3">Bundle Includes</p>
                    <div className="flex space-x-4">
                        <BundleImages images={placeholderImages} className="flex flex-col items-center" />
                    </div>
                </div>
            </div>
            <div className="w-1/3 pl-4 flex flex-col justify-between">
                <div className="flex-1 p-4 border-b border-white">
                    <p className="text-white font-bold">Gamer Bundle</p>
                    <p className="text-white">
                        This Gamer bundle it is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                    </p>
                    <span className="text-white text-xs font-bold">
                        Reviews: <FontAwesomeIcon icon={faStar} />
                    </span>
                </div>
                <div className="flex-1 p-4 border-b border-white">
                    <div className="text-edit flex justify-between items-center">
                        <p className="text-white font-bold">Font</p>
                        <p className="text-white">Layer</p>
                        <p className="text-white">Fill</p>
                        <p className="text-white">Stroke</p>
                        <p className="text-white">Effects</p>
                        <p className="text-white">Design</p>
                        <p className="text-white">Export</p>
                    </div>
                    <div className="text-dropdowns rounded-none text-base grid-cols-3 mt-4 flex justify-center items-center gap-">
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
                                onBlur={() => setShowStyleArrow(true)}>
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
                    <div className="flex space-x-2 p-4 mt-">
                        <span className="text-white flex items-center justify-center  px-2 py-">
                            <FontAwesomeIcon icon={faFont} />
                        </span>
                            <span className="text-white flex bg-viz-dark-blue items-center justify-center rounded-md px-2 py-1">
                            <FontAwesomeIcon icon={faUnderline} />      
                            </span>
                            <span className="text-white flex items-center justify-center rounded-md px-2 py-1">
                            <FontAwesomeIcon icon={faTextSlash} />
                            </span>
                            <div className="flex justify-end">
                            <div className="right-side flex ml-9 space-x-1">
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
                    </div>
                    </div>
                    <div className="flex space-x-2 p-4 ">
                        <span className="text-white flex items-center justify-center rounded-md px-2 py-1">
                            <FontAwesomeIcon icon={faAlignLeft} />
                        </span>
                        <span className="text-white flex items-center justify-center rounded-md px-2 py-1">
                            <FontAwesomeIcon icon={faAlignCenter} />
                        </span>
                        <span className="text-white flex items-center justify-center rounded-md px-2 py-1">
                            <FontAwesomeIcon icon={faAlignRight} />
                        </span>
                        <div className="flex justify-end">
                        <div className="right-side flex ml-10 space-x-1">
                            <span className="text-white flex items-center justify-center rounded-md px-2 py-1">
                            <FontAwesomeIcon icon={faMagicWandSparkles} />
                            </span>
                            <span className="text-white flex items-center justify-center rounded-md px-2 py-1">
                            <FontAwesomeIcon icon={faPenFancy} />
                            </span>
                            <span className="text-white flex items-center justify-center rounded-md px-2 py-1">
                            <FontAwesomeIcon icon={faBrush} />
                            </span>
                        </div>
                        </div>
                    </div>
                    <div className="flex space-x-2 p-4 mt-2">
                        <span className="text-white flex items-center justify-center rounded-md px-2 py-1">
                            <FontAwesomeIcon icon={faIndent} />
                        </span>
                        <span className="text-white flex items-center justify-center rounded-md px-2 py-1">
                            <FontAwesomeIcon icon={faOutdent} />
                        </span>
                        <div className="flex justify-end">
                        <div className="right-side flex ml-20 space-x-1">
                            <span className="text-white flex items-center justify-center rounded-md px-2 py-1">
                            <FontAwesomeIcon icon={faSliders} />
                            </span>
                            <p className="text-white font-bold flex items-center justify-center ml-6 rounded-md px-2 py-1">
                            |A| 0%
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 p-4">
                    <p className="text-white font-bold">Colors</p>
                    <p className="text-white">Select a color sample</p>
                    <div className="flex justify-center items-center">
                        <ColorButtons />
                    </div>
                </div>
                <div className="flex justify-center mb-3">
                    <Link to="/CartCheckoutPage">
                        <button className="bg-viz-orange text-white text-1xl p-4 rounded flex items-center space-x-2 hover:bg-orange-600">
                            <span>Add to Cart</span>
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </button>
                    </Link>
                </div>
            </div>
            <div className="w-1/3 pl-4 flex flex-col justify-between">
            </div>
        </div>
    </div>
);
};

export default ProductEditor;
