import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Imports the FontAwesomeIcon component
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'; // Imports FontAwesome Icon
import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <div className="grid place-items-center h-screen bg-viz-blue">
            {/*Marketplace + button*/}
            <div className="text-center transform -translate-y-1/6 mt-15">
                <h1 className="text-8xl mb-7 text-[#F0844E] p-4">Marketplace</h1>
                <Link to="/StorePage" className="px-8 py-2 text-white text-2xl bg-gradient-to-r rounded-md">
                    Enter Marketplace
                </Link>
            </div>

            {/* Service + community sections */}
            <div className="mt-1 flex justify-around items-center w-full pr-20 ">

                {/* Service section w Icon*/}
                <div className="flex-1 text-center text-[#F0844E] mb-10">
                    <div className="mb-7">
                        <FontAwesomeIcon icon={faUserCircle} size="8x"/>
                    </div>
                    <p>Industry-leading service,<br />customer satisfaction, and<br />software support</p>
                </div>

                {/* Community section */}
                <div className="flex-1 text-center">
                    <h1 className="text-3xl mb-1 text-[#F0844E] p-1">A Community-driven marketplace</h1>
                    <div className='text-white'>
                    <button className="mt-4 px-4 py-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-md">
                        Join the Community
                    </button>
                    </div>
                    <div className="mt-6 text-[#F0844E]">
                        <div className="flex justify-around">
                            <div className="text-center mx-2">
                                <p className="text-2xl">20 000+</p>
                                <p>Community Members</p>
                            </div>
                            <div className="text-center mx-2">
                                <p className="text-2xl">500 000+</p> 
                                <p>Uploaded Items</p>
                            </div>
                            <div className="text-center mx-2">
                                <p className="text-2xl">$150M</p>
                                <p>Earned by Creators</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Logo;