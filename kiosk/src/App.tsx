import React, { useState } from 'react';
import Home from './components/Home';
import MenuCategories from './components/MenuCategories';
import MenuItems from './components/MenuItems';
import ItemDetails from './components/ItemDetails';
import Cart from './components/Cart';
import Payment from './components/Payment';
import OrderConfirmation from './components/OrderConfirmation';

interface Item {
  id: number;
  name: string;
  price: number;
}

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<string>('Home');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [cart, setCart] = useState<Item[]>([]);

  const navigateTo = (screen: string, data?: any) => {
    switch (screen) {
      case 'MenuCategories':
        setCurrentScreen('MenuCategories');
        break;
      case 'MenuItems':
        setSelectedCategory(data);
        setCurrentScreen('MenuItems');
        break;
      case 'ItemDetails':
        setSelectedItem(data);
        setCurrentScreen('ItemDetails');
        break;
      case 'Cart':
        setCurrentScreen('Cart');
        break;
      case 'Payment':
        setCurrentScreen('Payment');
        break;
      case 'OrderConfirmation':
        setCurrentScreen('OrderConfirmation');
        break;
      default:
        setCurrentScreen('Home');
    }
  };

  const addToCart = (item: Item) => {
    setCart([...cart, item]);
    navigateTo('MenuCategories');
  };

  const removeFromCart = (itemId: number) => {
    setCart(cart.filter(item => item.id !== itemId));
  };
  

  return (
    <div className="App">
      <div className="left-section">
      <Cart cartItems={cart} removeFromCart={removeFromCart} navigateTo={navigateTo} />
      </div>
      <div className="right-section">
        {currentScreen === 'Home' && <Home navigateTo={navigateTo} />}
        {currentScreen === 'MenuCategories' && <MenuCategories navigateTo={navigateTo} />}
        {currentScreen === 'MenuItems' && selectedCategory && <MenuItems category={selectedCategory} navigateTo={navigateTo} />}
        {currentScreen === 'ItemDetails' && selectedItem && <ItemDetails item={selectedItem} addToCart={addToCart} navigateTo={navigateTo} />}
        {currentScreen === 'Cart' && <Cart cartItems={cart} removeFromCart={removeFromCart} navigateTo={navigateTo} />}
        {currentScreen === 'Payment' && <Payment navigateTo={navigateTo} />}
        {currentScreen === 'OrderConfirmation' && <OrderConfirmation />}
      </div>
    </div>
  );
};

export default App;
