import { NavigateFunction } from 'react-router-dom';

// Slider settings for StartingScreen
export const SLIDER_SETTINGS = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
};

// Navigation handlers
export const navigateToHome = (navigate: NavigateFunction) => {
  navigate('/home');
};

export const navigateToStartingScreen = (navigate: NavigateFunction) => {
  navigate('/StartingScreen');
};

export const navigateToChooseScreen = (navigate: NavigateFunction) => {
  navigate('/choose');
};

// Fetch items from items.json
export const fetchItems = async () => {
  const response = await fetch('/items.json');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return await response.json();
};

// Calculate total amount
export const calculateTotalAmount = (cart: { name: string; quantity: number; price: number }[]) => {
  return cart.reduce((total, item) => total + item.quantity * item.price, 0);
};

// Filter items by search and category
export const filterItems = (
  items: { name: string; price: number; category: string }[],
  search: string,
  selectedCategory: string
) => {
  return items.filter((item) =>
    (selectedCategory === 'All' || item.category === selectedCategory) &&
    item.name.toLowerCase().includes(search.toLowerCase())
  );
};
