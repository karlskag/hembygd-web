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
            <a>{"< Till startsidan"}</a>
          </Link>
        </p>
        <h2>
          Inbjudan till hembygdsdagen i Matteröd söndagen den 4 augusti 2024
        </h2>
        <h3>Kl 10.00</h3>
        <p className={styles.description}>
          Vi träffas vid Stora Oberöds Gård utmed vägen Skyrup – Hovdala. Parkera
          vid Tostarps Pensionat (vid handikapp kan ett par bilar parkera vid Stora
          Oberöds gård) och gå ca 300 m mot Hovdala.
          <br />
          Där möter Margreth och Bengt Jeppsson som visar och berättar om gården och dess historia.
          Därefter förflyttar vi oss till Tostarps Pensionat där Annelie Johansson tar
          emot och berättar om Tostarpsgårdens historia. Bl.a. var Matteröds
          Hembygdsförenings förste ordförande Axel Andersson ägare till gården för
          90 år sedan.
        </p>
        <h3>Kl 12.00</h3>
        <p className={styles.description}>
          Föreningen bjuder medlemmarna på lunch: kycklingsallad med pasta alt.
          sallad med fetaost och oliver och hembakat bröd på Tostarps Pensionat.
          <br/>
          Bindande anmälan senast 28 juli till: 070-438 30 48 Daniel eller 076-584 04 43
          Majvi, skicka gärna SMS, uppge namn, antal och maträtt.
        </p>
        <h3>Kl 13.30</h3>
        <p className={styles.description}>
          ÅRSMÖTE i Matteröds församlingshem. Sedvanliga årsmötesförhandlingar enligt stadgarna.
        </p>
        <h3>Kl 14.30</h3>
        <p className={styles.description}>
          ÅRSHÖGTID i Matteröds församlingshem.
          <br/>
          Per Alvarsson berättar om Matteröds Byalag som i år firar 30 års jubileum
          med extra mycket aktiviteter.
          <br/>
          Musikmedverkan av “Släkt och osläckt”, dvs Anna, Bengt, Olof, Daniel och Tove.
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
            <a>{"< Till startsidan"}</a>
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