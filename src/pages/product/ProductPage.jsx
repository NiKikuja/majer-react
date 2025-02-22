import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./ProductPage.module.css";
import { oferty } from "../oferta/oferta";

const pricingData = {
  "Banery": [
    { material: "ECO laminowy", size: "500x500mm", priceNet: 30 },
    { material: "STRONG laminowy", size: "1000x1000mm", priceNet: 33 },
    { material: "Siatka MESH", size: "Siatka Mesh", priceNet: 30 },
    { material: "VIP powlekany", size: "Baner Exclusive", priceNet: 45 },
  ],
  "Wizytówki": {
    "Bez folii": [
      { quantity: 100, priceNet: 60 },
      { quantity: 250, priceNet: 70 },
      { quantity: 500, priceNet: 80 },
      { quantity: 1000, priceNet: 130 },
      { quantity: 2000, priceNet: 160 },
    ],
    "Z folią": [
      { quantity: 100, priceNet: 120 },
      { quantity: 250, priceNet: 130 },
      { quantity: 500, priceNet: 140 },
      { quantity: 1000, priceNet: 160 },
      { quantity: 2000, priceNet: 250 },
    ],
  },
 "Ulotki": {
    "A6": {
      "130g": [
        { quantity: 100, priceNet: 88 },
        { quantity: 500, priceNet: 99 },
        { quantity: 1000, priceNet: 110 },
        { quantity: 2500, priceNet: 142 },
        { quantity: 5000, priceNet: 174 },
      ],
      "170g": [
        { quantity: 100, priceNet: 92 },
        { quantity: 500, priceNet: 105 },
        { quantity: 1000, priceNet: 125 },
        { quantity: 2500, priceNet: 155 },
        { quantity: 5000, priceNet: 200 },
      ],
    },
    "A5": {
      "130g": [
        { quantity: 100, priceNet: 100 },
        { quantity: 500, priceNet: 110 },
        { quantity: 1000, priceNet: 150 },
        { quantity: 2500, priceNet: 218 },
        { quantity: 5000, priceNet: 300 },
      ],
      "170g": [
        { quantity: 100, priceNet: 123 },
        { quantity: 500, priceNet: 145 },
        { quantity: 1000, priceNet: 167 },
        { quantity: 2500, priceNet: 228 },
        { quantity: 5000, priceNet: 325 },
      ],
    },
    "A4": {
      "130g": [
        { quantity: 100, priceNet: 146 },
        { quantity: 500, priceNet: 208 },
        { quantity: 1000, priceNet: 280 },
        { quantity: 2500, priceNet: 330 },
        { quantity: 5000, priceNet: 475 },
      ],
      "170g": [
        { quantity: 100, priceNet: 152 },
        { quantity: 500, priceNet: 200 },
        { quantity: 1000, priceNet: 230 },
        { quantity: 2500, priceNet: 400 },
        { quantity: 5000, priceNet: 540 },
      ],
    },
    "DL": {
      "130g": [
        { quantity: 100, priceNet: 88 },
        { quantity: 500, priceNet: 92 },
        { quantity: 1000, priceNet: 125 },
        { quantity: 2500, priceNet: 150 },
        { quantity: 5000, priceNet: 200 },
      ],
      "170g": [
        { quantity: 100, priceNet: 105 },
        { quantity: 500, priceNet: 112 },
        { quantity: 1000, priceNet: 120 },
        { quantity: 2500, priceNet: 175 },
        { quantity: 5000, priceNet: 230 },
      ],
    },
  },
};

const calculateBrutto = (netto) => (netto * 1.23).toFixed(2);

const ProductPage = () => {
  const { id } = useParams();
  const product = oferty.find((item) => item.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [material, setMaterial] = useState("ECO laminowy");
  const [coating, setCoating] = useState("Bez folii");
  const [quantity, setQuantity] = useState(100);
  const [selectedPriceNet, setSelectedPriceNet] = useState(0);
  const [format, setFormat] = useState("A6");
  const [weight, setWeight] = useState("130g");

  useEffect(() => {
    let price = 0;
    if (product.title === "Banery reklamowe") {
      const selectedMaterial = pricingData.Banery.find((item) => item.material === material);
      price = selectedMaterial ? selectedMaterial.priceNet : 0;
    } else if (product.title === "Wizytówki") {
      const selectedOption = pricingData.Wizytówki[coating]?.find((item) => item.quantity === quantity);
      price = selectedOption ? selectedOption.priceNet : 0;
    } else if (product.title === "Ulotki") {
      const selectedOption = pricingData.Ulotki[format]?.[weight]?.find((item) => item.quantity === quantity);
      price = selectedOption ? selectedOption.priceNet : 0;
    }
    setSelectedPriceNet(price);
  }, [material, coating, quantity, product.title, format, weight]);

  return (
    <div className={styles.container}>
      <div className={styles.product}>
        <img src={product.image} alt={product.title} className={styles.image} />
        <div className={styles.details}>
          <h1 className={styles.title}>{product.title}</h1>
          <p className={styles.description}>{product.description}</p>
          {product.title === "Banery reklamowe" && (
            <>
              <label><br/><br/>Wybierz materiał:</label>
              <select value={material} onChange={(e) => setMaterial(e.target.value)}>
                {pricingData.Banery.map((item, index) => (
                  <option key={index} value={item.material}>{`${item.material} - ${item.size}`}</option>
                ))}
              </select>
            </>
          )}
          {product.title === "Wizytówki" && (
            <>
              <label><br/><br/>Rodzaj:</label>
              <select value={coating} onChange={(e) => setCoating(e.target.value)}>
                {Object.keys(pricingData.Wizytówki).map((type, index) => (
                  <option key={index} value={type}>{type}</option>
                ))}
              </select>
              <label><br/><br/>Nakład:</label>
              <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
                {pricingData.Wizytówki[coating]?.map((item, index) => (
                  <option key={index} value={item.quantity}>{item.quantity} szt.</option>
                ))}
              </select>
            </>
          )}
          {product.title === "Ulotki" && (
            <>
              <label><br/>Format:</label>
              <select value={format} onChange={(e) => setFormat(e.target.value)}>
                {Object.keys(pricingData.Ulotki).map((format, index) => (
                  <option key={index} value={format}>{format}</option>
                ))}
              </select>
              <label><br/><br/>Grubość:</label>
              <select value={weight} onChange={(e) => setWeight(e.target.value)}>
                {Object.keys(pricingData.Ulotki[format]).map((w, index) => (
                  <option key={index} value={w}>{w}</option>
                ))}
              </select>
              <label><br/><br/>Nakład:</label>
              <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
                {pricingData.Ulotki[format][weight]?.map((item, index) => (
                  <option key={index} value={item.quantity}>{item.quantity} szt.</option>
                ))}
              </select>
            </>
          )}
          <p className={styles.price}><br/>Cena netto: <strong>{selectedPriceNet.toFixed(2)} zł</strong></p>
          <p className={styles.price}>Cena brutto: <strong>{calculateBrutto(selectedPriceNet)} zł</strong></p>
        </div>
      </div>
      <div className={styles.fullDescription}>
        <h2>Opis produktu</h2>
        <div dangerouslySetInnerHTML={{ __html: product.fullDescription }} />
      </div>
    </div>
  );
};

export default ProductPage;
