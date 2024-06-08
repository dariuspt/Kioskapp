import React from 'react';

interface MenuCategoriesProps {
  navigateTo: (screen: string, data?: any) => void;
}

const MenuCategories: React.FC<MenuCategoriesProps> = ({ navigateTo }) => {
  const categories = ['Burgers', 'Drinks', 'Sides'];

  return (
    <div className="menu-categories">
      <h1>Menu Categories</h1>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <button onClick={() => navigateTo('MenuItems', category)}>{category}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuCategories;
