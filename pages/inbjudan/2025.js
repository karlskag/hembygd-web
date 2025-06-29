import styles from "../../styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";
import Image from "../../src/components/Image";

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
          Inbjudan till hembygdsdagen i Matteröd söndagen den 3 augusti 2025
        </h2>
        <h3>Kl 10.00</h3>
        <p className={styles.description}>
          Vi träffas vid Tyringe Skolmuseum Malmövägen 15 i Tyringe (den mindre
          byggnaden direkt till vänster innanför grinden), se skylt.
          <br/>
          Där skall vi inviga utställningen om Matteröds skolor. Ta gärna med bilder
          och berättelser från Din skoltid i Matteröd. Sven-Ingvar Jönsson (f.d. rektor
          Tyringe) guidar och berättar.
        </p>
        <h3>Kl 12.00</h3>
        <p className={styles.description}>
          Föreningen bjuder medlemmarna på lunch på Mikas restaurang
          (Förmedlingscentralen).
          <br/>
          Bindande anmälan senast 27 juli till: 070-438 30 48
          Daniel eller 076-584 04 43 Majvi, skicka gärna SMS, uppge namn och antal.
        </p>
        <h3>Kl 13.30</h3>
        <p className={styles.description}>
          ÅRSMÖTE i Matteröds församlingshem. Sedvanliga årsmötesförhandlingar enligt stadgarna.
        </p>
        <h3>Kl 14.30</h3>
        <p className={styles.description}>
          ÅRSHÖGTID i Matteröds församlingshem.
          <br/>
          Leif Önnerby berättar om sin tid i Matteröd som lärare och bosatt i lärarbostaden.
          <br/>
          Musikmedverkan av “Släkt och osläckt”,
          dvs Anna, Bengt, Olof, Daniel och Tove.
          <br/>
          Ev. tillsammans med Leif Önnerby
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
          Medlemsavgiften frivillig (minst 50 kr) betalas till bankgiro 5120-8486. <span style={{ textDecoration: 'underline' }}>Glöm ej skriva namn!</span>
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