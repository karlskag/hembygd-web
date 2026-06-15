import styles from "../../styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";

const Article = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Matteröds Hembygdsförening</title>
        <meta name="description" content="Matteröds Hembygdsförenings hemsida"/>
        <link rel="icon" href="/images/favicon.ico"/>
      </Head>

      <main className={styles.main}>
        <div style={{ paddingBottom: '0.5rem', borderBottom: '1px solid #eaeaea' }}>
          <h1 className={styles.title}>
            Matteröds Hembygdsförening
          </h1>
        </div>

        <p className={styles.link}>
          <Link href="/">
            {"< Till startsidan"}
          </Link>
        </p>
        <h2>
          Sven Midgren kommer till Matteröd!
        </h2>
        <p className={styles.description}>
          Fiolpedagogen, riksspelmannen och folkmusikforskaren Sven Midgren, Onslunda,  medverkar vid sommarens hembygdsmöte i Matteröd.
          <br/>
          Han kommer att berätta om Signe Willén (1884-1951), folkskollärare, kantor och samhällsomstörtare i Brösarp. Hon hade stort intresse för folkmusik, och var med och startade det första spelmanslaget på Österlen.
          På 1910-talet bodde Signe i Matteröd och var lärare i Västra Brännerna. Då hette hon Kjörling-Thelander i efternamn.
        </p>
        <p className={styles.description}>
          Sven kommer också att spela låtar ur Signes repertoar, solo och tillsammans med släktbandet.
        </p>
        <p className={styles.link}>
          <Link href="/">
            {"< Till startsidan"}
          </Link>
        </p>
      </main>
      <footer className={styles.footer}>
        Styrelsen genom: Daniel Johansson, tel. 0704-38 30 48, Majvi Larsson, tel. 076-584 04 43
      </footer>
    </div>
  )
}

export default Article