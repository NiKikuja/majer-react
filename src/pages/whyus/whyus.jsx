import styles from './whyus.module.css';
import kafelek1 from '../../assets/lotos 1.png';
import kafelek2 from '../../assets/lotos 2.png';
import kafelek3 from '../../assets/lotos 3.png';

const WhyUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.img}>
          <img src={kafelek1} alt="Opis" />
        </div>
        <div className={styles.text}>
          <h2>Co wyróżnia Nas od innych firm?</h2>
          <p>Indywidualne podejście do każdego klienta
          Szeroki zakres usług (obsługa „od A do Z”)</p>
          <p>Niskie ceny przy zachowaniu najwyższej jakości
          Indywidualne profesjonalnie przygotowane projekty graficzne</p>
          <p>Błyskawiczna odpowiedź na każde pytanie.
          Liczne promocje pozwalające na uzyskanie najlepszych nośników reklamowych w najniższych cenach</p>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.text}>
          <h2>Agencja reklamowa Let-Dom Marketing Logistics</h2>
          <p>Tworzona jest przez grupę kreatywnych specjalistów od marketingu, z wielką przyjemnością zrealizujemy powierzone nam zadania kompleksowo od doradztwa i projektowania poprzez przygotowanie planów aż do dostawy i montażu. Do każdego zlecenia podchodzimy z wielką pasją i ukierunkowujemy decyzje naszych klientów, na takie które przynoszą największe korzyści.</p>
          <p>Bogate portfolio udowadnia że dostarczamy efektywne rozwiązania dla każdego typu klientów zarówno mikro przedsiębiorstw rozpoczynających swoją działalność jak i potężnych korporacji poszukujących innowacyjnych rozwiązań, które przyniosą świeży powiew ich zasłużonym markom.</p>
        </div>
        <div className={styles.img}>
          <img src={kafelek2} alt="Opis" />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.img}>
          <img src={kafelek3} alt="Opis" />
        </div>
        <div className={styles.text}>
          <h2>Współpraca z nami to gwarancja sukcesu</h2>
          <p>Nasza firma to solidny i zaufany partner, który cieszy się uznaniem wśród klientów i współpracujących firm. Zaufali nam tacy liderzy jak Lotos, MKS Lędziny, Fimax i Art-Eco, co świadczy o naszej niezawodności i profesjonalizmie.</p>
          <p>Działamy zgodnie z najwyższymi standardami, a nasze doświadczenie i długoletnia współpraca z renomowanymi markami to gwarancja, że jesteśmy odpowiedzialnym i godnym zaufania wyborem.</p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
