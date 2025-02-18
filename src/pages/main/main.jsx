import styles from './main.module.css'
import kafelek0 from '../../assets/kafelek1.png'
import kafelek1 from '../../assets/kafelek2.png'
import kafelek2 from '../../assets/kafelek3.png'
import kafelek3 from '../../assets/kafelek4.png'
import kafelek4 from '../../assets/kafelek5.png'
import kafelek5 from '../../assets/kafelek6.png'

const offers = [
  { title: "Strony internetowe", desc: "Tworzymy nowoczesne strony internetowe.", img: kafelek0 },
  { title: "Reklama online", desc: "Zwiększ swoją widoczność w internecie.", img: kafelek1 },
  { title: "Branding", desc: "Tworzymy profesjonalny wizerunek marki.", img: kafelek2 },
  { title: "SEO", desc: "Optymalizujemy strony pod kątem wyszukiwarek.", img: kafelek3 },
  { title: "E-commerce", desc: "Tworzymy sklepy internetowe.", img: kafelek4 },
  { title: "Grafika komputerowa", desc: "Projektujemy profesjonalne grafiki.", img: kafelek5 },
];

const Main = () => {
  return (
    <div className={styles.offersContainer}>
      {offers.map((offer, index) => (
        <div key={index} className={styles.offerCard}>
          <img src={offer.img} alt={offer.title} className={styles.offerImage} />
          <h3>{offer.title}</h3>
          <p>{offer.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Main;
