import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from '/src/components/Image'
import { useEffect, useState } from "react";

const HERO_SLIDES = [
  '/images/forsamlingshem_1.png',
  '/images/kyrka_2.png',
  '/images/forsamlingshem_2.png',
  '/images/kyrka_1.png',
]

const HERO_SLIDE_COUNT = HERO_SLIDES.length

const TabContainer = ({ tabs }) => {
  const [selectedTab, selectTab] = useState(tabs[0].id)
  const currentContent = tabs.find(({ id }) => id === selectedTab).content

  return <div>
    <div className={styles.tabLabels}>
      {tabs.map(({ id, label }) =>
        <span onClick={() => selectTab(id)} key={id}
              className={`${styles.label} ${styles.tabLabel} ${id === selectedTab ? styles.selected : undefined}`}>
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
  const [heroSlide, setHeroSlide] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined
    }

    const timeoutId = window.setTimeout(() => {
      setHeroSlide((currentSlide) => (currentSlide + 1) % HERO_SLIDE_COUNT)
    }, 20000)

    return () => window.clearTimeout(timeoutId)
  }, [heroSlide])

  return (
    <div className={styles.container}>
      <Head>
        <title>Matteröds Hembygdsförening</title>
        <meta name="description" content="Matteröds Hembygdsförenings hemsida"/>
        <link rel="icon" href="/images/favicon.ico"/>
      </Head>

      <main className={styles.main}>

        <header className={styles.hero} aria-labelledby="page-title">
          <div className={styles.heroSlides} aria-hidden="true">
            {HERO_SLIDES.map((imageUrl, slideIndex) => (
              <div
                key={imageUrl}
                className={`${styles.heroSlide} ${heroSlide === slideIndex ? styles.heroSlideActive : ''}`}
                style={{ backgroundImage: `url('${imageUrl}')` }}
              />
            ))}
          </div>
          <div className={styles.heroControls} role="group" aria-label="Bildspel">
            <button
              type="button"
              className={styles.heroArrow}
              aria-label="Föregående bild"
              onClick={() => setHeroSlide((currentSlide) => (currentSlide - 1 + HERO_SLIDE_COUNT) % HERO_SLIDE_COUNT)}
            >
              <span aria-hidden="true">←</span>
            </button>
            {HERO_SLIDES.map((imageUrl, slideIndex) => (
              <button
                type="button"
                key={imageUrl}
                className={`${styles.heroBullet} ${heroSlide === slideIndex ? styles.heroBulletActive : ''}`}
                aria-label={`Visa bild ${slideIndex + 1}`}
                aria-current={heroSlide === slideIndex ? 'true' : undefined}
                onClick={() => setHeroSlide(slideIndex)}
              />
            ))}
            <button
              type="button"
              className={styles.heroArrow}
              aria-label="Nästa bild"
              onClick={() => setHeroSlide((currentSlide) => (currentSlide + 1) % HERO_SLIDE_COUNT)}
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
          <div className={styles.heroContent}>
            <p className={styles.heroEyebrow}>Sedan 1921</p>
            <h1 className={styles.heroTitle} id="page-title">
              Matteröds Hembygdsförening
            </h1>
          </div>
        </header>
        <nav className={styles.primaryNav} aria-label="Huvudnavigation">
          <button
            type="button"
            className={styles.mobileNavToggle}
            aria-expanded={mobileMenuOpen}
            aria-controls="primary-navigation-links"
            onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
          >
            <span>Meny</span>
            <span
              className={`${styles.mobileNavChevron} ${mobileMenuOpen ? styles.mobileNavChevronOpen : ''}`}
              aria-hidden="true"
            >
              ▾
            </span>
          </button>
          <ul
            className={`${styles.primaryNavList} ${mobileMenuOpen ? styles.primaryNavListOpen : ''}`}
            id="primary-navigation-links"
          >
            <li className={styles.primaryNavItem}>
              <Link className={styles.primaryNavLink} href="/bli-medlem" onClick={() => setMobileMenuOpen(false)}>Bli medlem</Link>
            </li>
            <li className={styles.primaryNavItem}>
              <a className={styles.primaryNavLink} href="#about" onClick={() => setMobileMenuOpen(false)}>Om föreningen</a>
            </li>
            <li className={styles.primaryNavItem}>
              <a className={styles.primaryNavLink} href="#publications" onClick={() => setMobileMenuOpen(false)}>Publikationer</a>
            </li>
            <li className={styles.primaryNavItem}>
              <Link className={styles.primaryNavLink} href="/meetings" onClick={() => setMobileMenuOpen(false)}>Årsmöten</Link>
            </li>
            <li className={styles.primaryNavItem}>
              <a className={styles.primaryNavLink} href="#contact" onClick={() => setMobileMenuOpen(false)}>Kontakt</a>
            </li>
            <li className={styles.primaryNavItem}>
              <a className={styles.primaryNavLink} href="#find" onClick={() => setMobileMenuOpen(false)}>Hitta hit</a>
            </li>
          </ul>
        </nav>

        {/*<TabContainer*/}
        {/*  tabs={[{*/}
        {/*    id: 1,*/}
        {/*    label: 'Aktuellt',*/}
        {/*    content:*/}
        {/*      <ul>*/}
        {/*        <li>*/}
        {/*          <Link href="/referat/2024">*/}
        {/*            <a>Referat från Hembygdsdagen i Matteröd söndagen den 4 augusti 2024</a>*/}
        {/*          </Link>*/}
        {/*        </li>*/}
        {/*        <li>*/}
        {/*          <Link href="/bli-medlem">*/}
        {/*            <a>Bli medlem</a>*/}
        {/*          </Link>*/}
        {/*        </li>*/}
        {/*      </ul>,*/}
        {/*  }, {*/}
        {/*    id: 2,*/}
        {/*    label: 'Senaste dokument',*/}
        {/*    content: <ul>*/}
        {/*      <li>*/}
        {/*        <Link href="documents/protokoll-2024.pdf">*/}
        {/*          <a>Protokoll för årsmöte 4 augusti 2024</a>*/}
        {/*        </Link>*/}
        {/*      </li>*/}
        {/*      <li>*/}
        {/*        <Link href="/documents/stadgar-220807.pdf">*/}
        {/*          <a>Hembygdsföreningens stadgar 2022-08-07</a>*/}
        {/*        </Link>*/}
        {/*      </li>*/}
        {/*    </ul>,*/}
        {/*  }]}/>*/}

        <h2>Aktuellt</h2>
        <div style={{ paddingTop: '25px' }}>
          <ul>
            <li>
              <Link href="/referat/2026">
                Referat från Hembygdsdagen i Matteröd 2026 - Bo Nilsson
              </Link>
            </li>
            <li>
              <Link href="/artiklar/utflykt-2026">
                UTFLYKTSMÅL 2026: Tågeröd - byn som lades i aska
              </Link>
            </li>
          </ul>
        </div>

        <h4 className={styles.label} id="document">Dokument (öppnas som pdf)</h4>
        <ul>
          <li>
            <Link href="documents/protokoll-2025.pdf">
              Protokoll för årsmöte 3 augusti 2025
            </Link>
          </li>
          <li>
            <Link href="/documents/stadgar-220807.pdf">
              Hembygdsföreningens stadgar 2022-08-07
            </Link>
          </li>
        </ul>

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

        <div>
          <div className={styles.imageContainer}>
            <Image fullWidth url={'/images/v-branners-skola.png'} alt={'V Bränners skola 1910'}/>
            <Image fullWidth url={'/images/skolbild-signe.png'} alt={'Västra Bränner skola hösten 1916'}/>
          </div>
          <p>
            Bilder från V Bränners skola. År 1910 (t.v.) samt 1916 (t.h.) med Signe Willén (1884-1951) som lärare.
            Klicka på bilderna för att förstora.
          </p>
        </div>

        <div>
          <div className={styles.imageContainer}>
            <Image fullWidth url={'/images/matterods-skola.png'} alt={'Matteröds skola 1907'}/>
          </div>
          <p>
            Matteröds skola 1907, klicka för att se hela bilden.
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
