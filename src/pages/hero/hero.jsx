import { useState, useEffect } from 'react';
import styles from './hero.module.css';

// Importowanie obrazów
import slider1 from '../../assets/slider 1.jpg';
import slider2 from '../../assets/slider 2.jpg';
import slider3 from '../../assets/slider 3.jpg';
import slider4 from '../../assets/slider 4.jpg';
import slider5 from '../../assets/slider 5.jpg';

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [slider1, slider2, slider3, slider4, slider5];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className={styles.sliderContainer}>
      <button className={styles.prev} onClick={prevSlide}>&#10094;</button>
      <div className={styles.slider} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className={styles.slide}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className={styles.next} onClick={nextSlide}>&#10095;</button>
    </div>
  );
}

export default Hero;
