import styles from "../styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";
import ContactFooter from "../src/components/Contact";

const Membership = () => {
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

        <p className={styles.link}>
          <Link href="/">
            {"< Till startsidan"}
          </Link>
        </p>
        <h2>
          Bli medlem
        </h2>
        <p className={styles.description}>
          Matteröds Hembygdsförening bildades 1921 och är därmed en av de äldsta.
          Föreningen skall tillvarata bygdens historia vilket hittills gjorts i två böcker: Uppe på åsen
          av Ivar Johansson och Ödetorp och torparöden.
          Föreningen skall verka för att upprätthålla Din kontakt med de nu boende i bygden och de
          som bor på annan ort genom en årlig ”hemvändardag”.
        </p>
        <p className={styles.description}>
          Den årliga hembygdsdagen infaller första söndagen i augusti.
          Dagen inleds med en utflykt i hembygden.
          Efter lunch följer årsmöte i Matteröds församlingshem
          med efterföljande underhållning och kaffeservering.
        </p>
        <p className={styles.description}>
          Medlemsavgiften, frivillig storlek (min. kr 50).
          <br/>
          Kan betalas till bankgiro nr <strong>5120-8486</strong>.
          <br/>
          Skriv namn, adress och ev. E-post.
        </p>
        <p className={styles.description}>
          ALLA HJÄRTLIGT VÄLKOMNA SOM MEDLEMMAR!
        </p>
        <p className={styles.link}>
          <Link href="/">
            {"< Till startsidan"}
          </Link>
        </p>
      </main>
      <ContactFooter/>
    </div>
  )
}

export default Membership
