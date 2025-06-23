import styles from "../../styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";

const YearlyStory = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Matteröds Hembygdsförening</title>
        <meta name="description" content="Matteröds Hembygdsförenings hemsida"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className={styles.main}>
        <p className={styles.link}>
          <Link href="/">
            <a>{"< Till startsidan"}</a>
          </Link>
        </p>
        <h2>
          Referat från Hembygdsdagen i Matteröd söndagen den 4 augusti 2024
        </h2>
        <p className={styles.description}>
          Vi startade dagen vid Stora Oberöds gård där Margreth och Bengt Jeppsson visade gården och berättade dess
          historia tillsammans med Majlis Risberg, vars föräldrar arrenderade gården 1951-56.
          Även konstnären Leif Olsson-Lilja har bott på gården. Han har bl a gjort ljusbäraren i Matteröds kyrka och
          konstverket på torget i Tyringe bestående av olika maskindelar.
          Flera av deltagarna bidrog med sina minnen.
          <br/>
          Redan på 1500-talet omtalas Stora Oberöds gård som en gård tillhörande kyrkan och Dalby kloster. På 1660-talet
          hade Jens Michelsen på Hovdala inlöst beskattningsrätten till hela Oberöd.
          På 1700-talet och lång tid framåt var Stora Oberöd förenat med Hovdala och släkten Ehrenborg. Sedan
          arrenderades gården ut till bönder och officerare.
        </p>
        <p className={styles.description}>
          Efter rundvandring på gården ute och inne förflyttade vi oss till det som numera heter Tostarps pensionat.
          Där berättade Majvi Larsson en del om Tostarps både äldre och lite nyare historia.
        </p>
        <p className={styles.description}>
          Tostarpsgården inköptes av Hembygdsföreningens förste ordförande Axel Andersson 1935. Efter andra
          världskrigets slut stod &quot;De gamlas hem&quot; klart att tas i bruk 1947.
          De första åren var systrarna Ebba och Maria Fredriksson föreståndare. Omkring 1970 var Birgitta Holm den som
          förestod verksamheten. Sedermera övergick verksamheten till Andersgården, Hässleholm.
          Hässleholms kommun övertog en period byggnaderna och det har bedrivits missbruksvård och även bostäder för
          flyktingar.
        </p>
        <p className={styles.description}>
          Sedan 2022 har Annelie Johansson köpt och tagit över verksamheten och driver idag Tostarps pensionat.
          Här finns 33 sängar fördelat på 14 rum, möjligheter till konferenser och kurser, äta middag eller beställa
          smörgåstårta, tårta eller andra bakverk.
          Vi (dvs de cirka 40 deltagarna) avnjöt en lunchmåltid bestående av kycklingsallad med pasta och hembakat
          bröd.
        </p>
        <p className={styles.description}>
          Sedan förflyttade vi oss till Matteröds församlingshem där årsmötesförhandlingar tog vid. Kassarapporten
          genomgicks och styrelsen beviljades ansvarsfrihet.
          Årets resultat var gott då anslag minskats och föreningen slipper betala medlemsavgift till Skånes
          hembygdsförbund, då föreningen ej är medlemmar där längre.
          <br/>
          Styrelsen omvaldes och består av Daniel Johansson ordf., Majvi Larsson kassör, Anna Skagersten sekr., Majlis
          Risberg, Bo Nilsson och Karl Skagersten.
          Initiativet från styrelsen att bjuda medlemmarna på lunch under årets högtidsdag mottogs med stor tacksamhet
          med förhoppning om en fortsättning till kommande år.
        </p>
        <p className={styles.description}>
          Vid den efterföljande årshögtiden underhöll gruppen &quot;Släkt och osläckt&quot; med mycket musik och sång. Gruppen
          består av Anna Skagersten dragspel, Bengt Johansson flöjt, Olof Bergström fiol, Daniel Johansson gitarr och
          Tove Gladh fiol.
          Per Alvarsson berättade både lättsamt och mycket engagerat om Matteröds Byalag, dess tillblivelse, Agdas
          stuga och aktiviteter under 30 år.
        </p>
        <p className={styles.description}>
          En dag präglad av oerhört mycket hembygdskärlek avslutades med en unik händelse. Tove Gladh friade till
          Daniel Johansson. Han svarade ja! Medan glädjetårarna strömmade nerför kinderna hos många vidtog
          kaffeservering med hembakade kakor och trevligt gemyt runt borden.
          Med en förhoppning om att ses igen till nästa års hembygdsdag söndagen den 3 augusti uppmanades deltagarna
          att inkomma till styrelsen med förslag på aktiviteter denna dag.
        </p>
        <p className={styles.description}>
          Referent: Bo Nilsson
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

export default YearlyStory