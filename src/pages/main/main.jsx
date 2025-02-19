import styles from './main.module.css'
import kafelek0 from '../../assets/kafelek1.png'
import kafelek1 from '../../assets/kafelek2.png'
import kafelek2 from '../../assets/kafelek3.png'
import kafelek3 from '../../assets/kafelek4.png'
import kafelek4 from '../../assets/kafelek5.png'
import kafelek5 from '../../assets/kafelek6.png'

const offers = [
  { title: "Usługi graficzne ", desc: "Tworzymy grafiki komputerowe do twoich potrzeb ", img: kafelek0 },
  { title: "Odzież reklamowa", desc: "Stworzymy ubrania dla twojej firmy ", img: kafelek1 },
  { title: "Gadżety reklamowe", desc: "Z nami stworzysz swoje własne oryginalne gadżety", img: kafelek2 },
  { title: "Wizytówki ", desc: "Zaprojektujemy i wydrukujemy twoją wizytówkę", img: kafelek3 },
  { title: "Banery reklamowe ", desc: "Stwórz z nami swój własny baner reklamowy", img: kafelek4 },
  { title: "Ulotki", desc: "Stworzymy twoje własne ulotki ", img: kafelek5 },
];

const Main = () => {
  return (
    <div>
      <h1 className={styles.heading}>Nasza Oferta</h1>
      <div className={styles.offersContainer}>
        {offers.map((offer, index) => (
          <div key={index} className={styles.offerCard}>
            <img src={offer.img} alt={offer.title} className={styles.offerImage} />
            <h3>{offer.title}</h3>
            <p>{offer.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
