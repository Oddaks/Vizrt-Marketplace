// https://tailwindcss.com/docs/background-color, (12.06.2024, HJ)
import React from 'react';
// Array of colors to be displayed
const colors = [
    'bg-white', 'bg-gray-300', 'bg-black', 'bg-red-600', 
    'bg-orange-500', 'bg-yellow-400', 'bg-lime-800', 'bg-green-400', 
    'bg-green-300', 'bg-sky-800', 'bg-sky-600', 'bg-sky-300',
    'bg-indigo-800', 'bg-indigo-600', 'bg-indigo-400', 'bg-violet-800',
    'bg-violet-600', 'bg-violet-400', 'bg-fuchsia-800', 'bg-fuchsia-600',
    'bg-fuchsia-400', 'bg-pink-800', 'bg-pink-600', 'bg-pink-400'
];

const ColorSamples = () => {
  const handleColorClick = (color) => {
    console.log(`Color clicked: ${color}`);
    // Functionality to change color of the product could be added here in the future
  };

  // Second array for grouping colors 3 by 3
  const colorGroups = [];
  for (let i = 0; i < colors.length; i += 3) {
    colorGroups.push(colors.slice(i, i + 3));
  }

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
    {colorGroups.map((group, index) => (
        <div key={index} className="flex justify-center"> 
        {/* Ensures that the colors are displayed in a row */}
            <div className="flex justify-between">
                {group.map((color, colorIndex) => (
                    <div
                        key={colorIndex}
                        className={`h-7 w-7 ${color} rounded-full cursor-pointer `}
                        // Left in onClick event to handle color selection for future possibilites
                        onClick={() => handleColorClick(color)}
                    />
                ))}
            </div>
        </div>
    ))}
    </div>
  );
};

export default ColorSamples;
