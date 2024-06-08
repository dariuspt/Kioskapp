import React from 'react';

interface HomeProps {
  navigateTo: (screen: string) => void;
}

const Home: React.FC<HomeProps> = ({ navigateTo }) => {
  return (
    <div className="home">
      <h1>Welcome to Our Kiosk</h1>
      <button onClick={() => navigateTo('MenuCategories')}>Start Order</button>
    </div>
  );
};

export default Home;
