import React from 'react';

interface ItemDetailsProps {
  item: { id: number; name: string; price: number };
  addToCart: (item: { id: number; name: string; price: number }) => void;
  navigateTo: (screen: string) => void;
}

const ItemDetails: React.FC<ItemDetailsProps> = ({ item, addToCart, navigateTo }) => {
  return (
    <div className="item-details">
      <h1>{item.name}</h1>
      <p>Price: ${item.price}</p>
      <button onClick={() => addToCart(item)}>Add to Cart</button>
      <button onClick={() => navigateTo('MenuCategories')}>Cancel</button>
    </div>
    
  );
};

export default ItemDetails;
