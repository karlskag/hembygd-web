import styles from "../../styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";

export default function Meetings() {
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

        <h2>Årsmöten</h2>
        <p className={styles.description}>
          Här kan ni hitta referat, inbjudningar och protokoll från de senaste årens hembygdsmöten.
          Klicka på länkarna i listan nedan för att öppna sida eller dokument.
        </p>

        <h2>2025</h2>
        <div style={{ paddingTop: '30px' }}>
          <ul>
            <li>
              <Link href="/referat/2025">
                Referat 2025
              </Link>
            </li>
            <li>
              <Link href="/inbjudan/2025">
                Inbjudan 2025
              </Link>
            </li>
          </ul>
        </div>

        <h2>2024</h2>
        <div style={{ paddingTop: '30px' }}>
          <ul>
            <li>
              <Link href="/referat/2024">
                Referat 2024
              </Link>
            </li>
            <li>
              <Link href="/inbjudan/2024">
                Inbjudan 2024
              </Link>
            </li>
            <li>
              <Link href="documents/protokoll-2024.pdf">
                Protokoll 2024 (öppnas som pdf)
              </Link>
            </li>
          </ul>
        </div>

        <h2>2023</h2>
        <div style={{ paddingTop: '30px' }}>
          <ul>
            <li>
              <Link href="/inbjudan/2023">
                Inbjudan 2023
              </Link>
            </li>
          </ul>
        </div>

        <h2>2022</h2>
        <div style={{ paddingTop: '30px' }}>
          <ul>
            <li>
              <Link href="/inbjudan/2022">
                Inbjudan 2022
              </Link>
            </li>
          </ul>
        </div>
      </main>

      <footer className={styles.footer}>
        Styrelsen genom: Daniel Johansson, tel. 0704-38 30 48, Majvi Larsson, tel. 076-584 04 43
      </footer>
    </div>
  )
}