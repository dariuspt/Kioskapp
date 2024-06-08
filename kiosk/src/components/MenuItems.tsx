import React from 'react';

interface MenuItemsProps {
  category: string;
  navigateTo: (screen: string, data?: any) => void;
}

interface MenuItem {
  id: number;
  name: string;
  price: number;
}

const MenuItems: React.FC<MenuItemsProps> = ({ category, navigateTo }) => {
  const items: MenuItem[] = [
    { id: 1, name: 'Big Mac', price: 5.99 },
    { id: 2, name: 'Cheeseburger', price: 2.99 },
  ];

  return (
    <div className="menu-items">
      <h1>{category}</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <button onClick={() => navigateTo('ItemDetails', item)}>
              {item.name} - ${item.price}
            </button>
          </li>
        ))}
      </ul>
      <button onClick={() => navigateTo('MenuCategories')}>Back</button>
    </div>
  );
};

export default MenuItems;
