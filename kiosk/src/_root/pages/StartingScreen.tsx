import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const StartingScreen: React.FC = () => {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,  // Enable infinite looping
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,  // Enable autoplay
    autoplaySpeed: 5000,  // Set to 5 seconds
    arrows: false,  // Hide arrows
  };

  const handleStart = () => {
    navigate('/choose');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-gray-900 overflow-hidden relative">
      <Slider {...settings}>
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
        className="absolute bottom-5 px-6 py-3 text-lg font-bold text-white bg-blue-600 rounded hover:bg-blue-700 transition duration-300"
        onClick={handleStart}
      >
        Start
      </button>
    </div>
  );
};

export default StartingScreen;
