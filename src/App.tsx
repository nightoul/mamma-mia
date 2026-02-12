import "./App.css";
import TopBar from "./Components/TopBar";
import Gallery from "./Components/Gallery";
import Hero from "./Components/Hero";
import BandMembers from "./Components/BandMembers";
import ContactSection from "./Components/ContactSection";



export default function App() {

  
  return (
    <div>

      <TopBar />
      
      <Hero />
      

      <section className="content-wrapper">
        <div className="content-panel">
          <h3>O PROJEKTU</h3>
          <p>
            Milujeme filmový muzikál MAMMA MIA! a zároveň jsme vášniví fanoušci skupiny ABBA. Co z téhle kombinace může vzniknout? Jedinečný projekt, ve kterém Vás koncertní formou provedeme bláznivým příběhem mírně střelené Sophie, její lehce excentrické matky Donny, kamarádek Tanyi a Rosie, trojice otců Sama, Harryho, Billa a mnoha dalších.
          </p>
          <br/>
          <p>
            Pojďte s námi navštívit fiktivní řecký ostrov Kalokairi, nechte do sebe proniknout atmosféru letního středomoří, jeho hřejivých barev a omamných vůní. Připomeňte si, jak báječné jsou písničky legendární skupiny ABBA s příchutí odpočinkového příběhu. Pojďte si to užít. Můžete poslouchat, můžete s námi zpívat, můžete třeba i tančit.
          </p>

          <br/>
          <br/>

          <h3>ZPRACOVÁNÍ</h3>
          <p>
            Při přípravě hudby jsme se nechali inspirovat Bennym Andersonem a Björnem Ulvaeusem, jinak výhradními autory repertoáru a mužskou polovinou skupiny ABBA, kteří své písně speciálně pro filmové zpracování oblékli do modernějších aranžmá. S veškerou úctou a respektem k originálům jsme šli v jejich šlépějích a skladby tu a tam upravili tak, jak by to možná dnes udělali oni sami. Přijde vám to jako odvážné tvrzení? Přesvědčte se na vlastní oči a uši.
          </p>
        </div>
      </section>

      <Gallery />

      <section className="content-wrapper">
        <div className="content-panel">
          <h3>ZÁBAVA PRO VŠECHNY</h3>
          <p>
            Oblíbené filmové postavy ožívají v našich kostýmech a choreografiích inspirovaných muzikálem. Připravte se na emotivní cestu plnou lásky, přátelství a humoru, kterou Mamma Mia! vypráví. Naše vystoupení je více než jen koncert - je to kompletní Mamma Mia! zážitek. Diváci všech generací se mohou těšit na interaktivní show, kde si společně zazpívají známé refrény a možná i zatančí legendární choreografie z muzikálu. Dopřejte svým hostům či návštěvníkům možnost prožít magii Mamma Mia! na vlastní kůži. Ať už jde o veřejnou nebo soukromou akci, garantujeme, že po našem vystoupení budou všichni odcházet s pocitem, že byli součástí tohoto úžasného příběhu.
          </p>

          <br/>
          <br/>

          <h3>NABÍDKA</h3>
          <p>
            Naše kapela přináší autentický zážitek z muzikálu Mamma Mia! přímo na vaši akci. Ať už pořádáte městské slavnosti, firemní teambuilding, pouť, dětský den, otevření nové restaurace, family day, večírek, narozeniny nebo jinou soukromou oslavu, naše show plná hitů z Mamma Mia! nadchne publikum všech věkových kategorií.
          </p>

          <br/>
          <br/>

          <h3>Varianta A</h3>
          <p>
            Vystoupení v plné délce (cca 100min), ve kterém se můžete těšit na barevnou show plnou kostýmů, rekvizit a choreografií. Ideální například pro firemní eventy.
          </p>

          <br/>
          <br/>

          <h3>Varianta B</h3>
          <p>
            Vystoupení ve zkrácené verzi (cca 60min) v autentických kostýmech. Tato varianta je vhodná pro většinu běžných hudebních produkcí, například festivaly a městské akce. Je méně náročná na časovou přípravu a technické zabezpečení.
          </p>
        </div>
      </section>

      <BandMembers />

      <ContactSection />

    </div>
  );
}
