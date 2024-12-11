import React, { useState } from "react";

interface SliderProps {
  onValueChange: (value: number) => void;
}

const Slider: React.FC<SliderProps> = ({ onValueChange }) => {
  const [value, setValue] = useState(1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setValue(newValue);
    onValueChange(newValue); // Notify the parent of the new value
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-4">
        <label htmlFor="unit-slider" className="block text-lg font-medium text-gray-700">
          {value === 1 ? `${value} Title` : `${value} Titles`}
        </label>
      </div>

      <input
        id="unit-slider"
        type="range"
        min="1"
        max="10"
        value={value}
        onChange={handleChange}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-400"
        style={{
          accentColor: value === 1 ? "rgb(79,70,229)" : "rgb(129,140,248)",
        }}
      />

      <div className="flex justify-between text-sm text-gray-500 mt-2"></div>
    </div>
  );
};

export default Slider;
