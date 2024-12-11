import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Carousel = () => {
  const items = [
    { id: 1, label: "Ready To Move", icon: "🏡" },
    { id: 2, label: "1 Year Old", icon: "📅" },
    { id: 3, label: "Unfurnished", icon: "🛏️" },
    { id: 4, label: "450 Sq ft", icon: "🌉" },
    { id: 5, label: "Floor 14/23" },
    { id: 6, label: "1 Bath", icon: "🚿" },
    { id: 7, label: "1 Balcony", icon: "🛏️" },

  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3;

  const handleLeftClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleRightClick = () => {
    if (currentIndex < items.length - itemsPerView) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const visibleItems = items.slice(currentIndex, currentIndex + itemsPerView);

  return (
    <div className="flex items-center ">
      {/* Left Button */}
      <button
        className="p-1 text-gray-500 hover:text-gray-700"
        onClick={handleLeftClick}
        disabled={currentIndex === 0}
      >
        <ChevronLeft size={24} className="hidden md:block" />
      </button>

      {/* Carousel Items */}
      <div className="flex ">
        {visibleItems.map((item) => (
          <div
            key={item.id}
            className="md:min-w-28 px-1 flex items-center justify-center rounded-lg text-gray-700 text-sm"
          >
            <div className="flex items-center justify-center gap-2">
            {item.icon}
            {item.label}
            </div>
          </div>
        ))}
      </div>

      {/* Right Button */}
      <button
        className="p-2 text-gray-500 hover:text-gray-700"
        onClick={handleRightClick}
        disabled={currentIndex >= items.length - itemsPerView}
      >
        <ChevronRight size={24} className="hidden md:block"  />
      </button>
    </div>
  );
};

export default Carousel;
