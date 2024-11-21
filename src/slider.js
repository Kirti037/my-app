import React, { useState, useEffect } from 'react';
import "./App.css";

const images = [
  'https://e1.pxfuel.com/desktop-wallpaper/558/865/desktop-wallpaper-bgmi-live-stream-thumbnails-for-youtube-bgmi-thumbnail.jpg',
  'https://e1.pxfuel.com/desktop-wallpaper/44/249/desktop-wallpaper-stream-thumbnail-bgmi-bgmi-pubg.jpg',
  'https://e1.pxfuel.com/desktop-wallpaper/374/31/desktop-wallpaper-bgmi-thumbnail-bgmi.jpg',
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <div className="slider-container">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="slide"
      />
    </div>
  );
};

export default Slider;
