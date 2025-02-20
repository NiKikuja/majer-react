// main.jsx
import styles from './main.module.css';
import kafelek0 from '../../assets/kafelek1.png';
import kafelek1 from '../../assets/kafelek2.png';
import kafelek2 from '../../assets/kafelek3.png';
import kafelek3 from '../../assets/kafelek4.png';
import kafelek4 from '../../assets/kafelek5.png';
import kafelek5 from '../../assets/kafelek6.png';

const offers = [kafelek0, kafelek1, kafelek2, kafelek3, kafelek4, kafelek5];

const Main = () => {
  return (
    <div>
      <h1 className={styles.heading}>Między innymi oferujemy:</h1>
      <div className={styles.offersContainer}>
        {offers.map((img, index) => (
          <div key={index} className={styles.offerCard}>
            <img src={img} alt={`Oferta ${index + 1}`} className={styles.offerImage} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;