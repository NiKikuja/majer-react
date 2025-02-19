import styles from './footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.mapContainer}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d198.05205148053824!2d19.138155206071925!3d50.1039321568196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716c0ba35cbb76f%3A0x9c551bc49e3a79b3!2sSerwis%20Maszyn%20Czyszcz%C4%85cych!5e1!3m2!1spl!2spl!4v1739909972810!5m2!1spl!2spl"
                    width="1000"
                    height="600"
                    style={{ border: "0" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <p>&copy; 2025 Twoja Firma. Wszelkie prawa zastrzeżone.</p>
            <p>Kontakt: kontakt@twojafirma.pl</p>
        </footer>
    );
}

export default Footer;
