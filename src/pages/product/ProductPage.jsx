import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import styles from "./ProductPage.module.css";
import { oferty } from "../oferta/oferta";

const ProductPage = () => {
  const { id } = useParams();
  const product = oferty.find((item) => item.id === Number(id));

  // Po załadowaniu strony przewijamy na górę
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const [width, setWidth] = useState(1);
  const basePrice = product ? parseFloat(product.price.match(/\d+/)) : 0;
  const finalPrice = basePrice * width;
  if (!product) {
    return <h1>Produkt nie znaleziony</h1>;
  }
  return (
    <div className={styles.container}>
      <div className={styles.product}>
        <img src={product.image} alt={product.title} className={styles.image} />
        <div className={styles.details}>
          <h1 className={styles.title}>{product.title}</h1>
          <p className={styles.description}>{product.description}</p>
          <ul className={styles.features}>
            {product.features.map((feature, index) => (
              <li key={index}>✅ {feature}</li>
            ))}
          </ul>
          {!["Usługi graficzne", "Gadżety reklamowe"].includes(product.title) && (
            <div className={styles.priceContainer}>
              <label htmlFor="width">Szerokość (m):</label>
              <input
                type="number"
                id="width"
                value={width}
                onChange={(e) => setWidth(Number(e.target.value))}
                min="1"
                className={styles.input}
              />
              <p className={styles.price}>
                Cena: <strong>{finalPrice.toFixed(2)} zł</strong>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
