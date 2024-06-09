import React from 'react';

interface HorizontalScrollBarProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const HorizontalScrollBar: React.FC<HorizontalScrollBarProps> = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="flex items-center overflow-x-auto space-x-4 p-4 no-scrollbar">
      {categories.map(category => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`min-w-max p-4 rounded-lg shadow-md text-center ${selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-white text-black'}`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default HorizontalScrollBar;
