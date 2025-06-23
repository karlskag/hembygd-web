import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from '/src/components/Image'
import { useState } from "react";

const TabContainer = ({ tabs }) => {
  const [selectedTab, selectTab] = useState(tabs[0].id)
  const currentContent = tabs.find(({ id }) => id === selectedTab).content

  return <div>
    <div className={styles.tabLabels}>
      {tabs.map(({ id, label }) =>
        <span onClick={() => selectTab(id)} key={id} className={`${styles.label} ${styles.tabLabel} ${id === selectedTab ? styles.selected : undefined}`}>
          {label}
        </span>
      )}
    </div>
    <div className={styles.tabContent}>
      {currentContent}
    </div>
  </div>
}

export default function Home() {
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
        <p className={styles.topMenu}>
          <a href="#about">Om föreningen</a> | <a href="#publications">Publikationer</a> | <a
          href="#contact">Kontakt</a> | <a href="#find">Hitta hit</a>
        </p>

        <section>
          <TabContainer
            tabs={[{
              id: 1,
              label: 'Aktuellt',
              content:
                <ul>
                  <li>
                    <Link href="/referat/2024">
                      <a>Referat från Hembygdsdagen i Matteröd söndagen den 4 augusti 2024</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/bli-medlem">
                      <a>Bli medlem</a>
                    </Link>
                  </li>
                </ul>,
            }, {
              id: 2,
              label: 'Senaste dokument',
              content: <ul>
                <li>
                  <Link href="documents/protokoll-2024.pdf">
                    <a>Protokoll för årsmöte 4 augusti 2024</a>
                  </Link>
                </li>
                <li>
                  <Link href="/documents/stadgar-220807.pdf">
                    <a>Hembygdsföreningens stadgar 2022-08-07</a>
                  </Link>
                </li>
              </ul>,
            }]}/>
        </section>

        <h2 id="about">Om föreningen</h2>
        <p className={styles.description}>
          Matteröds hembygdsförening bildades 1921, och de första medlemmarna hade anknytning till missionsförsamlingen
          i Maglehult-Matteröd. Eftersom flera av dem var utflyttade, ville man på detta sätt hålla kontakten med
          varandra och med hemsocknen.
        </p>

        <p className={styles.description}>
          Initiativtagare var missionsföreståndare Axel Andersson (f. 1879 i Svenstorp) som också var föreningens första
          ordförande. Vid sitt hem i Tostarp byggde han upp flera verksamheter; en snickerifabrik, en lägergård med
          flyktingmottagning och ett äldreboende.
        </p>

        <p className={styles.description}>
          I föreningens första styrelse ingick även Ivar Johansson (f. 1897 i Isakstorp), en hängiven forskare och
          skriftställare, vars sockenkrönika ”Uppe på åsen” har hjälpt många att hitta sina rötter i matterödsbygden.
        </p>

        <div>
          <div className={styles.imageContainer}>
            <Image url={'/images/ungdomsgrupp.jpg'} alt={'Ungdomsgrupp i Maglehult 1905'}/>
            <Image url={'/images/utflykt.jpg'} alt={'Utflykt till hembygdsparken i Broby 1938'}/>
          </div>
          <p>
            Bilderna ovan visar en Ungdomsgrupp i Maglehult år 1905 (t.v.) samt en utflykt till hembygdsparken i Broby
            år 1938.
            Klicka på bilderna för att förstora.
          </p>
        </div>

        <p className={styles.description}>
          Hembygdsföreningen har alltjämt hållit sina möten i Maglehults missionshus.
          Den första söndagen i augusti anordnar föreningen sin årliga hembygdsdag. Den börjar med en utfärd till någon
          sevärdhet i socknen, och efter sedvanliga årsmötesförhandlingar kommer höjdpunkten, eftermiddagens
          hembygdsmöte, med inbjudna föredragshållare, musikunderhållning och kaffeservering.
        </p>

        <div>
          <div className={styles.imageContainer}>
            <Image url={'/images/meeting_1.jpg'} alt={'Mötesbild 1'}/>
            <Image url={'/images/meeting_2.jpg'} alt={'Mötesbild 2'}/>
          </div>
          <p>
            Bilderna visar delar av styrelsen (fr. v. Maj-Lis Risberg, Elsie Henriksson, Kurt Henriksson, Bo Nilsson och
            Daniel Johansson),
            samt hur Kurt Henriksson informerar hembygdsmötet om planerna för höghastighetsbanans sträckning genom
            Matteröd.
          </p>
        </div>

        <h2 id="publications">Publikationer</h2>
        <p className={styles.description}>
          Matteröds hembygdsförening har gett ut ett par böcker:
        </p>
        <ul>
          <li>Uppe på åsen - <i>Matterödskrönika av Ivar Johansson 1973</i></li>
          <li>ÖDETORP OCH TORPARÖDEN – <i>Om torpen i Matteröds socken 2002</i></li>
        </ul>

        <h2 id="contact">Kontakt</h2>
        <p className={`${styles.description} ${styles.spacedLines}`}>
          <strong>Daniel Johansson</strong>, 0704-383048, <a href="mailto: nedjson@gmail.com">nedjson@gmail.com</a>
          <br/>
          <strong>Majvi Larsson</strong>, 076-5840443, <a href="mailto: majvi@accessdenied.nu">majvi@accessdenied.nu</a>
        </p>

        <h2 id="find">Hitta hit</h2>
        <p className={styles.description}>
          <a href="https://maps.app.goo.gl/4J9C2hYs5h9nrRu47"> Länk till Google Maps</a>
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!4v1719176670804!6m8!1m7!1s5bfw2wKh2eORryma7LAKXg!2m2!1d56.11301386768444!2d13.62786564693437!3f260.9540624019702!4f9.06008059848567!5f1.1638966841152951"
          width={'100%'}
          height="500"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"/>
      </main>

      <footer className={styles.footer}>
        Styrelsen genom: Daniel Johansson, tel. 0704-38 30 48, Majvi Larsson, tel. 076-584 04 43
      </footer>
    </div>
  )
}
