import React from 'react';

interface CartProps {
  cartItems: { id: number; name: string; price: number }[];
  navigateTo: (screen: string) => void;
  removeFromCart: (id: number) => void;
}

const Cart: React.FC<CartProps> = ({ cartItems, navigateTo, removeFromCart }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id} className="d-flex justify-content-between align-items-center">
            <span>{item.name} : ${(item.price).toFixed(2)}</span>
            <button onClick={() => removeFromCart(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <p>Total: ${total.toFixed(2)}</p>
      <button onClick={() => navigateTo('Payment')}>Proceed to Payment</button>
      <button onClick={() => navigateTo('MenuCategories')}>Add more</button>
    </div>
  );
};

export default Cart;
