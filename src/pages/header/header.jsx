import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion"; // Importowanie Framer Motion
import logo from "../../assets/logo.png";
import styles from "./header.module.css";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const threshold = 2; // Ustalamy próg 20px

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current + threshold) {
        setIsVisible(false);  // Chowanie nagłówka po przewinięciu o 20px w dół
      } else if (window.scrollY < lastScrollY.current - threshold) {
        setIsVisible(true);   // Pokazywanie nagłówka po przewinięciu o 20px w górę
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className={styles.header}
      animate={{ y: isVisible ? 0 : -100 }}  // Ruch nagłówka w górę i w dół
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
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
      </nav>
    </motion.div>
  );
};

export default Header;
