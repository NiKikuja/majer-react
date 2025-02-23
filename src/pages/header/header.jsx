import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MdEmail, MdPhone, MdMenu, MdClose } from "react-icons/md";
import logo from "../../assets/logo.png";
import styles from "./header.module.css";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const threshold = 10;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current + threshold) {
        setIsVisible(false);
      } else if (window.scrollY < lastScrollY.current - threshold) {
        setIsVisible(true);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className={styles.header}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      <div className={styles.abovenav}>
        <div className={styles.abovenavContent}>
          <span className={styles.contactInfo}>
            <MdEmail className={styles.icon} size={20} /> wojciech@reklama-letdom.pl
          </span>
          <span className={styles.contactInfo}>
            <MdPhone className={styles.icon} size={20} /> 606 480 482
          </span>
        </div>
      </div>

      <nav className={styles.navbar}>
        <NavLink to="/" className={styles.logoLink}>
          <img src={logo} alt="Logo" className={styles.logo} />
        </NavLink>

        <ul className={styles.navLinks}>
          <li><NavLink to="/" className={({ isActive }) => isActive ? styles.active : ""}>Strona główna</NavLink></li>
          <li><NavLink to="/onas" className={({ isActive }) => isActive ? styles.active : ""}>O nas</NavLink></li>
          <li><NavLink to="/oferta" className={({ isActive }) => isActive ? styles.active : ""}>Oferta</NavLink></li>
        </ul>

        <button className={styles.menuButton} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <MdClose size={30} /> : <MdMenu size={30} />}
        </button>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className={styles.fullscreenMenu}
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: "0%" }}
              exit={{ opacity: 0, y: "-100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <button className={styles.closeButton} onClick={() => setMenuOpen(false)}>
                <MdClose size={40} />
              </button>
              <ul className={styles.menuLinks}>
                <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Strona główna</NavLink></li>
                <li><NavLink to="/onas" onClick={() => setMenuOpen(false)}>O nas</NavLink></li>
                <li><NavLink to="/oferta" onClick={() => setMenuOpen(false)}>Oferta</NavLink></li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.div>
  );
};

export default Header;
