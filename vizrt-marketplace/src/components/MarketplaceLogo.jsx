import React from "react";

const Logo = ()=>{
    return (
        <div className="grid place-items-center h-screen bg-viz-blue">
            <div className="text-center transform -translate-y-1/4">
                <h1 className="text-8xl mb-4 text-[#F0844E] p-4">Marketplace</h1>
                <button 
                className="px-6 py-2 text-white text-lg bg-gradient-to-r"
                >Enter Marketplace</button>
            </div>
        </div>
    );
};
export default Logo;