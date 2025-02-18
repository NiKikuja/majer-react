import { useState, useEffect } from 'react';
import styles from './hero.module.css';

// Importowanie obrazów bezpośrednio
import slider1 from '../../assets/slider 1.jpg';
import slider2 from '../../assets/slider 2.jpg';
import slider3 from '../../assets/slider 3.jpg';
import slider4 from '../../assets/slider 4.jpg';
import slider5 from '../../assets/slider 5.jpg';

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [slider1, slider2, slider3, slider4, slider5]; // Tablica z zaimportowanymi obrazami

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Zmiana co 2,5 sekundy

    return () => clearInterval(interval); // Czyszczenie interwału przy unmount
  }, [images.length]);

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slider} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className={styles.slide}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;
