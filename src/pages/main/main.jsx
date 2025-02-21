import { Link } from "react-router-dom";
import styles from "./main.module.css";
import kafelek0 from "../../assets/kafelek1.png";
import kafelek1 from "../../assets/kafelek2.png";
import kafelek2 from "../../assets/kafelek3.png";
import kafelek3 from "../../assets/kafelek4.png";
import kafelek4 from "../../assets/kafelek5.png";
import kafelek5 from "../../assets/kafelek6.png";

const offers = [
  { img: kafelek0, id: 1, name: "ulotki" },
  { img: kafelek1, id: 2, name: "banery-reklamowe" },
  { img: kafelek2, id: 3, name: "wizytówki" },
  { img: kafelek3, id: 4, name: "gadżety-reklamowe" },
  { img: kafelek4, id: 5, name: "odzież-reklamowa" },
  { img: kafelek5, id: 6, name: "usługi-graficzne" },
];

const Main = () => {
  return (
    <div className={styles.maincont}>
      <h1 className={styles.heading}>Między innymi oferujemy:</h1>
      <div className={styles.offersContainer}>
        {offers.map((offer) => (
          <Link
            key={offer.id}
            to={`/produkt/${offer.id}`}
            className={styles.offerCard}
          >
            <img
              src={offer.img}
              alt={`Oferta ${offer.name}`}
              className={styles.offerImage}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Main;
