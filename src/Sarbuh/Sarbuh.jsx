import { useEffect } from "react";


import sarburh1 from "../assets/staw1.png"
import sarburh2 from "../assets/staw2.png"
import sarburh3 from "../assets/staw3.png"




const Sarbuh = () => {

   useEffect(() => {
      window.scrollTo(0, 0); 
    }, []);
    return (
       <div className="space-y-16 mt-10 mx-auto px-4 sm:px-6 lg:px-32 max-w-screen-xl">
  {/* Section 1 */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    <div className="flex justify-center">
      <img
        className="w-full max-w-md object-contain"
        src={sarburh1}
        alt="Henna Ghizlan Website Preview"
      />
    </div>

    <div className="space-y-5">
      <h1 className="text-2xl sm:text-3xl text-[rgba(70,138,255,1)] font-plus-jakarta font-bold">
        Van Offline naar Online: De Digitale Transformatie van een Fruithandelaar
      </h1>

      <div className="space-y-3 border-b border-slate-200 py-3">
        <div className="flex justify-between items-center">
          <p className="text-lg font-medium text-[rgba(38,50,56,1)]">Category:</p>
          <p className="text-lg text-[rgba(73,73,73,1)]">UI Design</p>
        </div>
        <div className="border-t border-b border-slate-200 py-3">
          <div className="flex justify-between items-center">
            <p className="text-lg font-medium text-[rgba(38,50,56,1)]">Tools:</p>
            <p className="text-lg text-[rgba(73,73,73,1)]">Figma</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-lg font-medium text-[rgba(38,50,56,1)]">Project date:</p>
          <p className="text-lg text-[rgba(73,73,73,1)]">February, 2020</p>
        </div>
        <div className="border-t border-slate-200 pt-3">
          <div className="flex justify-between items-center">
            <p className="text-lg font-medium text-[rgba(38,50,56,1)]">Share this:</p>
            <p className="text-lg text-[rgba(73,73,73,1)]">Facebook, Twitter, Linkedin</p>
          </div>
        </div>
      </div>

      <div>
        <button className="text-white bg-[#468AFF] px-6 py-3 rounded-lg shadow-lg transition-all hover:bg-[#3570D4] hover:scale-105 active:scale-95 text-sm sm:text-base">
          Bekijk Live site
        </button>
      </div>
    </div>
  </div>

  <div className="text-[rgba(121,121,121,1)] text-lg sm:text-xl leading-relaxed space-y-4">
    <p>
      In een wereld waar digitalisering de norm is, kan het voor traditionele bedrijven een uitdaging zijn om de overstap naar de online markt te maken. Bij Younitech hebben we recentelijk een fruithandelaar geholpen met deze transitie door middel van een fullservice-oplossing op het gebied van branding, marketing en webdesign. Van een volledig geoptimaliseerde webshop tot een doordachte marketingstrategie, we hebben elk aspect aangepakt om zijn business klaar te maken voor de toekomst.
    </p>
  </div>

  {/* Section 2 */}
  <div className="space-y-6">
    <div className="flex justify-center">
      <img
        className="w-full max-w-md object-contain"
        src={sarburh2}
        alt="Bridal Henna"
      />
    </div>
    <div className="space-y-4 text-[rgba(121,121,121,1)] text-lg sm:text-xl leading-relaxed">
      <h1 className="text-[rgba(38,50,56,1)] text-xl sm:text-2xl font-semibold">De Kracht van Branding: Meer dan Alleen een Logo</h1>
      <p>
        Branding is de ziel van een bedrijf. Het gaat veel verder dan een mooi logo of een opvallende huisstijl. Het draait om de identiteit, de waarden en de boodschap die je uit wilt dragen. Voor onze klant hebben we een sterke merkidentiteit ontwikkeld die aansluit bij zijn doelgroep: betrouwbaar, vers en lokaal.
      </p>
      <p>
        Een essentieel onderdeel van de branding was het creëren van een consistente visuele stijl, die doorgevoerd werd in alle uitingen – van de verpakking van de producten tot de website en social media kanalen.
      </p>
    </div>
  </div>

  {/* Section 3 */}
  <div className="space-y-6">
    <div className="space-y-4 text-[rgba(121,121,121,1)] text-lg sm:text-xl leading-relaxed">
      <h1 className="text-[rgba(38,50,56,1)] text-xl sm:text-2xl font-semibold">Marketing: De Balans tussen Gevoel en Data</h1>
      <p>
        Bij Younitech geloven we dat marketing zowel kunst als wetenschap is. Daarom combineren we creatieve storytelling met data-analyse om de juiste doelgroep te bereiken en te betrekken.
      </p>
      <p>Om deze beleving online over te brengen, hebben we gebruikgemaakt van:</p>
      <ul className="list-disc list-inside text-base space-y-2">
        <li>Visuele storytelling met professionele fotografie en video.</li>
        <li>Social media campagnes gericht op engagement en merkbekendheid.</li>
        <li>SEO en SEA strategieën om de zichtbaarheid te vergroten.</li>
        <li>E-mailmarketing en retargeting om klanten te behouden en terug te laten komen.</li>
      </ul>
      <p>
        Wat onze aanpak onderscheidt, is onze focus op een persoonlijke benadering waarbij we luisteren naar de wensen en behoeften van de klant, en deze vertalen naar effectieve online strategieën.
      </p>
    </div>
    <div className="flex justify-center">
      <img
        className="w-full max-w-md object-contain"
        src={sarburh3}
        alt="Bridal Henna"
      />
    </div>
  </div>

  {/* Section 4 */}
  <div className="space-y-6">
    <div className="space-y-4 text-[rgba(121,121,121,1)] text-lg sm:text-xl leading-relaxed">
      <h1 className="text-[rgba(38,50,56,1)] text-xl sm:text-2xl font-semibold">Website Design: Een Perfecte Gebruikerservaring</h1>
      <p>
        Een webshop moet niet alleen visueel aantrekkelijk zijn, maar ook intuïtief en snel in gebruik. Dit zorgt voor een hogere conversie en tevreden klanten.
      </p>
      <p>De belangrijkste aspecten van het webdesign waren:</p>
      <ul className="list-disc list-inside text-base space-y-2">
        <li>Een intuïtieve en snelle gebruikerservaring, met duidelijke navigatie en snelle laadtijden.</li>
        <li>Conversiegericht design met duidelijke call-to-actions en een eenvoudig bestelproces.</li>
        <li>Mobiele optimalisatie, omdat steeds meer klanten via hun smartphone winkelen.</li>
        <li>Geavanceerde productfilters om snel het gewenste product te vinden.</li>
      </ul>
      <p>
        Daarnaast hebben we de webshop geïntegreerd met een betrouwbaar betaalsysteem en logistieke oplossingen voor een naadloze orderafhandeling.
      </p>
      <p><strong>Innovatie Gedreven Door IT, Bedrijfskunde en Wetenschap</strong></p>
      <p>
        Wat Younitech uniek maakt, is onze combinatie van expertise in IT, bedrijfskunde en wetenschappelijke methoden. Hierdoor zijn wij in staat om complexe vraagstukken te vertalen naar praktische oplossingen met meetbare resultaten.
      </p>
      <p>
        We maken gebruik van de nieuwste technologieën en ontwikkelen op maat gemaakte tools om de online groei van onze klanten te versnellen.
      </p>
    </div>
  </div>
</div>


    );
};

export default Sarbuh;