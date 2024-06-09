import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import Cart from '../components/Cart';
import Item from '../components/Item';
import HorizontalScrollBar from '../components/HorizontalScrollBar';
import AddToCartModal from '../components/AddToCartModal';
import DeleteItemModal from '../components/DeleteItemModal';
import { 
  fetchItems, 
  calculateTotalAmount, 
  filterItems, 
  navigateToStartingScreen 
} from '../../constants/constants';
import '../../global.css';  // Ensure this import path to global.css

interface Item {
  name: string;
  price: number;
  category: string;
}

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState<{ name: string; quantity: number; price: number }[]>([]);
  const [items, setItems] = useState<Item[]>([]);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<string | null>(null);

  useEffect(() => {
    fetchItems()
      .then(data => setItems(data))
      .catch(error => console.error('Error fetching items:', error));
  }, []);

  const handleAddItemToCart = () => {
    if (selectedItem) {
      const existingItem = cart.find((cartItem) => cartItem.name === selectedItem.name);
      if (existingItem) {
        setCart(cart.map((cartItem) =>
          cartItem.name === selectedItem.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        ));
      } else {
        setCart([...cart, { ...selectedItem, quantity: 1 }]);
      }
      setShowAddModal(false); // Close the modal after adding the item
    }
  };

  const handleDeleteItem = () => {
    setCart(cart.filter((cartItem) => cartItem.name !== itemToDelete));
    setShowDeleteModal(false);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handlePlaceOrder = () => {
    // Placeholder for order placement logic
    alert('Order placed successfully!');
  };

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
  };

  const categories = ['All', ...new Set(items.map(item => item.category))];

  const filteredItems = filterItems(items, search, selectedCategory);

  const totalAmount = calculateTotalAmount(cart);

  return (
    <div className="grid grid-rows-5 h-screen w-screen p-6 bg-gray-100">
      <div className="row-span-1 grid grid-cols-4">
        <div className="col-span-3">
          <HorizontalScrollBar
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={handleSelectCategory}
          />
        </div>
        <div className="col-span-1 flex items-center p-4">
          <SearchBar search={search} onSearchChange={handleSearchChange} />
        </div>
      </div>
      <div className="row-span-4 grid grid-cols-4 gap-4">
        <div className="col-span-3 p-6 bg-gray-100 overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredItems.map((item) => (
              <Item key={item.name} item={item} onAdd={() => { setSelectedItem(item); setShowAddModal(true); }} />
            ))}
          </div>
        </div>
        <Cart
          cart={cart}
          onDelete={(name) => { setItemToDelete(name); setShowDeleteModal(true); }}
          onCancel={() => navigateToStartingScreen(navigate)}
          totalAmount={totalAmount}
          onPlaceOrder={handlePlaceOrder}
        />
      </div>

      {showAddModal && selectedItem && (
        <AddToCartModal
          item={selectedItem}
          onConfirm={handleAddItemToCart}
          onCancel={() => setShowAddModal(false)}
        />
      )}

      {showDeleteModal && itemToDelete && (
        <DeleteItemModal
          itemName={itemToDelete}
          onConfirm={handleDeleteItem}
          onCancel={() => setShowDeleteModal(false)}
        />
      )}
    </div>
  );
};

export default Home;
