

import henna1 from "/article/landing (1).png"
import henna2 from "/article/bridal henna.png"
import henna3 from "/article/event henna 1.png"
import sweeatble from "../assets/sweettable 1.png"

import { useEffect } from "react";


const Henna = () => {
   useEffect(() => {
      window.scrollTo(0, 0); 
    }, []);
    return (
      <div className="space-y-16 mt-10 mx-auto px-4 sm:px-6 md:px-8 lg:px-32 max-w-screen-xl">
  {/* Section 1 */}
  <div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      {/* Left Image */}
      <div className="flex justify-center">
        <img
          className="w-full max-w-md md:max-w-lg object-contain"
          src={henna1}
          alt="Henna Ghizlan Website Preview"
        />
      </div>

      {/* Right Details */}
      <div className="space-y-4">
        <h1 className="text-[28px] sm:text-[32px] text-[#468AFF] font-plus-jakarta font-bold leading-snug">
          Een Unieke Webshop voor een Henna-Artist: Creativiteit in Digitale Vorm
        </h1>

        {/* Details List */}
        <div className="space-y-3 border-b border-slate-200 py-2">
          <div className="flex justify-between items-center px-2">
            <p className="text-[18px] font-medium text-gray-800">Category:</p>
            <p className="text-[18px] text-gray-700">UI Design</p>
          </div>

          <div className="flex justify-between items-center px-2 border-t border-b border-slate-200 py-3">
            <p className="text-[18px] font-medium text-gray-800">Tools:</p>
            <p className="text-[18px] text-gray-700">Figma</p>
          </div>

          <div className="flex justify-between items-center px-2">
            <p className="text-[18px] font-medium text-gray-800">Project date:</p>
            <p className="text-[18px] text-gray-700">February, 2020</p>
          </div>

          <div className="flex justify-between items-center px-2 border-t border-slate-200 pt-3">
            <p className="text-[18px] font-medium text-gray-800">Share this:</p>
            <p className="text-[18px] text-gray-700">Facebook, Twitter, LinkedIn</p>
          </div>
        </div>

        <div className="mt-5">
          <button className="text-white bg-[#468AFF] px-6 py-3 rounded-lg shadow-lg transition hover:bg-[#3570D4] hover:scale-105 active:scale-95 focus:outline-none text-base">
            Bekijk Live site
          </button>
        </div>
      </div>
    </div>

    {/* Description */}
    <div className="mt-10">
      <p className="text-[20px] sm:text-[22px] text-gray-600 leading-relaxed">
        Voor creatieve artiesten is een standaard webdesign simpelweg niet voldoende. Een Henna-artist wil niet alleen haar vakmanschap tonen via haar werk, maar ook via de uitstraling van haar online aanwezigheid. Daarom was het bij dit project essentieel om een website op maat te ontwikkelen, die niet slechts een kopie was van bestaande sjablonen. De uitdaging? Een platform dat zowel een portfolio als een webshop combineert, zodat klanten eenvoudig zowel diensten als producten kunnen afnemen.
      </p>
    </div>
  </div>

  {/* Section 2 */}
  <div className="space-y-6">
    <div className="flex justify-center">
      <img
        className="w-full max-w-md md:max-w-lg object-contain"
        src={henna2}
        alt="Bridal Henna"
      />
    </div>
    <div>
      <h2 className="text-[22px] font-semibold text-gray-800">Van Concept tot Creatieve Realisatie</h2>
      <p className="text-[20px] sm:text-[22px] text-gray-600 leading-relaxed">
        De eerste stap was om de wensen en visie van de Henna-artist te begrijpen. In nauwe samenwerking met de klant ontwierpen we een website vanaf nul, zonder gebruik te maken van standaard templates. De site moest niet alleen functioneel zijn, maar ook een weerspiegeling vormen van haar artistieke stijl. Het design werd een verlengstuk van haar creativiteit: vloeiende patronen, warme tinten en een intuïtieve gebruikerservaring die haar unieke branding onderstreept.
        <br /><br />
        De website fungeert niet alleen als een portfolio, waarin eerdere werken en projecten schitterend worden weergegeven, maar ook als een webshop waar klanten direct henna-producten en gepersonaliseerde diensten kunnen bestellen. Dit maakt het voor bezoekers eenvoudig om de artistieke expertise van de Henna-artist te ervaren én om direct over te gaan tot aankoop.
      </p>
    </div>
  </div>

  {/* Section 3 */}
  <div className="flex justify-center">
    <img
      className="w-full max-w-md md:max-w-lg object-contain"
      src={henna3}
      alt="Event Henna"
    />
  </div>

  {/* Section 4 */}
  <div className="space-y-6">
    <h2 className="text-[22px] font-semibold text-gray-800">Marketingstrategie voor Langdurig Succes</h2>
    <p className="text-[20px] sm:text-[22px] text-gray-600 leading-relaxed">
      Na de ontwikkeling van de website was het belangrijk dat de marketingstrategie naadloos 
      aansloot op de bestaande branding van de Henna-artist. In plaats van een generieke aanpak, hebben we eerst 
      uitvoerig gekeken naar hoe de artiest zichzelf presenteert via organische content. Haar persoonlijke stijl, 
      tone-of-voice en doelgroep werden in kaart gebracht, waarna we deze inzichten vertaalden naar een effectieve marketingstrategie.
      <br />
      Onze marketingaanpak bestaat uit meerdere lagen, die zowel snelle resultaten als langdurige groei realiseren:
    </p>

    <p className="text-[20px] sm:text-[22px] text-gray-600 font-semibold">1. Directe Impact: Krachtige Social Media Strategie</p>
    <ul className="list-disc list-inside text-[20px] sm:text-[22px] text-gray-600 space-y-1">
      <li>Gerichte advertenties op platforms zoals Instagram en TikTok.</li>
      <li>Visuele storytelling waarbij de Henna-artist centraal staat.</li>
      <li>Interactie met volgers voor engagement en vertrouwen.</li>
      <li>Samenwerkingen met influencers en klanten.</li>
    </ul>

    <p className="text-[20px] sm:text-[22px] text-gray-600 font-semibold">2. Langdurige Groei: SEO en Vindbaarheid</p>
    <ul className="list-disc list-inside text-[20px] sm:text-[22px] text-gray-600 space-y-1">
      <li>SEO-optimalisatie om beter gevonden te worden op Google.</li>
      <li>Sterke contentstrategie via blogs en tutorials.</li>
      <li>Backlinks en samenwerkingen met relevante platforms.</li>
    </ul>

    <p className="text-[20px] sm:text-[22px] text-gray-600 leading-relaxed">
      Door deze strategieën slim te combineren, zorgen we ervoor dat de Henna-artist zowel op korte als op lange termijn groeit.
    </p>
  </div>

  {/* Section 5 */}
  <div className="flex justify-center">
    <img
      className="w-full max-w-md md:max-w-lg object-contain"
      src={sweeatble}
      alt="Sweetable"
    />
  </div>

  <div className="space-y-6">
    <h2 className="text-[22px] font-semibold text-gray-800">Creativiteit, Functionaliteit en Succes</h2>
    <p className="text-[20px] sm:text-[22px] text-gray-600 leading-relaxed">
      Een standaard website voldoet niet voor een artiest die leeft van haar creativiteit. Daarom was het ontwikkelen van een volledig op maat gemaakte webshop en portfolio de juiste keuze. Maar een website alleen is niet genoeg—de marketing moet erop aansluiten, zodat het merk consistent en herkenbaar blijft.
    </p>
    <p className="text-[20px] sm:text-[22px] text-gray-600 leading-relaxed">
      Met een strategische mix van social media marketing en SEO-optimalisatie heeft de Henna-artist nu een krachtige online aanwezigheid die haar werk op een prachtige manier presenteert en zorgt voor groeiende klantenkring en bestellingen.
    </p>
  </div>
</div>


    );
  };
  
  export default Henna;
  