import Link from 'next/link';
import styles from '../styles/Header.module.css'; // Importáljuk a CSS modulokat a stílusokhoz
import { FaInstagram } from 'react-icons/fa';

export default function Header() {
  return (
    <header className={styles.header}>
      {/* Logó */}
      <div className={styles.logo}>
        <Link href="/">REbalance</Link>
      </div>

      {/* Navigációs sáv */}
      <nav className={styles.nav}>
        <ul>
          <li><Link href="/about">Rólam</Link></li>
          <li><Link href="/prices">Árak</Link></li>
          <li><Link href="/contact">Kapcsolat</Link></li>
          {/* Instagram ikon */}
          <li>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.instagramIcon}>
              <FaInstagram />
            </a>
          </li>
          {/* Foglalás gomb */}
          <li>
          <button
              onClick={() => window.location.href = 'https://app.minup.io/book/rigo-eszter'}
              className={styles.bookingButton}
            >
              Foglalj most!
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}