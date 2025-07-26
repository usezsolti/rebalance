import styles from '../styles/Home.module.css'; // Importáld a CSS modult

export default function Prices() {
  return (
    <div className={styles.pricingSection}>
      <h2 className={styles.pricingTitle}>Árlista</h2>
      <div className={styles.pricingContainer}>
          <div className={styles.priceCard}>
              <h3>40 perces</h3>
              <p className={styles.price}>7500 FT</p>
              <button
                  onClick={() => window.location.href = 'https://app.minup.io/book/rigo-eszter'}
                  className={styles.bookingButton}
              >
                  Foglalj most!
              </button>
              <ul className={styles.featuresList}>
                  <li>✔ Hát</li>
                  <li>✔ Nyak</li>
                  <li>✔ Váll</li>
              </ul>
          </div>
          <div className={styles.priceCard}>
              <h3>60 perces</h3>
              <p className={styles.price}>13000 Ft</p>
              <button
                  onClick={() => window.location.href = 'https://app.minup.io/book/rigo-eszter'}
                  className={styles.bookingButton}
              >
                  Foglalj most!
              </button>
              <ul className={styles.featuresList}>
                  <li>✔ Hát</li>
                  <li>✔ Nyak</li>
                  <li>✔ Váll</li>
                  <li>✔ Láb</li>
              </ul>
          </div>
      </div>
    </div>
  );
}
