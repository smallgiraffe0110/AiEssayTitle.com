"use client";
import { useState } from "react";

type FeatureBoxProps = {
  title: string;
  description: string;
  icon: string;
};

const FeatureBox: React.FC<FeatureBoxProps> = ({ title, description, icon}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
    className="feature-box bg-gray-100 p-4 rounded-xl shadow-md max-w-3xl my-4 group hover:bg-gray-200 flex flex-col cursor-pointer"
    onClick={toggleAnswer}
  >
    <div className="flex w-full items-center"> {/* Flex container for title and button */}
      <i className={`${icon} text-xl text-gray-700 mr-2`} />
      <h3 className="text-lg font-semibold flex-grow">{title}</h3>
      <button
        onClick={toggleAnswer}
        className={`ml-auto text-gray-300 group-hover:text-gray-500 bg-opacity-100 transition-all duration-300 ${isOpen ? "rotate-[-180deg]" : ""}`}
        aria-label="Toggle answer"
      >
        <i className="fas fa-chevron-down"></i> {/* Down arrow icon */}
      </button>
    </div>

    {/* Description starts on a new line */}
    <div
      className={`transition-all duration-300 ease-in-out ${
        isOpen ? "max-h-96" : "max-h-0"
      } overflow-hidden`} // Smooth height transition for the answer
    >
      {isOpen && (
        <p className="text-sm text-gray-600 mt-2 transition-all duration-300 ease-in-out">
          {description}
        </p>
      )}
    </div>
  </div>
);
};
    
export default FeatureBox;
