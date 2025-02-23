import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./ProductPage.module.css";
import { oferty } from "../oferta/oferta";

const pricingData = {
  "Banery": [
    { material: "Baner Standard", size: "500x500", priceNet: 31 },
    { material: "Baner STRONG laminowy", size: "1000x1000", priceNet: 34 },
    { material: "Siatka MESH", size: "Siatka Mesh", priceNet: 31 },
    { material: "Banery Exclusive", size: "Baner Exclusive", priceNet: 48 },
  ],
  "Wizytówki": {
    "Bez folii": [
      { quantity: 100, priceNet: 80 },
      { quantity: 250, priceNet: 120 },
      { quantity: 500, priceNet: 200 },
      { quantity: 1000, priceNet: 250 },
      { quantity: 2000, priceNet: 350 },
    ],
    "Z folią": [
      { quantity: 100, priceNet: 120 },
      { quantity: 250, priceNet: 150 },
      { quantity: 500, priceNet: 220 },
      { quantity: 1000, priceNet: 290 },
      { quantity: 2000, priceNet: 380 },
    ],
  },
 "Ulotki": {
    "A6": {
      "130g": [
        { quantity: 100, priceNet: 100 },
        { quantity: 500, priceNet: 230 },
        { quantity: 1000, priceNet: 350 },
        { quantity: 2500, priceNet: 500 },
        { quantity: 5000, priceNet: 1000 },
      ],
      "170g": [
        { quantity: 100, priceNet: 120 },
        { quantity: 500, priceNet: 250 },
        { quantity: 1000, priceNet: 380 },
        { quantity: 2500, priceNet: 580 },
        { quantity: 5000, priceNet: 1080 },
      ],
    },
    "A5": {
      "130g": [
        { quantity: 100, priceNet: 105 },
        { quantity: 500, priceNet: 240 },
        { quantity: 1000, priceNet: 370 },
        { quantity: 2500, priceNet: 650 },
        { quantity: 5000, priceNet: 1200 },
      ],
      "170g": [
        { quantity: 100, priceNet: 115 },
        { quantity: 500, priceNet: 270 },
        { quantity: 1000, priceNet: 390 },
        { quantity: 2500, priceNet: 690 },
        { quantity: 5000, priceNet: 1350 },
      ],
    },
    "A4": {
      "130g": [
        { quantity: 100, priceNet: 120 },
        { quantity: 500, priceNet: 250 },
        { quantity: 1000, priceNet: 400 },
        { quantity: 2500, priceNet: 900 },
        { quantity: 5000, priceNet: 1600 },
      ],
      "170g": [
        { quantity: 100, priceNet: 140 },
        { quantity: 500, priceNet: 280 },
        { quantity: 1000, priceNet: 450 },
        { quantity: 2500, priceNet: 1000 },
        { quantity: 5000, priceNet: 1800 },
      ],
    },
    "DL": {
      "130g": [
        { quantity: 100, priceNet: 100 },
        { quantity: 500, priceNet: 220 },
        { quantity: 1000, priceNet: 320 },
        { quantity: 2500, priceNet: 550 },
        { quantity: 5000, priceNet: 900 },
      ],
      "170g": [
        { quantity: 100, priceNet: 110 },
        { quantity: 500, priceNet: 240 },
        { quantity: 1000, priceNet: 350 },
        { quantity: 2500, priceNet: 590 },
        { quantity: 5000, priceNet: 950 },
      ],
    },
  },
  "Usługi graficzne": {
    "Logo Standard": [
      {
        "description": `2 różne propozycje logo\nczas wykonania 48 godzin\nDo 3 poprawek wybranego logotypu\nlogo w formatach (jpg, png)\nwersje kolorystyczne znaku: kolor, czarno-białe,\nlogo w wersjach nadających się do druku i internetu (CMYK, RGB)\nprojekt przekazany przez e-mail`,
        "priceNet": 130
      }
    ],
    "Logo High": [
      {
        "description": `4 różnych propozycji logo\npierwsze projekty w ciągu 48 godzin\nlogo w formatach (cdr, jpg, tiff, png)\nprzekazanie praw autorskich do logotypu\nopis kolorystyki loga w pliku PDF\nwersje kolorystyczne znaku: kolor, czarno-białe, kontra\nlogo w wersjach nadających się do druku i internetu (CMYK, RGB)\nprojekt przekazany przez e-mail`,
        "priceNet": 230
      }
    ],
    "Logo Biznes": [
      {
        "description": `5 różnych propozycji logo\npierwsze projekty w ciągu 48 godzin\nlogo w formatach (cdr, psd, ai, png, jpg, png)\nprzekazanie praw autorskich do logotypu\nopis kolorystyki loga w pliku PDF\nwersje kolorystyczne znaku: kolor, czarno-białe\nlogo w wersjach nadających się do druku i internetu (CMYK, RGB)\nprojekt przekazany przez e-mail\nZniżka na inne usługi 5%`,
        "priceNet": 405
      }
    ],
    "Redesign obecnego znaku": [
      {
        "description": `Oferujemy również opcję odświeżenia swojego obecnego logo, cena za taką usługę zazwyczaj mieści się w koszcie 230zł.`,
        "priceNet": 230
      }
    ],
      "Ulotka jednostronna": [{ "priceNet": 105 }],
      "Ulotka dwustronna": [{ "priceNet": 140 }],
      "Wizytówka dwustronna": [{ "priceNet": 100 }],
      "Plakat": [{ "priceNet": 110 }],
      "Notesy": [{ "priceNet": 120 }],
      "Teczki ofertowe": [{ "priceNet": 170 }],
      "Baner reklamowy": [{ "priceNet": 120 }],
      "Etykiety/zawieszki": [{ "priceNet": 120 }],
      "Kalendarz reklamowy": [{ "priceNet": 120 }],
      "Roll up": [{ "priceNet": 100 }]
  }
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
  const [service, setService] = useState("");
  const [serviceDescription, setServiceDescription] = useState("");
  const [squareMeters, setSquareMeters] = useState(1);

  useEffect(() => {
    if (!product) return;
    let price = 0;
    if (product.title === "Banery reklamowe" && pricingData.Banery) {
      const selectedMaterial = pricingData.Banery.find((item) => item.material === material);
      price = selectedMaterial ? selectedMaterial.priceNet * squareMeters : 0;
    } else if (product.title === "Wizytówki" && pricingData.Wizytówki) {
      const selectedOption = pricingData.Wizytówki[coating]?.find((item) => item.quantity === quantity);
      price = selectedOption ? selectedOption.priceNet : 0;
    } else if (product.title === "Ulotki" && pricingData.Ulotki) {
      const selectedOption = pricingData.Ulotki[format]?.[weight]?.find((item) => item.quantity === quantity);
      price = selectedOption ? selectedOption.priceNet : 0;
    } else if (product.title === "Usługi graficzne" && pricingData["Usługi graficzne"]) {
      const selectedService = pricingData["Usługi graficzne"][service]?.[0];
      price = selectedService ? selectedService.priceNet : 0;
      setServiceDescription(selectedService ? selectedService.description : "");
    }
    setSelectedPriceNet(price);
  }, [material, coating, quantity, product, format, weight, service, squareMeters]);
  
  if (!product) {
    return <p>Produkt nie znaleziony.</p>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.product}>
        <img src={product.image} alt={product.title} className={styles.image} />
        <div className={styles.details}>
          <h1 className={styles.title}>{product.title}</h1>
          <p className={styles.description}>{product.description}</p>
          {product.title === "Banery reklamowe" && pricingData.Banery && (
            <>
              <label><br/><br/>Wybierz materiał<br/></label>
              <select value={material} onChange={(e) => setMaterial(e.target.value)}>
                {pricingData.Banery.map((item, index) => (
                  <option key={index} value={item.material}>{`${item.material} - ${item.size}`}</option>
                ))}
              </select>
              <div className={styles.inputcontainer}>
                <label className={styles.labelsquare}><br/>Podaj m²<br/></label>
                <input
                    type="number"
                    value={squareMeters}
                    onChange={(e) => setSquareMeters(Number(e.target.value))}
                    min="1"
                    className={styles.inputsquare}
                />
              </div>
            </>
          )}
          {product.title === "Wizytówki" && pricingData.Wizytówki && (
            <>
              <label><br/>Rodzaj<br/></label>
              <select value={coating} onChange={(e) => setCoating(e.target.value)}>
                {Object.keys(pricingData.Wizytówki).map((type, index) => (
                  <option key={index} value={type}>{type}</option>
                ))}
              </select>
              <label><br/><br/>Nakład<br/></label>
              <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
                {pricingData.Wizytówki[coating]?.map((item, index) => (
                  <option key={index} value={item.quantity}>{item.quantity} szt.</option>
                ))}
              </select>
            </>
          )}
          {product.title === "Ulotki" && pricingData.Ulotki && (
            <>
              <label><br/>Format<br/></label>
              <select value={format} onChange={(e) => setFormat(e.target.value)}>
                {Object.keys(pricingData.Ulotki).map((format, index) => (
                  <option key={index} value={format}>{format}</option>
                ))}
              </select>
              <label><br/><br/>Grubość<br/></label>
              <select value={weight} onChange={(e) => setWeight(e.target.value)}>
                {Object.keys(pricingData.Ulotki[format]).map((w, index) => (
                  <option key={index} value={w}>{w}</option>
                ))}
              </select>
              <label><br/><br/>Nakład<br/></label>
              <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
                {pricingData.Ulotki[format][weight]?.map((item, index) => (
                  <option key={index} value={item.quantity}>{item.quantity} szt.</option>
                ))}
              </select>
            </>
          )}
          {product.title === "Usługi graficzne" && pricingData["Usługi graficzne"] && (
            <>
              <label><br/><br/>Wybierz usługę<br/></label>
              <select value={service} onChange={(e) => setService(e.target.value)}>
                {Object.keys(pricingData["Usługi graficzne"]).map((key, index) => (
                  <option key={index} value={key}>{key}</option>
                ))}
              </select>
              {serviceDescription && (
                <div className={styles.serviceDescription}>
                  <h3>Opis usługi<br/></h3>
                  <p>{serviceDescription}</p>
                </div>
              )}
            </>
          )}
          {product.title !== "Gadżety reklamowe" && product.title !== "Odzież reklamowa" && (
            <>
              <p className={styles.price}><br/>Cena netto: <strong>{selectedPriceNet.toFixed(2)} zł</strong></p>
              <p className={styles.price}>Cena brutto: <strong>{calculateBrutto(selectedPriceNet)} zł</strong></p>
            </>
          )}
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
