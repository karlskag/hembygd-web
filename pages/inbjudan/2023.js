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
          Inbjudan till hembygdsmöte söndagen den 6 augusti 2023 i Matteröd
        </h2>
        <h3>Kl 10.00</h3>
        <p className={styles.description}>
          Vi träffas i Knutstorp hemma hos Kristin Jönsson och hennes syster Helen Ek.
          <br/>
          Kör vägen Matteröd – Brönnestad. Vid korsningen i Knutstorp - sväng vänster, skylt mot Skyrup.
          Sedan är det den första gården på höger sida (Knutstorp 2891). Kristin och Helen berättar om gårdarna i Lilla Oberöd och sin släktforskning.
          Tag med egen stol! Vi sitter ute i trädgården.
          Efteråt serveras kaffe och smörgåsar i närbelägna Tostarps Pensionat till en kostnad av 75 kr/person.
        </p>
        <h3>Kl 13.30</h3>
        <p className={styles.description}>
          ÅRSMÖTE i Matteröds församlingshem. Sedvanliga årsmötesförhandlingar enligt stadgarna.
        </p>
        <h3>Kl 14.30</h3>
        <p className={styles.description}>
          ÅRSHÖGTID i Matteröds församlingshem.
          <br/>
          “Spelmän i Brönnestad och Matteröd” - Daniel Johansson berättar om sin

          forskning om mer eller mindre bortglömda musikanter.
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