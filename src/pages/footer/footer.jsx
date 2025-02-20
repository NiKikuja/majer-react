import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footerWrapper}>
            <div className={styles.footerContent}>
                <div className={styles.footerBox}>
                    <h3>LET-DOM</h3>
                    <p>Let-Dom - agencja reklamowa posiadająca bardzo szeroką ofertę handlowo-usługową. Naszym klientom oferujemy projekty, druk i realizacje kampanii związanych z identyfikacją wizualną. Dzięki swojej elastyczności i profesjonalnemu podejściu do każdego zlecenia. Nasza firma, mimo iż jest młoda, posiada sporą grupę stałych klientów. Działamy na terenie całego kraju, a Nasza siedziba mieści się w Lędzinach (woj. śląskie)</p>
                </div>
                <div className={styles.footerBox}>
                    <h3>REFERENCJE</h3>
                    <p>Niniejszym mamy przyjemność zarekomendować firmę Let-Dom jako solidnego partnera. Pracownicy firmy reklamowej Let-Dom to grupa młodych ludzi którzy mają masę dobrych pomysłów, i ogromny zapał do pracy, gorąco polecam. Marek Bromboszcz Prezes Lędzińskiej Federacji Przedsiębiorczych</p>
                </div>
                <div className={styles.footerBox}>
                    <h3>CZYM SIĘ ZAJMUJEMY?</h3>
                    <ul className={styles.footerList}>
                        <li>MATERIAŁY REKLAMOWE</li>
                        <li>SYSTEMY WYSTAWIENNICZE</li>
                        <li>DRUK WIELKOFORMATOWY</li>
                        <li>DRUK CYFROWY</li>
                        <li>ARTYKUŁY KIBICOWSKIE</li>
                        <li>USŁUGI GRAFICZNE</li>
                        <li>USŁUGI WEBMASTERSKIE</li>
                        <li>FOTOGRAFIA</li>
                    </ul>
                </div>
                <div className={styles.footerBox}>
                    <h3>SKONTAKTUJ SIĘ Z NAMI</h3>
                    <p>Let-Dom Janusz Majer</p>
                    <p>Tel.: +48 606480482</p>
                    <p>e-mail: wojciech@reklama-letdom.pl</p>
                    <p>ul. Lipowa 65, 43-144 Lędziny</p>
                </div>
            </div>
            <div className={styles.footerMap}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1332.3281026308787!2d19.137068416411505!3d50.1040032828572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716c0ba35cbb76f%3A0x9c551bc49e3a79b3!2sSerwis%20Maszyn%20Czyszcz%C4%85cych!5e1!3m2!1spl!2spl!4v1740001454531!5m2!1spl!2spl"
                    width="100%"
                    height="455"
                    style={{ border: "0" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <div className={styles.footerBottomText}>
                <p>&copy; 2025 LET-DOM. Wszelkie prawa zastrzeżone.</p>
            </div>
        </footer>
    );
}

export default Footer;
