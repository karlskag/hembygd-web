import styles from "../styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";

const Membership = () => {
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
          Efter lunch följer årsmöte i Maglehults Missionshus
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

export default Membership