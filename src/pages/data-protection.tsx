import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/About.module.css';

const DataProtection = () => {
  return (
    <>
      <Head>
        <title>Adatvédelem - REbalance</title>
        <meta name="description" content="Adatvédelmi tájékoztató és adatkezelési tájékoztató a REbalance masszázs szolgáltatásokhoz" />
      </Head>
      
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>Adatvédelem & Adatkezelési Tájékoztató</h1>
          
          <section className={styles.section}>
            <h2>1. Bevezetés</h2>
            <p>Ez az adatvédelmi tájékoztató elmagyarázza, hogy a REbalance (&ldquo;mi&rdquo;, &ldquo;minket&rdquo;, &ldquo;miénk&rdquo;) hogyan gyűjti, használja és védi a személyes adatait, amikor weboldalunkat és szolgáltatásainkat használja. Elkötelezettek vagyunk az adatvédelme biztosítása és a személyes adatok biztonságának megőrzése mellett.</p>
          </section>

          <section className={styles.section}>
            <h2>2. Az általunk gyűjtött információk</h2>
            <h3>2.1 Személyes információk</h3>
            <p>A következő személyes információkat gyűjthetjük:</p>
            <ul>
              <li>Név és kapcsolati adatok (email, telefonszám)</li>
              <li>Időpontfoglalási preferenciák és előzmények</li>
              <li>Masszázs terápiához kapcsolódó egészségügyi információk</li>
              <li>Fizetési információk</li>
            </ul>
            
            <h3>2.2 Technikai információk</h3>
            <p>Weboldalunk látogatásakor automatikusan gyűjtünk bizonyos technikai információkat:</p>
            <ul>
              <li>IP cím és böngésző típus</li>
              <li>Meglátogatott oldalak és azokon töltött idő</li>
              <li>Eszköz információk</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>3. Hogyan használjuk az adatait</h2>
            <p>Személyes adatait a következő célokra használjuk:</p>
            <ul>
              <li>Masszázs terápiás szolgáltatások nyújtása</li>
              <li>Időpontok ütemezése és kezelése</li>
              <li>Szolgáltatásainkról való kommunikáció</li>
              <li>Fizetések feldolgozása</li>
              <li>Weboldalunk és szolgáltatásaink fejlesztése</li>
              <li>Jogi kötelezettségek teljesítése</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>4. Az adatfeldolgozás jogalapja</h2>
            <p>Személyes adatait a következő alapokon dolgozzuk fel:</p>
            <ul>
              <li><strong>Hozzájárulás:</strong> Amikor kifejezetten hozzájárul adatfeldolgozásunkhoz</li>
              <li><strong>Szerződés:</strong> Szolgáltatási kötelezettségeink teljesítése érdekében</li>
              <li><strong>Jogos érdek:</strong> Szolgáltatásaink fejlesztése és Önnel való kommunikáció érdekében</li>
              <li><strong>Jogi kötelezettség:</strong> Az érvényes jogszabályoknak való megfelelés érdekében</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>5. Adatmegosztás és harmadik felek</h2>
            <p>Nem adjuk el, nem cseréljük el és nem adjuk bérbe személyes adatait harmadik feleknek. Adatait csak a következő esetekben oszthatjuk meg:</p>
            <ul>
              <li>Kifejezett hozzájárulásával</li>
              <li>Működésünkben segítő szolgáltatókkal (pl. foglalási rendszerek)</li>
              <li>Jogszabályi előírás vagy jogaink védelme érdekében</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>6. Adatbiztonság</h2>
            <p>Megfelelő technikai és szervezési intézkedéseket alkalmazunk személyes adatainak jogosulatlan hozzáférés, módosítás, nyilvánosságra hozatal vagy megsemmisítés elleni védelme érdekében. Ezek az intézkedések:</p>
            <ul>
              <li>Érzékeny adatok titkosítása</li>
              <li>Rendszeres biztonsági felmérések</li>
              <li>Személyes információkhoz való korlátozott hozzáférés</li>
              <li>Biztonságos adattárolási rendszerek</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>7. Jogai</h2>
            <p>A személyes adataival kapcsolatban a következő jogokkal rendelkezik:</p>
            <ul>
              <li><strong>Hozzáférés:</strong>Személyes adatainak másolatát kérheti</li>
              <li><strong>Helyesbítés:</strong>Pontatlan vagy hiányos adatokat javíthat</li>
              <li><strong>Törlés:</strong>Személyes adatainak törlését kérheti</li>
              <li><strong>Adathordozhatóság:</strong>Adatait strukturált formában megkaphatja</li>
              <li><strong>Tiltakozás:</strong>Bizonyos feldolgozási típusok ellen tiltakozhat</li>
              <li><strong>Visszavonás:</strong>Hozzájárulását bármikor visszavonhatja</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>8. Adatmegőrzés</h2>
            <p>Személyes adatait csak annyi ideig őrizzük meg, amíg az erre a tájékoztatóban foglalt célok teljesítéséhez vagy a jogszabályi előírásoknak való megfeleléshez szükséges. Általában a következőket őrizzük meg:</p>
            <ul>
              <li>Időpontfoglalási nyilvántartások: 7 év</li>
              <li>Kapcsolati információk: Amíg törlését nem kéri</li>
              <li>Weboldal analitika: 2 év</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>9. Cookie-k</h2>
            <p>Weboldalunk cookie-kat használ a böngészési élmény javítása érdekében. Cookie beállításait böngészője preferenciáin keresztül vezérelheti. Az alapvető cookie-k a weboldal működéséhez szükségesek és nem kapcsolhatók ki.</p>
          </section>

          <section className={styles.section}>
            <h2>10. Kapcsolati információk</h2>
            <p>Ha kérdései vannak ezzel az adatvédelmi tájékoztatóval kapcsolatban vagy jogait gyakorolni szeretné, keressen minket:</p>
            <p><strong>Email:</strong> rigoeszter.masszazs@gmail.com</p>
            <p><strong>Telefon:</strong> +36 30 714 0591</p>
            <p><strong>Cím:</strong> Taksony u. 1, 1134 Budapest, Magyarország</p>
          </section>

          <section className={styles.section}>
            <h2>11. Tájékoztató módosítása</h2>
            <p>Időről időre frissíthetjük ezt az adatvédelmi tájékoztatót. Jelentős változásokról a weboldalon való közzététellel és a hatálybalépés dátumának frissítésével értesítjük Önt.</p>
            <p><strong>Utolsó frissítés:</strong> {new Date().toLocaleDateString('hu-HU')}</p>
          </section>

          <div className={styles.backLink}>
            <Link href="/" legacyBehavior>
              <a>← Vissza a főoldalra</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataProtection; 