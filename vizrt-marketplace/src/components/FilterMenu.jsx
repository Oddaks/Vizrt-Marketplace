import React from "react";

const FilterMenu = ({
  category,
  setCategory,
  verifiedUser,
  setVerifiedUser,
  rating,
  setRating,
  price,
  setPrice,
  color,
  setColor,
  filterProducts,
}) => {
  //filter menu toggles
  const toggleVerifiedUser = () => {
    setVerifiedUser((prevStatus) => (prevStatus === "true" ? "false" : "true"));
  };

  const toggleCategory = (value) => {
    setCategory(category === value ? "" : value);
  };

  const toggleColor = (value) => {
    setColor(color === value ? "" : value);
  };

  return (
    <div className="col-span-1 p-4 space-y-4">
      <div className="mb-4 flex items-center justify-center">
        <label className="mr-2 text-white text-lg">Verified User:</label>
        <div
          className="flex items-center relative border border-gray-300 rounded-full overflow-hidden w-24"
          onClick={toggleVerifiedUser}
        >
          <span
            className={`text-sm mr-2 cursor-pointer ${
              verifiedUser === "true"
                ? "text-green-500 font-bold"
                : "text-red-500"
            }`}
          >
            No
          </span>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-200 via-white to-gray-200" />
          <div className="absolute h-6 w-full flex items-center cursor-pointer">
            <div
              className="absolute h-5 w-5 bg-white rounded-full shadow-md transform duration-300 border border-gray-300"
              style={{
                left:
                  verifiedUser === "true" ? "calc(100% - 1.25rem)" : "0.125rem",
                transition: "left 0.2s ease-in-out",
              }}
            />
          </div>
          <span
            className={`text-sm ml-2 cursor-pointer ${
              verifiedUser === "false"
                ? "text-red-500 font-bold"
                : "text-green-500"
            }`}
          >
            Yes
          </span>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-extrabold text-orange-500 text-center">
          Format
        </h3>
        <div className="p-4 bg-viz-green border border-[#82AAB9] space-y-2">
          <label
            className={`block cursor-pointer ${
              category === "Overlays" ? "text-orange-500" : "text-white"
            }`}
            onClick={() => toggleCategory("Overlays")}
          >
            Overlays
          </label>
          <label
            className={`block cursor-pointer ${
              category === "Banners" ? "text-orange-500" : "text-white"
            }`}
            onClick={() => toggleCategory("Banners")}
          >
            Banners
          </label>
          <label
            className={`block cursor-pointer ${
              category === "Alerts" ? "text-orange-500" : "text-white"
            }`}
            onClick={() => toggleCategory("Alerts")}
          >
            Alerts
          </label>
          <label
            className={`block cursor-pointer ${
              category === "Backgrounds" ? "text-orange-500" : "text-white"
            }`}
            onClick={() => toggleCategory("Backgrounds")}
          >
            Backgrounds
          </label>
          <label
            className={`block cursor-pointer ${
              category === "Transitions" ? "text-orange-500" : "text-white"
            }`}
            onClick={() => toggleCategory("Transitions")}
          >
            Transitions
          </label>
          <label
            className={`block cursor-pointer ${
              category === "Bundle" ? "text-orange-500" : "text-white"
            }`}
            onClick={() => toggleCategory("Bundle")}
          >
            Bundle
          </label>
          <label
            className={`block cursor-pointer ${
              category === "Elements" ? "text-orange-500" : "text-white"
            }`}
            onClick={() => toggleCategory("Elements")}
          >
            Elements
          </label>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-extrabold text-orange-500 text-center">
          Color
        </h3>
        <div className="p-4 bg-viz-green border border-[#82AAB9] space-y-2">
          <label
            className={`block cursor-pointer ${
              color === "Red" ? "text-orange-500" : "text-white"
            }`}
            onClick={() => toggleColor("Red")}
          >
            Red
          </label>
          <label
            className={`block cursor-pointer ${
              color === "White" ? "text-orange-500" : "text-white"
            }`}
            onClick={() => toggleColor("White")}
          >
            White
          </label>
          <label
            className={`block cursor-pointer ${
              color === "Blue" ? "text-orange-500" : "text-white"
            }`}
            onClick={() => toggleColor("Blue")}
          >
            Blue
          </label>
          <label
            className={`block cursor-pointer ${
              color === "Black" ? "text-orange-500" : "text-white"
            }`}
            onClick={() => toggleColor("Black")}
          >
            Black
          </label>
          <label
            className={`block cursor-pointer ${
              color === "Multicolor" ? "text-orange-500" : "text-white"
            }`}
            onClick={() => toggleColor("Multicolor")}
          >
            Multicolor
          </label>
          <label
            className={`block cursor-pointer ${
              color === "Pastel" ? "text-orange-500" : "text-white"
            }`}
            onClick={() => toggleColor("Pastel")}
          >
            Pastel
          </label>
          <label
            className={`block cursor-pointer ${
              color === "Pink" ? "text-orange-500" : "text-white"
            }`}
            onClick={() => toggleColor("Pink")}
          >
            Pink
          </label>
          <label
            className={`block cursor-pointer ${
              color === "Purple" ? "text-orange-500" : "text-white"
            }`}
            onClick={() => toggleColor("Purple")}
          >
            Purple
          </label>
          <label
            className={`block cursor-pointer ${
              color === "Orange" ? "text-orange-500" : "text-white"
            }`}
            onClick={() => toggleColor("Orange")}
          >
            Orange
          </label>
          <label
            className={`block cursor-pointer ${
              color === "Neon" ? "text-orange-500" : "text-white"
            }`}
            onClick={() => toggleColor("Neon")}
          >
            Neon
          </label>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-extrabold text-orange-500 text-center">
          Price
        </h3>
        <div className="p-4 bg-viz-green border border-[#82AAB9] space-y-2">
          <select
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">All</option>
            <option value="0">0-999</option>
            <option value="1000">1000-1999</option>
            <option value="2000">2000-2999</option>
            <option value="3000">3000-3999</option>
            <option value="4000">4000-4999</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterMenu;
