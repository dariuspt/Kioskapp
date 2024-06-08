import React from 'react';

interface PaymentProps {
  navigateTo: (screen: string) => void;
}

const Payment: React.FC<PaymentProps> = ({ navigateTo }) => {
  return (
    <div className="payment">
      <h1>Payment</h1>
      <p>Processing payment...</p>
      <button onClick={() => navigateTo('OrderConfirmation')}>Confirm Order</button>
      <button onClick={() => navigateTo('Cart')}>Cancel</button>
    </div>
  );
};

export default Payment;
