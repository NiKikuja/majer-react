import { Link } from "react-router-dom";
import styles from "./oferta.module.css";
import kafelek0 from "../../assets/kafelek1.png";
import kafelek1 from "../../assets/kafelek2.png";
import kafelek2 from "../../assets/kafelek3.png";
import kafelek3 from "../../assets/kafelek4.png";
import kafelek4 from "../../assets/kafelek5.png";
import kafelek5 from "../../assets/kafelek6.png";

const oferty = [
  { id: 1, title: "Ulotki", price: "Od 100 zł", description: "Projektowanie i drukowanie ulotek dostosowanych do Twojej marki.", 
    features: ["Druk cyfrowy i offsetowy", "Różne formaty i gramatury papieru", "Projekt graficzny w cenie", "Możliwość uszlachetnienia (lakier UV, foliowanie)"], 
    fullDescription: `<strong>Ulotki cięte</strong> to jedno z <strong>najskuteczniejszych narzędzi marketingowych</strong>, które pozwala dotrzeć do szerokiego grona odbiorców w sposób <strong>prosty, a zarazem efektywny</strong>.<br/><br/>

Dzięki <strong>elastycznym opcjom personalizacji</strong>, nasze ulotki pozwalają dostosować wygląd do indywidualnych potrzeb, oferując Ci <strong>pełną kontrolę nad finalnym efektem</strong>.<br/><br/>

<strong>Nasza oferta obejmuje ulotki</strong> w różnych popularnych formatach – <strong>od kompaktowych</strong>, łatwych do rozdania, po <strong>większe wersje</strong>, które sprawdzą się jako <strong>doskonałe narzędzie informacyjne</strong> na eventach czy targach.<br/><br/>

✔️ <strong>Każdy format</strong> został zaprojektowany z myślą o <strong>maksymalnej czytelności oraz estetyce</strong>, aby skutecznie przyciągnąć uwagę Twoich odbiorców.<br/><br/>

<strong>Nasze ulotki drukujemy na papierze:</strong><br/>
✔️ <strong>130 g/m² lub 170 g/m²</strong> – wybierz odpowiednią gramaturę dla swoich potrzeb.<br/>
✔️ <strong>Matowym lub błyszczącym</strong> – w zależności od efektu, jaki chcesz uzyskać.<br/><br/>

<strong>Technologia druku</strong> umożliwia umieszczenie na ulotkach <strong>wszelkich grafik, zdjęć oraz tekstów</strong>, które najlepiej oddadzą charakter Twojej oferty, produktów czy usług.<br/><br/>

<strong>Ulotki cięte</strong> to <strong>niezawodny sposób</strong>, aby skutecznie <strong>komunikować się z potencjalnymi klientami</strong> oraz <strong>promować nadchodzące wydarzenia</strong>.<br/><br/>

<strong>Zamów ulotki cięte już dziś</strong> i zobacz, jak doskonale <strong>wspierają rozwój Twojego biznesu</strong>, zwiększając <strong>rozpoznawalność marki</strong> i <strong>przyciągając nowych klientów</strong>!`
,
    image: kafelek0 },

  { id: 2, title: "Banery reklamowe", price: "Od 30 zł/m²", description: "Drukujemy i projektujemy banery reklamowe odporne na warunki atmosferyczne.", 
    features: ["Druk na materiale odpornym na UV i wodę", "Wzmocnione krawędzie i oczka montażowe", "Możliwość projektowania wielkoformatowego", "Dostawa na terenie całej Polski"], 
    fullDescription: `<strong>Oferujemy wysokiej jakości banery reklamowe</strong>, które doskonale sprawdzą się w każdej kampanii promocyjnej.<br/><br/>
<strong>Banery Standard (510 g/m²)</strong> to ekonomiczne rozwiązanie, idealne do krótkoterminowych kampanii. Wysoka jakość bieli oraz solidna konstrukcja z włóknami 500x500 gwarantują świetną widoczność i trwałość, a ich cena sprawia, że są popularnym wyborem dla firm szukających efektywnego rozwiązania w rozsądnej cenie.<br/>
<strong>Banery STRONG laminowy (510 g/m²)</strong> oferują jeszcze większą odporność dzięki wzmocnionym włóknom 1000x1000, co sprawia, że idealnie nadają się do długotrwałych ekspozycji zewnętrznych. Są odporne na uszkodzenia mechaniczne, warunki atmosferyczne i promieniowanie UV.
<strong>Banery Exclusive (510 g/m²)</strong> to najwyższa klasa produktów reklamowych. Dzięki matowej powierzchni eliminują odbicia światła, zapewniając doskonałą czytelność treści w każdych warunkach oświetleniowych. Wysokiej jakości biel oraz mocna konstrukcja z włóknami 1000x1000 sprawiają, że są idealne do prestiżowych kampanii reklamowych.<br/>
<strong>Siatka MESH (270 g/m²)</strong> to doskonałe rozwiązanie na duże powierzchnie reklamowe. Dzięki perforowanej strukturze materiału, pozwala na przepuszczanie powietrza i światła, jednocześnie zapewniając doskonałą widoczność grafiki. Jest odporna na działanie wiatru, co czyni ją niezawodną w trudnych warunkach zewnętrznych.<br/><br/>
Nasze banery reklamowe charakteryzują się doskonałą jakością druku, są odporne na warunki atmosferyczne, promieniowanie UV i idealnie sprawdzą się w każdej kampanii reklamowej. Dzięki solidnej konstrukcji i szerokiemu wyborowi materiałów, z łatwością dopasujesz je do swoich potrzeb. Zainwestuj w profesjonalne rozwiązania reklamowe, które przyciągną uwagę Twoich klientów!`,
    image: kafelek1 },

  { id: 3, title: "Wizytówki", price: "Od 80 zł/100 szt.", description: "Profesjonalne wizytówki dla Twojej firmy z unikalnym designem.", 
    features: ["Różne rodzaje papieru (matowy, błyszczący, kraft)", "Możliwość złocenia i tłoczenia", "Dwustronny nadruk bez dopłaty", "Szybka realizacja zamówień"], 
    fullDescription: `<strong>Nasze klasyczne wizytówki</strong> to doskonała kombinacja elegancji i profesjonalizmu.<br/><br/>
<strong>Dostępne opcje uszlachetnienia:</strong><br/>
✔️ <strong>Uszlachetnienie standardowe</strong> to klasyczna opcja, bez dodatkowych zabezpieczeń. Jest to wybór ekonomiczny, zachowujący funkcjonalność i prostotę – doskonałe dla osób preferujących minimalistyczny styl.<br/>
✔️ <strong>Folia błysk</strong> nadaje wizytówkom efektowny połysk, który przyciąga uwagę i nadaje im dynamiczny charakter. Idealna dla tych, którzy chcą, by ich wizytówki wyróżniały się w tłumie.<br/>
✔️ <strong>Folia mat</strong> to subtelna elegancja, która emanuje wyrafinowanym stylem. Idealna dla osób, które cenią ponadczasowy minimalizm w połączeniu z prestiżem.<br/><br/>
Drukowane na <strong>kredzie matowej 350g</strong>, która gwarantuje wytrzymałość i gładką powierzchnię, doskonałą do druku w pełnym kolorze. Dzięki niej, Twoje wizytówki zyskają intensywne, wyraziste barwy, które pozostaną nienaganne przez długi czas.<br/><br/>
Bez względu na wybór uszlachetnienia, każda wizytówka wyróżnia się wysoką jakością druku, oddającą najdrobniejsze detale i kolory. Dzięki nowoczesnym maszynom i dbałości o perfekcję, zapewniamy trwałość i odporność na codzienne użytkowanie.
Pamiętaj, że wizytówka to nie tylko sposób na przekazanie danych kontaktowych – to reprezentacja Twojej marki i Ciebie. Zamów teraz, aby zrobić niezapomniane pierwsze wrażenie!
`,
    image: kafelek2 },

  { id: 4, title: "Gadżety reklamowe", price: "Cena zależna od zamówienia", description: "Personalizowane gadżety reklamowe z nadrukiem Twojej firmy.", 
    features: ["Kubki, długopisy, smycze, pendrive'y i więcej", "Nadruk tampodruk, sitodruk, grawer laserowy", "Możliwość zamówienia od małych ilości", "Doskonała jakość i trwałość nadruku"], 
    fullDescription: `<strong>Gadżety reklamowe</strong> to doskonały sposób na <strong>promocję Twojej marki</strong> w sposób <strong>kreatywny i funkcjonalny</strong>.<br/><br/>

    Oferujemy szeroką gamę produktów, które sprawdzą się w każdej kampanii marketingowej – <strong>od praktycznych akcesoriów biurowych</strong>, po <strong>oryginalne prezenty</strong>, które przyciągną uwagę Twoich klientów.<br/><br/> 
    Nasze gadżety reklamowe to <strong>połączenie wysokiej jakości wykonania, użyteczności i estetyki</strong>. Dzięki <strong>pełnej personalizacji</strong>, masz możliwość umieszczenia <strong>logo, hasła reklamowego lub grafiki</strong>, co sprawia, że każdy produkt staje się unikalnym nośnikiem Twojej marki.<br/><br/>
    <strong>Idealne na:</strong><br/>
    ✔️ <strong>Wydarzenia firmowe</strong><br/>
    ✔️ <strong>Targi i konferencje</strong><br/>
    ✔️ <strong>Prezenty dla klientów</strong><br/><br/>
    Nasze gadżety <strong>zwiększają rozpoznawalność marki</strong> i budują <strong>pozytywny wizerunek Twojej firmy</strong>. Oferujemy produkty, które <strong>codziennie będą przypominać o Twojej marce</strong> i pozytywnie wyróżniać ją na tle konkurencji.<br/><br/>
    <strong>Zamów gadżety reklamowe</strong>, które zrobią wrażenie na Twoich klientach i pomogą Ci <strong>wyróżnić się na rynku</strong>!`
    ,
    image: kafelek3 },

  { id: 5, title: "Odzież reklamowa", price: "Cena zależna od zamówienia", description: "Koszulki, bluzy i inne ubrania z nadrukiem lub haftem firmowym.", 
    features: ["Personalizowane nadruki i hafty", "Dostępność różnych materiałów i fasonów", "Odzież robocza i reklamowa", "Odporność na pranie i długotrwałe użytkowanie"], 
    fullDescription: `<strong>Odzież reklamowa</strong> to skuteczny sposób na <strong>promocję Twojej marki</strong> w codziennym życiu.<br/><br/>

Oferujemy <strong>szeroki wybór ubrań</strong>, które można spersonalizować – od <strong>koszulek, bluz i czapek</strong>, po <strong>kurtki i akcesoria</strong>.<br/><br/>

✔️ <strong>Idealna na:</strong><br/>
✔️ <strong>Wydarzenia firmowe</strong> – budowanie spójnego wizerunku marki.<br/>
✔️ <strong>Targi i konferencje</strong> – skuteczna reklama na żywo.<br/>
✔️ <strong>Firmowy dress code</strong> – profesjonalny wygląd Twojego zespołu.<br/><br/>

<strong>Nasza odzież reklamowa</strong> łączy <strong>komfort noszenia</strong> z <strong>wysoką jakością materiałów</strong>. Dzięki możliwości <strong>naniesienia logo lub hasła reklamowego</strong>, staje się <strong>doskonałym nośnikiem Twojej marki</strong>.<br/><br/>

✔️ <strong>Zalety naszej odzieży:</strong><br/>
✔️ <strong>Personalizowane nadruki i hafty</strong> – logo Twojej firmy w najlepszej jakości.<br/>
✔️ <strong>Dostępność różnych materiałów i fasonów</strong> – dopasowane do Twoich potrzeb.<br/>
✔️ <strong>Odzież robocza i reklamowa</strong> – praktyczność i wygoda.<br/>
✔️ <strong>Odporność na pranie i długotrwałe użytkowanie</strong> – trwałość i estetyka na lata.<br/><br/>

<strong>Dzięki szerokiemu wyborowi modeli i kolorów</strong>, możesz dopasować odzież do charakteru swojej firmy i potrzeb kampanii.<br/><br/>

<strong>Odzież reklamowa</strong> to nie tylko <strong>praktyczny element ubioru</strong>, ale także <strong>skuteczny sposób na wyróżnienie się na rynku</strong>.<br/><br/>

<strong>Zamów odzież reklamową</strong>, która pomoże Twojej marce <strong>zaistnieć</strong> i <strong>zyskać nowych zwolenników</strong>!`
,
    image: kafelek4 },

  { id: 6, title: "Usługi graficzne", price: "Cena zależna od zamówienia", description: "Profesjonalne projekty graficzne dla firm i osób prywatnych.", 
    features: ["Logotypy, identyfikacja wizualna", "Projekty materiałów drukowanych i internetowych", "Indywidualne podejście do każdego klienta", "Wysoka jakość i nowoczesny design"], 
    fullDescription: `<strong>Usługi graficzne</strong> to fundament <strong>skutecznej i spójnej komunikacji wizualnej</strong> Twojej marki.<br/><br/>

Oferujemy <strong>kompleksowe rozwiązania graficzne</strong>, które pomogą Ci <strong>wyróżnić się na tle konkurencji</strong> i skutecznie przekazać wartości Twojej firmy.<br/><br/>

<strong>Nasza oferta obejmuje:</strong><br/>
✔️ <strong>Projektowanie logo</strong> – unikalny znak, który stanie się wizytówką Twojej marki.<br/>
✔️ <strong>Tworzenie identyfikacji wizualnej</strong> – spójny wizerunek firmy we wszystkich materiałach reklamowych.<br/>
✔️ <strong>Materiały reklamowe</strong> – banery, plakaty, ulotki, wizytówki i inne materiały drukowane.<br/>
✔️ <strong>Grafiki do mediów społecznościowych i stron internetowych</strong> – nowoczesne projekty, które angażują odbiorców.<br/><br/>

<strong>Indywidualne podejście do każdego projektu</strong> sprawia, że <strong>dbamy o unikalny charakter Twojej marki</strong>. Zajmujemy się każdą częścią procesu:<br/>
✔️ <strong>Od koncepcji</strong> – pomysł i wizja dopasowane do Twojej firmy.<br/>
✔️ <strong>Przez projektowanie</strong> – kreatywne i estetyczne rozwiązania.<br/>
✔️ <strong>Aż po finalną realizację</strong> – gotowe materiały najwyższej jakości.<br/><br/>

<strong>Nasze usługi graficzne</strong> to także gwarancja <strong>wysokiej jakości i terminowości</strong>. Dzięki <strong>nowoczesnym narzędziom</strong> oraz <strong>ścisłej współpracy z klientem</strong>, zapewniamy projekty spełniające najwyższe standardy estetyczne i techniczne.<br/><br/>

✔️ <strong>Przed rozpoczęciem pracy dokładnie omawiamy oczekiwania i cel kampanii</strong>, co pozwala nam stworzyć <strong>skuteczne i efektywne rozwiązania</strong>.<br/><br/>

<strong>Zaufaj naszym usługom graficznym</strong> i stwórz z nami <strong>unikalny wizerunek</strong>, który wyróżni Twoją firmę na rynku.<br/><br/>

<strong>Niezależnie od tego, czy potrzebujesz:</strong><br/>
✔️ <strong>Logo</strong><br/>
✔️ <strong>Identyfikacji wizualnej</strong><br/>
✔️ <strong>Materiałów promujących Twoje usługi</strong><br/><br/>

<strong>Jesteśmy gotowi, by pomóc Ci osiągnąć sukces!</strong> Dzięki naszej <strong>pasji i profesjonalizmowi</strong>, Twoja marka zyska nie tylko <strong>atrakcyjny wygląd</strong>, ale również <strong>silniejszą pozycję na rynku</strong>.`
,
    image: kafelek5 },
];


const Oferta = () => {
  return (
    <div className={styles.maincont}>
      <div className={styles.ofertaList}>
        {oferty.map((oferta) => (
          <div key={oferta.id} className={styles.ofertaContainer}>
            <div className={styles.imageContainer}>
              <img src={oferta.image} alt={oferta.title} />
            </div>
            <h2 className={styles.ofertaTitle}>{oferta.title}</h2>
            <p className={styles.ofertaPrice}>
              Cena: <strong>{oferta.price}</strong>
            </p>
            <p className={styles.ofertaDescription}>{oferta.description}</p>
            <ul className={styles.features}>
              {oferta.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <div className={styles.buttonContainer}>
              <Link to={`/produkt/${oferta.id}`} className={styles.button}>Dowiedz się więcej</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Oferta;
export { oferty };