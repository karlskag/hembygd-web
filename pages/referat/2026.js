import styles from "../../styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";
import Image from "../../src/components/Image";

const YearlyStory = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Matteröds Hembygdsförening</title>
      </Head>

      <main className={styles.main}>
        <div
          style={{
            paddingBottom: "0.5rem",
            borderBottom: "1px solid #eaeaea",
          }}
        >
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
          Referat från Hembygdsdagen i Matteröd söndagen den 2 augusti 2026
        </h2>

        <p className={styles.description}>
          Dagen inleddes i Tågeröd hos Bengt Nilsson och Marie Karlsson där
          Daniel Johansson hälsade alla välkomna genom att spela en vall-låt på
          kohorn.
          <br />
          Bengt berättade mycket kunnigt och intresseväckande om Tågeröds
          historia alltsedan den danska tiden på 1600-talet då Tågeröd hade
          fyra brukare. Tågeröd drabbades hårt av skånska kriget 1677 då hela
          byn brändes ner. Det tog över 50 år innan kyrkoherde Olof Bring
          började försöka odla upp åkrar och ängar igen. Tågeröd hade varit
          betesmark för hästar och markerna hade växt igen till snårskog.
        </p>

        <p className={styles.description}>
          1814 brann böndernas byggnader ner igen. Else Jeppesdotter begärde
          hjälp av sina släktingar och kusinen Nils Nilsson från Rya kom till
          hjälp. Else tiggde timmer i Finja, Hörja och ända i Vittsjö och satte
          byggare i arbete och fick folk och kreatur under tak så snabbt som
          möjligt. När husen kommit i någorlunda skick tog Nils och Else ut
          lysning.
        </p>

        <p className={styles.description}>
          Sedan gick gården i arv till dottern Johanna och svärsonen Per
          Bengtsson, Isakstorp. Sedan deras son Bengt Persson. Släktingar rådde
          Bengt att avstå jordbruket, varefter egendomen bytte ägare ett par
          gånger innan Vilner Nilsson kom dit 1919. Hans son Einar och sonson
          Gustav tog efterhand över.
          <br />
          Flera av deltagarna hade varit med om att plocka jordgubbar under
          1960 och början av 70-talet på fälten i Tågeröd. Idag brukas markerna
          av Gustavs son Bengt som bedriver ekologisk nötköttsproduktion.
        </p>

        <p className={styles.description}>
          Det hanns även med att bese kvarnhjulet och dammen vid Tågeröds kvarn
          och resterna av två torp. Några hann även titta in i Gustavs
          snickeriverkstad.
        </p>

        <div>
          <div className={styles.imageContainer}>
            <Image
              fullWidth
              url={'/images/hembygdsdagen-2026-tagerod.png'}
              alt={'Deltagare samlade utomhus under Hembygdsdagen 2026'}
            />
          </div>
          <p>
            Bengt Nilsson berättar om gården i Tågeröd (klicka för att förstora)
          </p>
        </div>

        <p className={styles.description}>
          Efter en välsmakande måltid på Tostarps pensionat blev det årsmöte i
          Matteröds församlingshem.
        </p>

        <p className={styles.description}>
          Daniel Johansson avgick som ordförande och i hans ställe valdes Anna
          Skagersten. Bo Nilsson blev vald till sekr. och Maivi Larsson kassör.
          Övriga ledamöter i styrelsen Majlis Risberg och Karl Skagersten.
          <br />
          Daniel avtackades för sina 43 år i styrelsen, varav 22 år som ordf.,
          med en specialgrep som byasnickaren Lennart Nilsson, Deleberga,
          tillverkat. Bo Nilsson framförde föreningens tack till Daniel för hans
          långvariga, entusiasmerande och engagerande arbete i föreningen och
          hoppades att det fortsätter fast kanske i någon annan form än
          styrelsearbete.
        </p>

        <p className={styles.description}>
          Eftermiddagens högtidstalare var riksspelmannen och
          folkmusikforskaren Sven Midgren, Onslunda. Han berättade om Signe
          Wille&apos;n (1884–1951), folkskollärare, kantor och
          samhällsomstörtare i Brösarp.
        </p>

        <p className={styles.description}>
          Hon hade stort intresse för folkmusik och var med och startade det
          första spelmanslaget på Österlen och i Skåne. Hon var en prästdotter
          från Närke som efter examen i Kalmar till lärare och kantor gifte sig
          med läraren Ivar Kjörling 1908. De fick ett barn men Ivar dog i
          tuberkulos 1910. Signe fick tjänst i Västra Bränner skola från
          höstterminen 1910 till vårterminen 1920. Deras barn dog 1911.
        </p>

        <p className={styles.description}>
          Signe gifte om sig 1912 med Johan Thelander, född 1886 i det då
          nybyggda godtemplarhuset i Isakstorp. Johans föräldrar (Thelander
          Johansson-Gustava Nilsson) tog sedan över en gård i Svenstorp efter
          Thelanders föräldrar. Gården brukas idag av Lena och Kennet Nilsson.
          Signe och Johan fick sex barn, varav ett dog efter fyra månader.
        </p>

        <p className={styles.description}>
          Signe var en stor nykterhetsivrare och det kan antas att hon
          engagerade sig i den lokala godtemplarföreningen Logen Viktor
          (1884–1926). Handlaren Joh. N. Thomson var ordf. i föreningen och
          ledde en sångkör. Hans son Rudolf Thomson, som syns på bilden från
          Västra Bränners skola 1910 stående i andra raden till vänster om
          fröken Signe, blev kanske inspirerad av henne att börja spela fiol.
          Denna fiol användes idag av Olof Bergström!
        </p>

        <div>
          <div className={styles.imageContainer}>
            <Image fullWidth url={'/images/v-branners-skola.png'} alt={'V Bränners skola 1910'}/>
          </div>
          <p>
            Västra Bränner skola hösten 1910, klicka på bilden för att förstora.
          </p>
        </div>

        <p className={styles.description}>
          Signes man Johan dog 1926. Signe flyttade till Brösarp och fick en
          kombinerad kantors- och lärartjänst där. Hon samlade in folkmusik och
          notböcker skrivna redan från tidigt 1800-tal. Denna notsamling finns
          idag på Kulturen i Lund dit hon skänkte eller sålde häftena.
        </p>

        <p className={styles.description}>
          Förutom nykterhetsarbetet och folkmusikinsamlandet engagerade hon sig
          i arbetarrörelsen på Österlen. Det hände att hon spelade på dansbanor
          på fredag- och lördagkvällar och på söndagar i kyrkan. Hon tog i
          upptuktelse husbönder som gjort pigor gravida.
        </p>

        <p className={styles.description}>
          Signe fick kritik av skolstyrelsen som skickade henne på
          sinnesundersökning i Lund. Detta klarade hon med toppbetyg. Sedan kom
          hon tillbaka med papper på att hon var fullt frisk. Det kunde däremot
          inte skolstyrelsens ordf. visa upp!
          <br />
          Julen 1951 spelade hon på en skolavslutning. Därefter fick hon en
          hjärtinfarkt och avled kort efteråt.
        </p>

        <p className={styles.description}>
          Sven Midgren och Släktbandet underhöll med flera stycken ur visskatten
          som Signe samlat in, både före, under och efter föredraget. Efter en
          paus för förtäring vid kaffebordet avslutade Släktbandet årets
          hembygdsdag med ytterligare musik.
        </p>

        <div>
          <div className={styles.imageContainer}>
            <Image
              fullWidth
              url={'/images/hembygdsdagen-2026-slaktbandet.png'}
              alt={'Släktbandet spelar för deltagarna under Hembygdsdagen 2026'}
            />
          </div>
          <p>
            Släktbandet tillsammans med Sven Midgren bjuder på underhållning (klicka för att förstora)
          </p>
        </div>

        <p className={styles.description}>
          Referent: Bo Nilsson
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
  );
};

export default YearlyStory;
