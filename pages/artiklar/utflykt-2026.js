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
          Tågeröd - byn som lades i aska (Utflyktsmål 2026)
        </h2>
        <p className={styles.description}>
          Hembygdsföreningen har genom åren gjort besök i gamla Matteröds sockens olika byar. I år besöker vi Tågeröd.
          Där samlas vi hos Bengt Nilsson och Marie Karlsson, i deras trädgård.
          <br/>
          Gården har varit i familjens ägo i flera generationer. Bengts far, Gustav, är en av Matteröds välkända
          byasnickare, som i sin verkstad tillverkat många fina alster.
        </p>
        <p className={styles.description}>
          Tågeröd har en intressant, och ganska väldokumenterad historia ända tillbaka till snapphanetiden, och den stora branden 1677, som ödelade hela byn. Kung Karl XI krävde trohetsed till honom och Sverige, och menade att det borde rensas upp i &quot;illa kända nästen&quot;.
          Efter att Tågeröd hade lagts i aska, ville ingen bo här på 40 år.
          <br/>
          Om detta, och om gården vi besöker, kommer Bengt att berätta.
          <br/>
          För dom som så önskar, blir det även en kort rundvandring i byn.
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