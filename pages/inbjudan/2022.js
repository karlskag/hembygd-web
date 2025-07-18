import styles from "../../styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";

const YearlyInvitation = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Matteröds Hembygdsförening</title>
        <meta name="description" content="Matteröds Hembygdsförenings hemsida" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p className={styles.link}>
          <Link href="/">
            {"< Till startsidan"}
          </Link>
        </p>
        <h2>
          Inbjudan till hembygdsmöte söndagen den 7 augusti 2022 i Matteröd
        </h2>
        <h3>Kl 10.00</h3>
        <p className={styles.description}>
          Vi träffas i Matteröd-Svenstorp hemma hos Ingela och Per Kreutz.
          <br/>
          Kör vägen Tyringe – Norra Rörum. Efter ca 5 km kör mot Sösdala ca 3 km,
          Ingela och Per berättar om sin 200 år gamla gård.
          Vi gör en kort vandring med guidning av Per.
          Efteråt rekommenderas ett besök på Café Lövet i Myrarp som serverar kaffe med goda smörgåsar och kakor. Öppet för oss annars är cafèet stängt i sommar.
        </p>
        <h3>Kl 13.30</h3>
        <p className={styles.description}>
          ÅRSMÖTE i Maglehults Missionshus. Sedvanliga årsmötesförhandlingar enligt stadgarna.
        </p>
        <h3>Kl 14.30</h3>
        <p className={styles.description}>
          ÅRSHÖGTID i Maglehults Missionshus.
          <br/>
          Glada Getens Gårdsmejeri, Victoria & Henrik kommer och berättar om verksamheten och den kidnappade geten Getrud.
          <br/>
          Musikmedverkan av Släktbandet, dvs Anna, Bengt, Olof och Daniel
          <br/>
          Kaffeservering
        </p>
        <p className={styles.description}>
          ALLA HJÄRTLIGT VÄLKOMNA!
          <br/>
          Matteröds Hembygdsförening
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

export default YearlyInvitation