import "./styles.css";
import "./App.css";
import { useState, useEffect } from "react";


// import { Facebook, Instagram, Phone, Mail } from "lucide-react";

const galleryImages = [
  "/images/one.webp",
  "/images/two.webp",
  "/images/three.webp",
  "/images/four.webp",
];
export default function App() {

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setActiveIndex(index);
  };

  const closeLightbox = () => {
    setActiveIndex(null);
  };

  const showNext = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % galleryImages.length);
  };

  const showPrev = () => {
    if (activeIndex === null) return;
    setActiveIndex(
      (activeIndex - 1 + galleryImages.length) % galleryImages.length
    );
  };

useEffect(() => {
  const handleKey = (e: KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") showNext();
    if (e.key === "ArrowLeft") showPrev();
  };

  window.addEventListener("keydown", handleKey);
  return () => window.removeEventListener("keydown", handleKey);
}, [activeIndex]);


  return (
    <div>
      <header className="topbar">
        {/* <div className="socials">
          <a href="#" target="_blank"><Facebook size={16} /></a>
          <a href="#" target="_blank"><Instagram size={16} /></a>
        </div>

        <div className="contact-info">
          <span><Phone size={14} /> +420 737 813 605</span>
          <span><Mail size={14} /> petr@stereopromotion.cz</span>
        </div> */}
      </header>

      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="line" />
          <h1>MAMMA MIA! PARTY</h1>
          <div className="line" />
        </div>
      </section>

      <section className="content-wrapper">
        <div className="content-panel">
          <h3>O PROJEKTU</h3>
          <p>
            Milujeme filmový muzikál MAMMA MIA! a zároveň jsme vášniví fanoušci skupiny ABBA. Co z téhle kombinace může vzniknout? Jedinečný projekt, ve kterém Vás koncertní formou provedeme bláznivým příběhem mírně střelené Sophie, její lehce excentrické matky Donny, kamarádek Tanyi a Rosie, trojice otců Sama, Harryho, Billa a mnoha dalších.
          </p>
          <p>
            Pojďte s námi navštívit fiktivní řecký ostrov Kalokairi, nechte do sebe proniknout atmosféru letního středomoří, jeho hřejivých barev a omamných vůní. Připomeňte si, jak báječné jsou písničky legendární skupiny ABBA s příchutí odpočinkového příběhu. Pojďte si to užít. Můžete poslouchat, můžete s námi zpívat, můžete třeba i tančit.
          </p>

          <h3>ZPRACOVÁNÍ</h3>
          <p>
            Při přípravě hudby jsme se nechali inspirovat Bennym Andersonem a Björnem Ulvaeusem, jinak výhradními autory repertoáru a mužskou polovinou skupiny ABBA, kteří své písně speciálně pro filmové zpracování oblékli do modernějších aranžmá. S veškerou úctou a respektem k originálům jsme šli v jejich šlépějích a skladby tu a tam upravili tak, jak by to možná dnes udělali oni sami. Přijde vám to jako odvážné tvrzení? Přesvědčte se na vlastní oči a uši.
          </p>
        </div>
      </section>

      <section className="gallery-section">
        <div className="gallery-inner">
          {galleryImages.map((src, i) => (
            <div
              key={i}
              className="gallery-item"
              onClick={() => openLightbox(i)}
            >
              <img src={src} alt="" />
            </div>
          ))}
        </div>
      </section>

      <section className="content-wrapper">
        <div className="content-panel">
          <h3>ZÁBAVA PRO VŠECHNY</h3>
          <p>
            Oblíbené filmové postavy ožívají v našich kostýmech a choreografiích inspirovaných muzikálem. Připravte se na emotivní cestu plnou lásky, přátelství a humoru, kterou Mamma Mia! vypráví. Naše vystoupení je více než jen koncert - je to kompletní Mamma Mia! zážitek. Diváci všech generací se mohou těšit na interaktivní show, kde si společně zazpívají známé refrény a možná i zatančí legendární choreografie z muzikálu. Dopřejte svým hostům či návštěvníkům možnost prožít magii Mamma Mia! na vlastní kůži. Ať už jde o veřejnou nebo soukromou akci, garantujeme, že po našem vystoupení budou všichni odcházet s pocitem, že byli součástí tohoto úžasného příběhu.
          </p>

          <h3>NABÍDKA</h3>
          <p>
            Naše kapela přináší autentický zážitek z muzikálu Mamma Mia! přímo na vaši akci. Ať už pořádáte městské slavnosti, firemní teambuilding, pouť, dětský den, otevření nové restaurace, family day, večírek, narozeniny nebo jinou soukromou oslavu, naše show plná hitů z Mamma Mia! nadchne publikum všech věkových kategorií.
          </p>

          <h3>Varianta A</h3>
          <p>
            Vystoupení v plné délce (cca 100min), ve kterém se můžete těšit na barevnou show plnou kostýmů, rekvizit a choreografií. Ideální například pro firemní eventy.
          </p>

          <h3>Varianta B</h3>
          <p>
            Vystoupení ve zkrácené verzi (cca 60min) v autentických kostýmech. Tato varianta je vhodná pro většinu běžných hudebních produkcí, například festivaly a městské akce. Je méně náročná na časovou přípravu a technické zabezpečení.
          </p>
        </div>
      </section>

      <section className="wide-image-section">
        <img src="/images/static.webp" alt="Band members" />
      </section>


      <section className="contact-section">
        <h2>Kontakt</h2>
        <p>+420 737 813 605</p>
        <p>petr@stereopromotion.cz</p>
      </section>



      {activeIndex !== null && (
        <div className="lightbox">
          <button className="lightbox-close" onClick={closeLightbox}>
            ×
          </button>

          <button className="lightbox-prev" onClick={showPrev}>
            ‹
          </button>

          <img
            src={galleryImages[activeIndex]}
            alt=""
            className="lightbox-image"
          />

          <button className="lightbox-next" onClick={showNext}>
            ›
          </button>
        </div>
      )}
    </div>
  );
}
