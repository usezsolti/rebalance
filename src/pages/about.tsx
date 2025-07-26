import Image from 'next/image';
import styles from '../styles/About.page.module.css';
import Link from 'next/link';

export default function About() {
  return (
    <div className={styles.fullPage}>
      <div className={styles.pageWrapper}>
        <div className={styles.aboutContainer}>
          {/* Kép */}
          <div className={styles.imageContainer}>
            <Image 
              src="/images/reklám.png"
              alt="Rigó Eszter"
              className={styles.aboutImage}
              width={300}
              height={300}
              priority
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
            </p>
            <p className={styles.aboutParagraph}>
              Sok szeretettel várom minden felfrissülni, relaxálni vágyó vendégemet!
            </p>
            
            {/* Kapcsolat gomb */}
            <div className={styles.buttonContainer}>
              <Link href="/contact" legacyBehavior>
                <a className={styles.contactButton}>Lépjünk kapcsolatba!</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
