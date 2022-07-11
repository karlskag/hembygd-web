import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from '/src/components/Image'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Matteröds Hembygdsförening</title>
        <meta name="description" content="Matteröds Hembygdsförenings hemsida" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <div style={{ paddingBottom: '0.5rem', borderBottom: '1px solid #eaeaea' }}>
          <h1 className={styles.title}>
            Matteröds Hembygdsförening
          </h1>
        </div>
        <p className={styles.topMenu}>
          <a href="#news">Aktuellt</a> | <a href="#about">Om föreningen</a> | <a href="#publications">Publikationer</a> | <a href="#contact">Kontakt</a> | <a href="#find">Hitta hit</a>
        </p>

        <h2 id="news">Aktuellt</h2>
        <div style={{paddingTop: '1rem'}}>
          <ul>
            <li>
              <Link href="/inbjudan/2022">
                <a>Inbjudan till hembygdsmöte söndagen den 7 augusti 2022 i Matteröd</a>
              </Link>
            </li>
          </ul>
        </div>

        <h2 id="about">Om föreningen</h2>
        <p className={styles.description}>
          Matteröds hembygdsförening bildades 1921, och de första medlemmarna hade anknytning till missionsförsamlingen i Maglehult-Matteröd. Eftersom flera av dem var utflyttade, ville man på detta sätt hålla kontakten med varandra och med hemsocknen.
        </p>

        <p className={styles.description}>
          Initiativtagare var missionsföreståndare Axel Andersson (f. 1879 i Svenstorp) som också var föreningens första ordförande. Vid sitt hem i Tostarp byggde han upp flera verksamheter; en snickerifabrik, en lägergård med flyktingmottagning och ett äldreboende.
        </p>

        <p className={styles.description}>
          I föreningens första styrelse ingick även Ivar Johansson (f. 1897 i Isakstorp), en hängiven forskare och skriftställare, vars sockenkrönika ”Uppe på åsen” har hjälpt många att hitta sina rötter i matterödsbygden.
        </p>

        <div>
          <div className={styles.imageContainer}>
            <Image url={'/images/ungdomsgrupp.jpg'} alt={'Ungdomsgrupp i Maglehult 1905'} />
            <Image url={'/images/utflykt.jpg'} alt={'Utflykt till hembygdsparken i Broby 1938'} />
          </div>
          <p>
            Bilderna ovan visar en Ungdomsgrupp i Maglehult år 1905 (t.v.) samt en utflykt till hembygdsparken i Broby år 1938.
            Klicka på bilderna för att förstora.
          </p>
        </div>

        <p className={styles.description}>
          Hembygdsföreningen har alltjämt hållit sina möten i Maglehults missionshus.
          Den första söndagen i augusti anordnar föreningen sin årliga hembygdsdag. Den börjar med en utfärd till någon sevärdhet i socknen, och efter sedvanliga årsmötesförhandlingar kommer höjdpunkten, eftermiddagens hembygdsmöte, med inbjudna föredragshållare, musikunderhållning och kaffeservering.
        </p>

        <div>
          <div className={styles.imageContainer}>
            <Image url={'/images/meeting_1.png'} alt={'Mötesbild 1'} />
            <Image url={'/images/meeting_2.png'} alt={'Mötesbild 2'} />
          </div>
          <p>
            Bilderna visar delar av styrelsen (fr. v. Maj-Lis Risberg, Elsie Henriksson, Kurt Henriksson, Bo Nilsson och Daniel Johansson),
            samt hur Kurt Henriksson informerar hembygdsmötet om planerna för höghastighetsbanans sträckning genom Matteröd.
          </p>
        </div>

        <h2 id="publications">Publikationer</h2>
        <p className={styles.description}>
          Matteröds hembygdsförening har gett ut ett par böcker:
        </p>
        <ul>
          <li>Uppe på åsen - <i>Matterödskrönika av Ivar Johansson 1973</i></li>
          <li>ÖDETORP OCH TORPARÖDEN – <i>Om torpen i Matteröds socken  2002</i></li>
        </ul>

        <h2 id="contact">Kontakt</h2>
        <p className={`${styles.description} ${styles.spacedLines}`}>
          <strong>Daniel Johansson</strong>, 0704-383048, <a href = "mailto: nedjson@gmail.com">nedjson@gmail.com</a>
          <br/>
          <strong>Elsie Henriksson</strong>, 0451-53391, <a href = "mailto: kurt.matterod@gmail.com">kurt.matterod@gmail.com</a>
        </p>

        <h2 id="find">Hitta hit</h2>
        <p className={styles.description}>
          <a href="https://maps.app.goo.gl/VmGuG7ATF11aozdd7"> Länk till Google Maps</a>
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!4v1657489178935!6m8!1m7!1s4Q2ijdjF9nZk7wIXSyuohA!2m2!1d56.09356789750282!2d13.61292766849063!3f295.8400949280658!4f3.5505055981682148!5f0.8534524604414567"
          width={'100%'}
          height="500"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade" />
      </main>

      <footer className={styles.footer}>
        Styrelsen genom: Daniel Johansson, tel. 0704-38 30 48, Elsie Henriksson, tel. 0451-533 91
      </footer>
    </div>
  )
}
