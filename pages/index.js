import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Matteröds Hembygdsförening</title>
        <meta name="description" content="Matteröds Hembygdsförenings hemsida" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>
          Matteröds Hembygdsförening
        </h1>

        <h2>Aktuellt</h2>
        <div style={{paddingTop: '1rem'}}>
          <ul>
            <li>
              <Link href="/inbjudan/2022">
                <a>Inbjudan till hembygdsmöte söndagen den 7 augusti 2022 i Matteröd</a>
              </Link>
            </li>
          </ul>
        </div>

        <h2>Om föreningen</h2>
        <p className={styles.description}>
          Matteröds hembygdsförening bildades 1921, och de första medlemmarna hade anknytning till missionsförsamlingen i Maglehult-Matteröd. Eftersom flera av dem var utflyttade, ville man på detta sätt hålla kontakten med varandra och med hemsocknen.
        </p>

        <p className={styles.description}>
          Initiativtagare var missionsföreståndare Axel Andersson (f. 1879 i Svenstorp) som också var föreningens första ordförande. Vid sitt hem i Tostarp byggde han upp flera verksamheter; en snickerifabrik, en lägergård med flyktingmottagning och ett äldreboende.
        </p>

        <p className={styles.description}>
          I föreningens första styrelse ingick även Ivar Johansson (f. 1897 i Isakstorp), en hängiven forskare och skriftställare, vars sockenkrönika ”Uppe på åsen” har hjälpt många att hitta sina rötter i matterödsbygden.
        </p>

        <p className={styles.description}>
          Hembygdsföreningen har alltjämt hållit sina möten i Maglehults missionshus.
          Den första söndagen i augusti anordnar föreningen sin årliga hembygdsdag. Den börjar med en utfärd till någon sevärdhet i socknen, och efter sedvanliga årsmötesförhandlingar kommer höjdpunkten, eftermiddagens hembygdsmöte, med inbjudna föredragshållare, musikunderhållning och kaffeservering.
        </p>

        <h2>Publikationer</h2>
        <p className={styles.description}>
          Matteröds hembygdsförening har gett ut ett par böcker:
        </p>
        <ul>
          <li>Uppe på åsen - <i>Matterödskrönika av Ivar Johansson 1973</i></li>
          <li>ÖDETORP OCH TORPARÖDEN – <i>Om torpen i Matteröds socken  2002</i></li>
        </ul>

        <h2>Kontakt</h2>
        <p className={`${styles.description} ${styles.spacedLines}`}>
          <strong>Daniel Johansson</strong>, 0704-383048, <a href = "mailto: nedjson@gmail.com">nedjson@gmail.com</a>
          <br/>
          <strong>Elsie Henriksson</strong>, 0451-53391, <a href = "mailto: kurt.matterod@gmail.com">kurt.matterod@gmail.com</a>
        </p>
      </main>

      <footer className={styles.footer}>
        Styrelsen genom: Daniel Johansson, tel. 0704-38 30 48, Elsie Henriksson, tel. 0451-533 91
      </footer>
    </div>
  )
}
