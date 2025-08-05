import { useEffect } from "react";


import ahoyy1 from "../assets/Onze1.png"
import ahoyy2 from "../assets/Onze2.png"
import ahoyy3 from "../assets/Onze3.png"


const Ahoyy = () => {

   useEffect(() => {
      window.scrollTo(0, 0); 
    }, []);
    return (
        <div className="space-y-16 mt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-32">
  {/* Section 1 */}
  <div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
      {/* Left Image */}
      <div className="flex justify-start">
        <img
          className="w-full max-w-md sm:max-w-lg object-contain"
          src={ahoyy1}
          alt="Henna Ghizlan Website Preview"
        />
      </div>

      {/* Right Details */}
      <div className="text-[28px] sm:text-[32px] text-[#468AFF] font-plus-jakarta font-bold leading-snug">
        <h1 className="text-xl sm:text-2xl text-[rgba(70,138,255,1)] font-plus-jakarta font-bold">
          Onze Marketingstrategie: Slim, Kostenbewust en Effectief
        </h1>

        {/* Details List */}
        <div className="space-y-3 border-b border-slate-200 py-2">
          <div className="flex justify-between items-center">
            <p className="text-base sm:text-lg font-medium text-[rgba(38,50,56,1)]">Category:</p>
            <p className="text-base sm:text-lg text-[rgba(73,73,73,1)]">UI Design</p>
          </div>

          <div className="space-y-3 border-t border-b border-slate-200 py-3">
            <div className="flex justify-between items-center">
              <p className="text-base sm:text-lg font-medium text-[rgba(38,50,56,1)]">Tools:</p>
              <p className="text-base sm:text-lg text-[rgba(73,73,73,1)]">Figma</p>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-base sm:text-lg font-medium text-[rgba(38,50,56,1)]">Project date:</p>
            <p className="text-base sm:text-lg text-[rgba(73,73,73,1)]">February, 2024</p>
          </div>

          <div className="border-t border-slate-200 pt-3">
            <div className="flex justify-between items-center">
              <p className="text-base sm:text-lg font-medium text-[rgba(38,50,56,1)]">Share this:</p>
              <p className="text-base sm:text-lg text-[rgba(73,73,73,1)]">Facebook, Twitter, Linkedin</p>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <a
            href="https://fluentlee.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="relative text-white btn bg-[#468AFF] px-6 py-2 sm:px-8 sm:py-3 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:bg-[#3570D4] hover:scale-105 active:scale-95 focus:outline-none text-sm sm:text-base">
              Bekijk Live site
            </button>
          </a>
        </div>
      </div>
    </div>

    {/* Description */}
    <div className="mt-10 space-y-4">
      <p className="text-[18px] sm:text-[22px] text-[rgba(121,121,121,1)] font-plus-jakarta leading-relaxed">
        In een wereld waar marketingbudgetten vaak de doorslag geven, kiezen wij voor een andere aanpak. Wij geloven niet in het blindweg uitgeven van geld aan dure advertenties, maar in het strategisch inzetten van middelen om maximale impact te genereren. Onze marketingstrategie draait om efficiëntie, ROI (Return on Investment) en ROAS (Return on Ad Spend). We stretchen elke euro zo ver mogelijk en richten ons op slimme manieren om zichtbaarheid en groei te realiseren.
      </p>
    </div>
  </div>

  {/* Section 2 */}
  <div className="space-y-6">
    <div className="flex justify-start">
      <img
        className="w-full max-w-md sm:max-w-lg object-contain"
        src={ahoyy2}
        alt="Bridal Henna"
      />
    </div>
    <div className="space-y-4">
      <h1 className="text-[22px] text-[rgba(38,50,56,1)] font-plus-jakarta font-semibold">SEO: Duurzame Vindbaarheid met Hoog Rendement</h1>
      <p className="text-[18px] sm:text-[22px] text-[rgba(121,121,121,1)] font-plus-jakarta leading-relaxed">
        Een van onze kernstrategieën is zoekmachineoptimalisatie (SEO). In plaats van afhankelijk te zijn van betaalde advertenties, bouwen we merken op door een solide organische vindbaarheid te creëren. Dit doen we door:
      </p>
      <ul className="list-disc list-inside text-left space-y-2">
        <li><span className="text-[18px] sm:text-[22px] text-[rgba(121,121,121,1)]">Contentcreatie: Regelmatige, waardevolle en goed geoptimaliseerde content die zowel klanten als zoekmachines aanspreekt.</span></li>
        <li><span className="text-[18px] sm:text-[22px] text-[rgba(121,121,121,1)]">Technische SEO: Een snelle, gebruiksvriendelijke website met een sterke structuur en mobiele optimalisatie.</span></li>
        <li><span className="text-[18px] sm:text-[22px] text-[rgba(121,121,121,1)]">Linkbuilding: Kwalitatieve backlinks om de autoriteit en zichtbaarheid te vergroten.</span></li>
      </ul>
      <p className="text-[18px] sm:text-[22px] text-[rgba(121,121,121,1)]">SEO is een lange-termijnstrategie, maar wanneer goed uitgevoerd, levert het een duurzame en kosteneffectieve stroom van organisch verkeer op. Dit bespaart uiteindelijk op advertentiekosten en zorgt voor een stabiele groei.</p>
    </div>
  </div>

  {/* Section 3 */}
  <div className="space-y-6">
    <div className="space-y-4">
      <h1 className="text-[22px] text-[rgba(38,50,56,1)] font-plus-jakarta font-semibold">SMMA: Gericht en Meetbaar Succes op Sociale Media</h1>
      <p className="text-[18px] sm:text-[22px] text-[rgba(121,121,121,1)] leading-relaxed">
        Social Media Marketing (SMMA) is een essentieel onderdeel van onze strategie. Hierin combineren we betaalde campagnes met organische content om maximale exposure te genereren.
      </p>
      <ul className="list-disc list-inside text-left space-y-2">
        <li><span className="text-[18px] sm:text-[22px] text-[rgba(121,121,121,1)]">Snelle, agressieve aanpak: In de eerste fase zetten we krachtige advertenties in om zichtbaarheid te vergroten en data te verzamelen.</span></li>
        <li><span className="text-[18px] sm:text-[22px] text-[rgba(121,121,121,1)]">Gerichte targeting: We analyseren onze doelgroep en testen verschillende advertentievarianten om de meest kosteneffectieve strategie te bepalen.</span></li>
        <li><span className="text-[18px] sm:text-[22px] text-[rgba(121,121,121,1)]">Conversiegerichte content: Creatieve posts, reels en interacties om engagement te stimuleren en organische groei te bevorderen.</span></li>
        <li><span className="text-[18px] sm:text-[22px] text-[rgba(121,121,121,1)]">Retargeting en optimalisatie: We hergebruiken verzamelde data om advertenties slimmer en efficiënter te maken. Hierdoor vermijden we verspilling van advertentiebudget en focussen we op hoge ROAS (meer omzet per advertentie-euro).</span></li>
      </ul>
      <p className="text-[18px] sm:text-[22px] text-[rgba(121,121,121,1)] leading-relaxed">SEO is een lange-termijnstrategie, maar wanneer goed uitgevoerd, levert het een duurzame en kosteneffectieve stroom van organisch verkeer op.</p>
    </div>
  </div>

  {/* Section 4 */}
  <div className="space-y-6">
    <div className="space-y-4">
      <h1 className="text-[22px] text-[rgba(38,50,56,1)] font-plus-jakarta font-semibold">Alternatieve Online en Offline Marketing: Slimme Strategieën die Werken</h1>
      <p className="text-[18px] sm:text-[22px] text-[rgba(121,121,121,1)]">Naast SEO en SMMA kijken we altijd naar onconventionele en kostenefficiënte marketingkanalen. Enkele van onze bewezen strategieën:</p>
      <p className="text-[18px] sm:text-[22px]">1. Guerrilla Marketing</p>
      <p className="text-[18px] sm:text-[22px]">Creatieve en onverwachte campagnes die viral kunnen gaan zonder torenhoge kosten.</p>
      <p className="text-[18px] sm:text-[22px]">2. Community Building</p>
      <p className="text-[18px] sm:text-[22px]">Een loyale community is goud waard. Klanten worden de grootste promoters van het merk.</p>
      <p className="text-[18px] sm:text-[22px]">3. Direct Response Marketing</p>
      <p className="text-[18px] sm:text-[22px]">E-mailcampagnes, exclusieve deals en persoonlijke aanbiedingen om directe conversies te stimuleren.</p>
      <p className="text-[18px] sm:text-[22px]">4. Slimme Offline Strategieën</p>
      <ul className="list-disc list-inside space-y-2">
        <li><span className="text-[18px] sm:text-[22px]">Netwerkevenementen en beurzen waar strategische partnerships worden gevormd.</span></li>
        <li><span className="text-[18px] sm:text-[22px]">Lokale samenwerkingen en sponsoring voor gerichte zichtbaarheid.</span></li>
        <li><span className="text-[18px] sm:text-[22px]">Flyers en promotieacties op de juiste locaties voor maximale impact.</span></li>
      </ul>
    </div>
  </div>

  {/* Section 5 */}
  <div className="space-y-6">
    <div className="flex justify-start">
      <img
        className="w-full max-w-md sm:max-w-lg object-contain"
        src={ahoyy3}
        alt="Bridal Henna"
      />
    </div>
    <div className="space-y-4">
      <h1 className="text-[22px] text-[rgba(38,50,56,1)] font-plus-jakarta font-semibold">Maximale Impact met Minimale Kosten</h1>
      <p className="text-[18px] sm:text-[22px] text-[rgba(121,121,121,1)] leading-relaxed">
        Onze marketingstrategie draait om slimme keuzes, data-gestuurde optimalisatie en een efficiënte besteding van budgetten. Door niet klakkeloos te concurreren op dure advertentiekanalen, maar juist te focussen op slimme alternatieve methoden, behalen we maximale impact tegen minimale kosten. Dit stelt ons in staat om niet alleen succesvol, maar ook duurzaam te groeien.
      </p>
    </div>
  </div>
</div>




    );
};

export default Ahoyy;