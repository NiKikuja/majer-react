
import styles from './featuredcompanies.module.css';

// Importowanie zdjęć firm
import company1 from '../../assets/miniaturka-fimax.jpg';
import company2 from '../../assets/miniaturka-lotos.png';
import company3 from '../../assets/pizzeria_marios-xx.jpg';
import company4 from '../../assets/vic-logo.jpg';

const FeaturedCompanies = () => {
  const companyImages = [company1, company2, company3, company4];

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Nasi Partnerzy</h2>
      <div className={styles.grid}>
        {companyImages.map((image, index) => (
          <div key={index} className={styles.company}>
            <img src={image} alt={`Company ${index + 1}`} className={styles.companyImage} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedCompanies;
