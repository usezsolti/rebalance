import React from 'react';
import Link from 'next/link';
import styles from '../styles/Footer.module.css';
import { FaInstagram, FaFacebook, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerSection}>
          <h3>REbalance</h3>
          <p>Az elme és a lélek egyensúlya</p>
          <p>Professzionális masszázs szolgáltatások</p>
        </div>
        
        <div className={styles.footerSection}>
          <h3>Navigáció</h3>
          <ul>
            <li><Link href="/" legacyBehavior><a>Főoldal</a></Link></li>
            <li><Link href="/about" legacyBehavior><a>Rólam</a></Link></li>
            <li><Link href="/prices" legacyBehavior><a>Árak</a></Link></li>
            <li><Link href="/contact" legacyBehavior><a>Kapcsolat</a></Link></li>
            <li><Link href="/privacy-policy" legacyBehavior><a>Adatvédelem</a></Link></li>
          </ul>
        </div>
        
        <div className={styles.footerSection}>
          <h3>Kapcsolat</h3>
          <p><FaPhone className={styles.icon} /> <a href="tel:+36307140591">+36 30 714 0591</a></p>
          <p><FaEnvelope className={styles.icon} /> <a href="mailto:rigoeszter.masszazs@gmail.com">rigoeszter.masszazs@gmail.com</a></p>
          <p>Budapest, Taksony u. 1, 1134</p>
        </div>
        
        <div className={styles.footerSection}>
          <h3>Kövess</h3>
          <div className={styles.socialIcons}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className={styles.socialIcon} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook className={styles.socialIcon} />
            </a>
          </div>
          <a 
            href="https://app.minup.io/book/rigo-eszter" 
            className={styles.bookButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            Foglalj időpontot
          </a>
        </div>
      </div>
      
      <div className={styles.copyright}>
        <p>&copy; {new Date().getFullYear()} REbalance. Minden jog fenntartva.</p>
      </div>
    </footer>
  );
};

export default Footer; 