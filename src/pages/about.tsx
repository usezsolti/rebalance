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
              <strong>2017-ben végeztem okleveles Gyógy- és sportmasszőrként.</strong> Tapasztalataimat <strong>Szent Gellért Gyógyfürdőben </strong>
              szereztem, ahol <strong>reumatológiai és ortopédiai megbetegedések kezelésével foglalkoztam.</strong>
            </p>
            <p className={styles.aboutParagraph}>
              <strong>Ergoterapeutaként 2019-ben végeztem</strong>, először a <strong>Szent János Kórházban</strong> 
              , <strong>később a Szent Margit Kórház mozgásszervi rehabilitációs osztályán ergoterápiás foglalkozásokat tartottam. </strong>
              Az itt szerzett tapasztalataimmal szeretnék segíteni a stroke-on átesett, illetve szerezett agysérüléssel küzdő betegeknek.
            </p>
            <p className={styles.aboutParagraph}>
              <strong>Fő profilom a neurológiai betegségek rehabilitációja. </strong>
              A fogalalkozásaim során felső végtagi kis- és nagy ízületi mozgásokat, 
              a finommotorikus mozgásokat, a kognitív- és önellátási funkciókat fejlesztem.
            </p>
            <p className={styles.aboutParagraph}>
              <strong>Fontosnak tartom szaktudásom folyamatos bővítését, fejlesztését, hogy páciensem számára professzionális kezeléseket nyújthassak
                </strong>, hozzásegíthessem őket problémáik jobb megértéséhez, ezáltal <strong>életminőségük javulásához.</strong>
            </p>
            
            {/* Új gomb, ami a Kapcsolat oldalra irányít */}
            <Link href="/contact">
              <button className={styles.contactButton}>Lépjünk kapcsolatba!</button>
            </Link>
          </div>
    </div>
  );
}
