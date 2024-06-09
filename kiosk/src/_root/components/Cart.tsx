import React from 'react';

interface CartItem {
  name: string;
  quantity: number;
  price: number;
}

interface CartProps {
  cart: CartItem[];
  onDelete: (itemName: string) => void;
  onCancel: () => void;
  totalAmount: number;
  onPlaceOrder: () => void;
}

const Cart: React.FC<CartProps> = ({ cart, onDelete, onCancel, totalAmount, onPlaceOrder }) => {
  return (
    <div className="w-full p-6 bg-gray-200 overflow-y-auto relative">
      <h2 className="text-black font-bold mb-4 flex items-center">
        <img src="/Cart.jpg" className="w-15 h-12 object-cover mr-2" alt="Cart" />
        Your Cart
      </h2>
      <ul className="grid grid-cols-1 gap-4">
        {cart.map((cartItem) => (
          <li key={cartItem.name} className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between">
            <div className="flex justify-between items-center mb-2">
              <div className="text-black font-bold">{cartItem.name}</div>
            </div>
            <div className="text-gray-900 font-bold mt-2 flex justify-between items-center">
              <span className="font-semibold">{cartItem.quantity}</span> x ${Number(cartItem.price).toFixed(2)}
              <button
                className="ml-2 text-white bg-red-600 rounded-full px-3 py-0.3 hover:bg-red-700 transition duration-300"
                onClick={() => onDelete(cartItem.name)}
              >
                Delete
              </button>
            </div>
            <div className="text-gray-900 font-bold mt-2">
              Total: ${(cartItem.quantity * Number(cartItem.price)).toFixed(2)}
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4 text-black font-bold">Total: ${totalAmount.toFixed(2)}</div>
      {cart.length > 0 && (
        <button
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2 px-6 py-3 text-lg font-bold text-white bg-green-600 rounded hover:bg-green-700 transition duration-300"
          onClick={onPlaceOrder}
        >
          Place Order
        </button>
      )}
      <button
        className="absolute bottom-5 left-1/2 transform -translate-x-1/2 px-6 py-3 text-lg font-bold text-white bg-blue-600 rounded hover:bg-blue-700 transition duration-300"
        onClick={onCancel}
      >
        Cancel
      </button>
    </div>
  );
};

export default Cart;
