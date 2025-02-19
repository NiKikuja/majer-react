import logo from '../../assets/logo.png';
import styles from './header.module.css';

const Header = () => {
  return (
    <div>
      {/* Sekcja Above Nav */}
      <div className={styles.abovenav}>
        <div className={styles.abovenavContent}>
          <span className={styles.contactInfo}>Email: kontakt@firma.pl</span>
          <span className={styles.contactInfo}>Telefon: 123 456 789</span>
        </div>
      </div>

      {/* Navbar */}
      <nav className={styles.navbar}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <ul className={styles.navLinks}>
          <li>Strona główna</li>
          <li>O nas</li>
          <li>Oferta</li>
        </ul>
        <button className={styles.contactButton}>Kontakt</button>
      </nav>
    </div>
  );
};

export default Header;
