import React from 'react';

interface ItemProps {
  item: { name: string; price: number };
  onAdd: (item: { name: string; price: number }) => void;
}

const Item: React.FC<ItemProps> = ({ item, onAdd }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 m-2 flex flex-col items-center">
      <h3 className="text-black font-semibold mb-2">{item.name}</h3>
      <p className="text-gray-700 mb-4">${item.price}</p>
      <button
        className="bg-blue-600 text-lack rounded-lg px-4 py-2 hover:bg-blue-700"
        onClick={() => onAdd(item)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Item;
