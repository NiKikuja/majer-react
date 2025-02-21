import { Link } from "react-router-dom";
import styles from "./oferta.module.css";
import kafelek0 from "../../assets/kafelek1.png";
import kafelek1 from "../../assets/kafelek2.png";
import kafelek2 from "../../assets/kafelek3.png";
import kafelek3 from "../../assets/kafelek4.png";
import kafelek4 from "../../assets/kafelek5.png";
import kafelek5 from "../../assets/kafelek6.png";

const oferty = [
  { id: 1, title: "Ulotki", price: "Od 200 zł", description: "Projektowanie i drukowanie ulotek dostosowanych do Twojej marki.", features: ["Druk cyfrowy i offsetowy", "Różne formaty i gramatury papieru", "Projekt graficzny w cenie", "Możliwość uszlachetnienia (lakier UV, foliowanie)"], image: kafelek0 },
  { id: 2, title: "Banery reklamowe", price: "Od 150 zł/m²", description: "Drukujemy i projektujemy banery reklamowe odporne na warunki atmosferyczne.", features: ["Druk na materiale odpornym na UV i wodę", "Wzmocnione krawędzie i oczka montażowe", "Możliwość projektowania wielkoformatowego", "Dostawa na terenie całej Polski"], image: kafelek1 },
  { id: 3, title: "Wizytówki", price: "Od 100 zł/100 szt.", description: "Profesjonalne wizytówki dla Twojej firmy z unikalnym designem.", features: ["Różne rodzaje papieru (matowy, błyszczący, kraft)", "Możliwość złocenia i tłoczenia", "Dwustronny nadruk bez dopłaty", "Szybka realizacja zamówień"], image: kafelek2 },
  { id: 4, title: "Gadżety reklamowe", price: "Cena zależna od zamówienia", description: "Personalizowane gadżety reklamowe z nadrukiem Twojej firmy.", features: ["Kubki, długopisy, smycze, pendrive'y i więcej", "Nadruk tampodruk, sitodruk, grawer laserowy", "Możliwość zamówienia od małych ilości", "Doskonała jakość i trwałość nadruku"], image: kafelek3 },
  { id: 5, title: "Odzież reklamowa", price: "Od 50 zł/szt.", description: "Koszulki, bluzy i inne ubrania z nadrukiem lub haftem firmowym.", features: ["Personalizowane nadruki i hafty", "Dostępność różnych materiałów i fasonów", "Odzież robocza i reklamowa", "Odporność na pranie i długotrwałe użytkowanie"], image: kafelek4 },
  { id: 6, title: "Usługi graficzne", price: "Wyceniane indywidualnie", description: "Profesjonalne projekty graficzne dla firm i osób prywatnych.", features: ["Logotypy, identyfikacja wizualna", "Projekty materiałów drukowanych i internetowych", "Indywidualne podejście do każdego klienta", "Wysoka jakość i nowoczesny design"], image: kafelek5 },
];

const Oferta = () => {
  return (
    <div className={styles.maincont}>
      <div className={styles.ofertaList}>
        {oferty.map((oferta) => (
          <div key={oferta.id} className={styles.ofertaContainer}>
            <div className={styles.imageContainer}>
              <img src={oferta.image} alt={oferta.title} />
            </div>
            <h2 className={styles.ofertaTitle}>{oferta.title}</h2>
            <p className={styles.ofertaPrice}>
              Cena: <strong>{oferta.price}</strong>
            </p>
            <p className={styles.ofertaDescription}>{oferta.description}</p>
            <ul className={styles.features}>
              {oferta.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <div className={styles.buttonContainer}>
              <Link to={`/produkt/${oferta.id}`} className={styles.button}>Dowiedz się więcej</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Oferta;
export { oferty };