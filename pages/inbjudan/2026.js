import styles from "../../styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";
import Image from "../../src/components/Image";

const YearlyInvitation = () => {
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
          Inbjudan till hembygdsdagen i Matteröd söndagen den 2 augusti 2026
        </h2>
        <h3>Kl 10.00</h3>
        <p className={styles.description}>
          Vi träffas i Tågeröd, Matteröd 2793 hos Marie Karlsson och Bengt Nilsson.
          <br/>
          Där tar familjen, som bott på gården i flera generationer, emot oss. Bengt kommer att berätta om Tågeröds
          hiskeliga historia, ända från
          Snapphanetiden och &quot;den stora branden&quot;, fram till våra dagar.
          <br/>
          En kort rundtur erbjuds också.
        </p>
        <h3>Kl 12.00</h3>
        <p className={styles.description}>
          Föreningen bjuder medlemmarna på lunch: kycklingsallad med pasta alt. grekisk sallad med fetaost och hembakat
          bröd på Tostarps Pensionat
          <br/>
          <br/>
          Bindande anmälan senast 26 juli till:
          <br/>
          Daniel tel. 070-438 30 48 eller
          <br/>
          Majvi tel. 076-584 04 43. Skicka gärna SMS, uppge namn, antal och maträtt.
        </p>
        <h3>Kl 13.30</h3>
        <p className={styles.description}>
          ÅRSMÖTE i Matteröds församlingshem. Sedvanliga årsmötesförhandlingar enligt stadgarna.
        </p>
        <h3>Kl 14.30</h3>
        <p className={styles.description}>
          ÅRSHÖGTID i Matteröds församlingshem.
          <br/>
          <br/>
          Sven Midgren kommer till Matteröd!
          <p>
            Fiolpedagogen, riksspelmannen och folkmusikforskaren Sven Midgren, Onslunda, medverkar vid sommarens
            hembygdsmöte i Matteröd.
            <br/>
            Han kommer att berätta om Signe Willén (1884-1951), folkskollärare, kantor och samhällsomstörtare i Brösarp.
            Hon hade stort intresse för folkmusik och var med och startade det första spelmanslaget på Österlen.
            <br/>
            På 1910-talet var Signe lärare i Västra Brännerna. Hon och familjen bodde då på skolan. Då hette hon
            Kjörling-Thelander i efternamn.
            <br/>
            <br/>
            Sven kommer också att spela låtar ur Signes repertoar, solo och tillsammans med Släktbandet.
          </p>
          Musikmedverkan av “Släktbandet”, dvs Anna, Bengt, Olof, Daniel och Tove.
          <br/>
          <br/>
          Kaffeservering
        </p>
        <p className={styles.description}>
          ALLA HJÄRTLIGT VÄLKOMNA!
          <br/>
          Matteröds Hembygdsförening
        </p>

        <p style={{ paddingBlockStart: 10 }}>
          <span style={{ marginBottom: '20px' }}>Medlemsavgift 2025</span>
          <br/>
          Styrelsen hoppas Du stöttar föreningen med ett fortsatt medlemskap.
          <br/>
          Medlemsavgiften frivillig (minst 50 kr) betalas till bankgiro 5120-8486. <span
          style={{ textDecoration: 'underline' }}>Glöm ej skriva namn!</span>
        </p>

        <div>
          <div className={styles.imageContainer}>
            <Image url={'/images/v-branners-skola.png'} alt={'V Bränners skola 1910'}/>
            <Image url={'/images/matterods-skola.png'} alt={'Matteröds skola 1907'}/>
          </div>
          <p>
            Bilderna ovan visar V Bränners skola 1910 (t.v.) samt Matteröds skola 1907.
            Klicka på bilderna för att förstora.
          </p>
        </div>

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