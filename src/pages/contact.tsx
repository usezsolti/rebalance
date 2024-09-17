import { useRef } from 'react';
import emailjs from 'emailjs-com';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm('service_syc2tvs', 'template_1fsj0mf', form.current, '_UgC1pw0jHHqLl6sG')
        .then((result) => {
          console.log('Email sent successfully:', result.text);
          alert('Az üzeneted elküldésre került!');
        }, (error) => {
          console.error('Error sending email:', error.text);
          alert('Hiba történt az üzenet küldésekor. Kérjük, próbáld meg újra.');
        });
    }
  };

  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.contactTitle}>Kapcsolat</h1>
      <p className={styles.contactDescription}>
        Üdvözlünk a REbalance élmény részeként! Örülünk, hogy érdeklődsz a szolgáltatásunk felől. Keress minket bátran, átlagosan pár órán belül válaszolni fogunk a megkeresésedre.
      </p>
      <form ref={form} className={styles.contactForm} onSubmit={sendEmail}>
        <div className={styles.formGroup}>
          <label htmlFor="lastname">Vezetéknév (kötelező)</label>
          <input type="text" id="lastname" name="lastname" required className={styles.inputField} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="firstname">Keresztnév (kötelező)</label>
          <input type="text" id="firstname" name="firstname" required className={styles.inputField} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email (kötelező)</label>
          <input type="email" id="email" name="email" required className={styles.inputField} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Üzenet</label>
          <textarea id="message" name="message" rows={5} className={styles.inputField}></textarea>
        </div>
        <button type="submit" className={styles.submitButton}>Küldés</button>
      </form>
    </div>
  );
}
