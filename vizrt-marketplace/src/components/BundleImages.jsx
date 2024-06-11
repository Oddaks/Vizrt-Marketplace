import React from "react";

const BundleImages = ({ images = [] }) => {
  return (
    <div className="flex justify-between items-center">
      {images.map((image, index) => (
        <div key={index} className="w-1/2 p-2">
          <img
            src={image}
            alt={`Bundle item ${index + 1}`}
            className="w-full rounded"
          ></img>
        </div>
      ))}
    </div>
  );
};

export default BundleImages;
