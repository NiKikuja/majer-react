import {useEffect} from 'react';
import styles from './onas.module.css';

const Onas = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className={styles.onasSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Współpraca z nami to gwarancja sukcesu</h2>
        <p className={styles.text}>
          Jesteśmy solidnym i zaufanym partnerem, który zdobył uznanie wśród klientów i firm.
          Nasza niezawodność i profesjonalizm zostały docenione przez takich liderów jak Lotos,
          MKS Lędziny, Fimax i Art-Eco.
        </p>
        <p className={styles.text}>
          Działamy zgodnie z najwyższymi standardami, zapewniając skuteczne rozwiązania i
          długoterminowe relacje z klientami.
        </p>

        <h2 className={styles.heading}>Agencja reklamowa Let-Dom Marketing Logistics</h2>
        <p className={styles.text}>
          Tworzymy zespół kreatywnych specjalistów, którzy kompleksowo realizują projekty – 
          od doradztwa i projektowania, przez planowanie, aż po dostawę i montaż.
        </p>
        <p className={styles.text}>
          Nasze bogate portfolio potwierdza, że dostarczamy efektywne rozwiązania zarówno dla 
          małych firm, jak i dużych korporacji poszukujących innowacyjnych strategii marketingowych.
        </p>

        <h2 className={styles.heading}>Co nas wyróżnia?</h2>
        <ul className={styles.list}>
          <li>Indywidualne podejście do każdego klienta</li>
          <li>Kompleksowa obsługa – „od A do Z”</li>
          <li>Najwyższa jakość w konkurencyjnych cenach</li>
          <li>Profesjonalnie przygotowane projekty graficzne</li>
          <li>Szybka reakcja na każde zapytanie</li>
          <li>Atrakcyjne promocje i korzystne warunki współpracy</li>
        </ul>

        {/* Sekcja kontaktowa */}
        <div className={styles.contactSection}>
          <h2 className={styles.heading}>Skontaktuj się z nami</h2>
          <p className={styles.contactText}><strong>Let-Dom Janusz Majer</strong></p>
          <p className={styles.contactText}>Tel.: <a href="tel:+48606480482">+48 606 480 482</a></p>
          <p className={styles.contactText}>E-mail: <a href="mailto:wojciech@reklama-letdom.pl">wojciech@reklama-letdom.pl</a></p>
          <p className={styles.contactText}>ul. Lipowa 65, 43-144 Lędziny</p>
        </div>
      </div>
    </section>
  );
};

export default Onas;
