import React from 'react';
import { useNavigate } from 'react-router-dom';

const ChooseScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleTakeAway = () => {
    navigate('/home');
  };

  const handleInDoor = () => {
    navigate('/home');
  };

  const handleCancel = () => {
    navigate('/StartingScreen');
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-blue-100">
      <div className="flex flex-row space-x-6 mb-6">
        <div className="bg-white p-40 rounded-lg shadow-md text-center text-black">
          <h2 className="text-xl font-semibold mb-4">Take Away</h2>
          <button
            className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700"
            onClick={handleTakeAway}
          >
            Choose
          </button>
        </div>
        <div className="bg-white p-40 rounded-lg shadow-md text-center text-black">
          <h2 className="text-xl font-semibold mb-4">In Door</h2>
          <button
            className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700"
            onClick={handleInDoor}
          >
            Choose
          </button>
        </div>
      </div>
      <button
        className="absolute bottom-4 bg-red-600 text-white rounded-lg px-6 py-3 hover:bg-red-700 transition duration-300"
        onClick={handleCancel}
      >
        Cancel
      </button>
    </div>
  );
};

export default ChooseScreen;
