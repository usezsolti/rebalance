import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';
import { FaInstagram, FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      {/* Logó */}
      <div className={styles.logo}>
        <Link href="/">REbalance</Link>
      </div>

      {/* Hamburger ikon */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigációs sáv */}
      <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
        <ul>
          <li><Link href="/about">Rólam</Link></li>
          <li><Link href="/prices">Árak</Link></li>
          <li><Link href="/contact">Kapcsolat</Link></li>
          {/* Instagram ikon */}
          <li>
            <a
              href="https://www.instagram.com/rigoeszter/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.instagramIcon}
            >
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
