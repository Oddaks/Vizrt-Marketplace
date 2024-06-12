import React from "react";

const BundleImages = ({ images = [] }) => {
  return (
    <div className="flex flex-wrap justify-between items-center">
      {images.map((image, index) => (
        <div key={index} className="w-1/4 p-2 flex flex-col items-center">
          <img
            src={image}
            alt={`Bundle item ${index + 1}`}
            className="w-full"
          ></img>
          {/* Description below the image */}
          <div className=" bg-viz-orange py-2 mt-3 px-10">
            <p className="text-xs  text-white text-center">
              Image {index + 1}: Edit Here
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BundleImages;
