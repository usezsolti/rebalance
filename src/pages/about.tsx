import Image from 'next/image';
import styles from '../styles/About.page.module.css';
import Link from 'next/link';


export default function About() {
  return (
    <div className={styles.aboutContainer}>
      {/* Kép */}
      <div className={styles.imageContainer}>
      <Image 
            src="/images/reklám.png" // A kép elérési útja a public mappában
            alt="Rigó Eszter"
            className={styles.aboutImage}
            width={250} // Az eredeti kép szélessége
            height={300} // Az eredeti kép magassága
          />
      </div>

      {/* Szöveg */}
      <div className={styles.aboutText}>
            <h2>Rigó Eszter</h2>
            <p className={styles.aboutParagraph}>
                  Rigó Eszter okleveles masszőr vagyok. 2017 óta dolgozom masszőrként. Több éves tapasztalatomat gyógyfürdőben, kórházban, valamint magánredelőben szereztem.
            </p>
            <p className={styles.aboutParagraph}>
                  Fő célom, hogy a masszázzsal a hozzám forduló vendégek számára professzionális kezeléseket nyújthassak, így hozzásegíthessem őket problémáik komplexebb megértéséhez, ezáltal életminőségük javulásához.
                  Sok szeretettel várom minden felfrissülni, relaxálni vágyó vendégemet!
            </p>
            <p className={styles.aboutParagraph}>
                  Sok szeretettel várom minden felfrissülni, relaxálni vágyó vendégemet!
            </p>
            
            {/* Új gomb, ami a Kapcsolat oldalra irányít */}
            <Link href="/contact">
              <button className={styles.contactButton}>Lépjünk kapcsolatba!</button>
            </Link>
          </div>
    </div>
  );
}
