import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SLIDER_SETTINGS, navigateToChooseScreen } from '../../constants/constants';

const StartingScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="absolute flex flex-col items-center justify-center h-screen w-screen bg-gray-900 overflow-hidden">
      <Slider {...SLIDER_SETTINGS} className="w-full h-full">
        <div className="flex justify-center items-center w-screen h-screen">
          <img src="/Pic1.jpg" alt="Slide 1" className="w-full h-full object-cover" />
        </div>
        <div className="flex justify-center items-center w-screen h-screen">
          <img src="/Pic2.jpg" alt="Slide 2" className="w-full h-full object-cover" />
        </div>
        <div className="flex justify-center items-center w-screen h-screen">
          <img src="/Pic3.jpg" alt="Slide 3" className="w-full h-full object-cover" />
        </div>
      </Slider>
      <button
        className="absolute bottom-5 left-1/2 transform -translate-x-1/2 px-6 py-3 text-lg font-bold text-white bg-blue-600 rounded hover:bg-blue-700 transition duration-300"
        onClick={() => navigateToChooseScreen(navigate)}
      >
        Start
      </button>
    </div>
  );
};

export default StartingScreen;
