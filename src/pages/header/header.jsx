import logo from '../../assets/logo.png';
import styles from './header.module.css';

const Header = () => {
  return (
    <nav className={styles.navbar}>
      <img src={logo} alt="Logo" className={styles.logo} />
      <ul className={styles.navLinks}>
        <li>Strona główna</li>
        <li>O nas</li>
        <li>Oferta</li>
      </ul>
      <button className={styles.contactButton}>Kontakt</button>
    </nav>
  );
};

export default Header;
