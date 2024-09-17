import styles from '../styles/Home.module.css'; // Importáld a CSS modult
import aboutStyles from '../styles/About.module.css';
import Image from 'next/image'; // Importáld az Image komponenst


export default function Home() {
  return (
    <div>
      {/* Hero szekció */}
      <section className={styles.hero}>
        <h1 className={styles.title}>REbalance</h1>
        <p className={styles.subtitle}>Az elme és a lélek egyensúlya</p>
      </section>

      {/* About szekció */}
      <section className={aboutStyles.aboutSection}>
        <div className={aboutStyles.aboutContent}>
          {/* Kép */}
          {/* Az Image komponens használata az img helyett */}
          <Image 
            src="/images/reklám.png" // A kép elérési útja a public mappában
            alt="Rigó Eszter"
            className={aboutStyles.aboutImage}
            width={250} // Az eredeti kép szélessége
            height={300} // Az eredeti kép magassága
          />
          <div className={aboutStyles.aboutText}>
            <h2>Rigó Eszter</h2>
            <p className={aboutStyles.aboutParagraph}>
              <strong>2017-ben végeztem okleveles Gyógy- és sportmasszőrként.</strong> Tapasztalataimat <strong>Szent Gellért Gyógyfürdőben </strong>
              szereztem, ahol <strong>reumatológiai és ortopédiai megbetegedések kezelésével foglalkoztam.</strong>
            </p>
            <p className={aboutStyles.aboutParagraph}>
              <strong>Ergoterapeutaként 2019-ben végeztem</strong>, először a <strong>Szent János Kórházban</strong> 
              , <strong>később a Szent Margit Kórház mozgásszervi rehabilitációs osztályán ergoterápiás foglalkozásokat tartottam. </strong>
              Az itt szerzett tapasztalataimmal szeretnék segíteni a stroke-on átesett, illetve szerezett agysérüléssel küzdő betegeknek.
            </p>
            <p className={aboutStyles.aboutParagraph}>
              <strong>Fő profilom a neurológiai betegségek rehabilitációja. </strong>
              A fogalalkozásaim során felső végtagi kis- és nagy ízületi mozgásokat, 
              a finommotorikus mozgásokat, a kognitív- és önellátási funkciókat fejlesztem.
            </p>
            <p className={aboutStyles.aboutParagraph}>
              <strong>Fontosnak tartom szaktudásom folyamatos bővítését, fejlesztését, hogy páciensem számára professzionális kezeléseket nyújthassak
                </strong>, hozzásegíthessem őket problémáik jobb megértéséhez, ezáltal <strong>életminőségük javulásához.</strong>
            </p>
          </div>
        </div>
      </section>

    <section className={styles.pricingSection}>
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
    </section>

    <section className={styles.contactSection}>
    <div className={styles.contactInfo}>
        <h2>Látogass meg!</h2>
        <p>
            <a href="https://www.google.com/maps?q=Budapest,+Taksony+u.+1,+1134" target="_blank" rel="noopener noreferrer">
                Budapest, Taksony u. 1, 1134
            </a>
        </p>

        <h3>Munkaidő</h3>
        <p className={styles.workhours}>
          Hétfő: 15-20
        </p>
        <p className={styles.workhours}>
          Kedd: 15-20
        </p>
        <p className={styles.workhours}>
          Csütörtök: 8-12
        </p>
        <p className={styles.workhours}>
          Szombat: 8-13
        </p>

        <h3>Kapcsolat</h3>
        <p><a href="tel:+36307140591">+36307140591</a></p>
        <p><a href="mailto:rigoeszter.masszazs@gmail.com">rigoeszter.masszazs@gmail.com</a></p>
    </div>
    
    <div className={styles.mapContainer}>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10663.007737309014!2d19.044992!3d47.514236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc6f7bf926e3%3A0x400c4290c1d68c0!2sBudapest%2C%20Taksony%20u.%201%2C%201134!5e0!3m2!1shu!2shu!4v1631543272970!5m2!1shu!2shu"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
        ></iframe>
    </div>
    </section>
    </div>
  );
}
