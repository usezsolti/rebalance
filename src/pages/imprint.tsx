import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/About.module.css';

const Imprint = () => {
  return (
    <>
      <Head>
        <title>Impresszum - REbalance</title>
        <meta name="description" content="Jogi információk és impresszum a REbalance masszázs szolgáltatásokhoz" />
      </Head>
      
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>Impresszum</h1>
          
          <section className={styles.section}>
            <h2>Szolgáltató</h2>
            <p><strong>REbalance</strong></p>
            <p>Rigó Eszter</p>
            <p>Taksony u. 1</p>
            <p>1134 Budapest, Magyarország</p>
          </section>

          <section className={styles.section}>
            <h2>Kapcsolati információk</h2>
            <p><strong>Telefon:</strong> +36 30 714 0591</p>
            <p><strong>Email:</strong> rigoeszter.masszazs@gmail.com</p>
          </section>

          <section className={styles.section}>
            <h2>Szakmai információk</h2>
            <p><strong>Szolgáltatás:</strong> Professzionális masszázs terápia</p>
            <p><strong>Vállalkozás típusa:</strong> Egyéni vállalkozó</p>
          </section>

          <section className={styles.section}>
            <h2>Felelősség korlátozása</h2>
            <p>Az ezen a weboldalon található információk csak általános tájékoztató jellegűek. Bár törekszünk arra, hogy az információk naprakészek és pontosak legyenek, nem vállalunk semmilyen garanciát vagy felelősséget a weboldalon található információk teljességéről, pontosságáról, megbízhatóságáról, alkalmasságáról vagy elérhetőségéről bármilyen célra.</p>
            <p>Az információkra való támaszkodás kizárólag a saját felelősségére történik.</p>
          </section>

          <section className={styles.section}>
            <h2>Szerzői jog</h2>
            <p>A weboldalon található minden tartalom, beleértve a szövegeket, grafikákat, logókat, képeket és szoftvereket, a REbalance tulajdonát képezi és a szerzői jogi törvények védik. A tartalom reprodukálása vagy terjesztése előzetes írásbeli engedély nélkül tilos.</p>
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

export default Imprint; 