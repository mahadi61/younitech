import { useEffect } from "react";

import finguide1 from "/src/assets/Finguide1.png"
import finguide2 from "/src/assets/Finguide2.png"
import finguide3 from "/src/assets/Finguide3.png"



const Finguide = () => {

   useEffect(() => {
      window.scrollTo(0, 0); 
    }, []);
    return (
        <div className="space-y-16 mt-10 mx-auto px-4 sm:px-6 md:px-8 lg:px-32">
  {/* Section 1 */}
  <div className="lg:ml-12">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center lg:ml-10 lg:mr-24">
      {/* Left Image */}
      <div className="flex justify-center">
        <img
          className="w-full max-w-lg object-contain"
          src={finguide1}
          alt="FINGUIDE App Preview"
        />
      </div>

      {/* Right Details */}
      <div className="space-y-4">
        <h1 className="text-2xl sm:text-[28px] lg:text-[32px] text-[rgba(70,138,255,1)] font-plus-jakarta font-bold">
          FINGUIDE: Slimme Boekhouding met een Sterke Identiteit
        </h1>

        <div className="space-y-3 border-b border-slate-200 py-2">
          <div className="flex justify-between items-center px-2">
            <p className="text-base sm:text-lg font-medium text-[rgba(38,50,56,1)]">Category:</p>
            <p className="text-base sm:text-lg font-normal text-[rgba(73,73,73,1)]">UI Design</p>
          </div>

          <div className="space-y-3 border-t border-b border-slate-200 py-3">
            <div className="flex justify-between items-center px-2">
              <p className="text-base sm:text-lg font-medium text-[rgba(38,50,56,1)]">Tools:</p>
              <p className="text-base sm:text-lg font-normal text-[rgba(73,73,73,1)]">Figma</p>
            </div>
          </div>

          <div className="flex justify-between items-center px-2">
            <p className="text-base sm:text-lg font-medium text-[rgba(38,50,56,1)]">Project date:</p>
            <p className="text-base sm:text-lg font-normal text-[rgba(73,73,73,1)]">February, 2020</p>
          </div>

          <div className="border-t border-slate-200 pt-3">
            <div className="flex justify-between items-center px-2">
              <p className="text-base sm:text-lg font-medium text-[rgba(38,50,56,1)]">Share this:</p>
              <p className="text-base sm:text-lg font-normal text-[rgba(73,73,73,1)]">Facebook, Twitter, Linkedin</p>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <button className="relative text-white bg-[#468AFF] px-6 py-2 sm:px-8 sm:py-3 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:bg-[#3570D4] hover:scale-105 active:scale-95 focus:outline-none text-sm sm:text-base">
            Bekijk Live site
          </button>
        </div>
      </div>
    </div>

    {/* Description */}
    <div className="mt-10 space-y-4  ">
      <p className="text-left text-lg sm:text-xl text-[#797979] font-plus-jakarta leading-relaxed">
        In de wereld van financiële software draait het vaak om cijfers, spreadsheets en grafieken. Maar wat als boekhouden niet alleen functioneel, maar ook aantrekkelijk en gebruiksvriendelijk kon zijn? Maak kennis met FINGUIDE – een moderne boekhoudapplicatie die niet alleen krachtig is, maar ook visueel en emotioneel resoneert met gebruikers.
      </p>
    </div>
  </div>

  {/* Section 2 */}
  <div className="space-y-6">
    <div className="flex justify-center lg:justify-start lg:ml-24">
      <img
        className="w-full max-w-lg object-contain"
        src={finguide2}
        alt="FINGUIDE Screenshot"
      />
    </div>
    <div className="space-y-4 ">
      <h2 className="text-xl sm:text-2xl font-semibold text-[rgba(38,50,56,1)]">Waarom FINGUIDE?</h2>
      <p className="text-base sm:text-lg md:text-xl text-[rgba(121,121,121,1)] leading-relaxed">
        Met het groeiende aantal zzp’ers en mkb-bedrijven in Nederland is er een duidelijke behoefte aan toegankelijke, begrijpelijke en visueel aantrekkelijke boekhoudoplossingen. FINGUIDE speelt hierop in met een brandingstrategie die rust, vertrouwen en eenvoud uitstraalt – eigenschappen die in de financiële wereld van groot belang zijn.
      </p>
    </div>
  </div>

  {/* Section 3 */}
  <div className="space-y-6">
    <div className="flex justify-center lg:justify-start lg:ml-24">
      <img
        className="w-full max-w-lg object-contain"
        src={finguide3}
        alt="FINGUIDE Branding"
      />
    </div>
    <div className="space-y-4 ">
      <h2 className="text-xl sm:text-2xl font-semibold text-[rgba(38,50,56,1)]">
        Branding: Vertrouwen, Simpelheid en Toegankelijkheid
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-[rgba(121,121,121,1)] leading-relaxed">
        Boekhouding is voor veel ondernemers een verplichting, geen passie. Daarom is het belangrijk dat de tool die zij gebruiken hen niet overweldigt, maar juist ondersteunt. De branding van FINGUIDE weerspiegelt:
      </p>

      <ul className="list-disc list-inside space-y-2 text-base sm:text-lg md:text-xl text-[rgba(121,121,121,1)]">
        <li>Kleurgebruik: FINGUIDE gebruikt blauw- en grijstonen die rust en vertrouwen uitstralen.</li>
        <li>Gebruiksvriendelijke interface met heldere visuals en intuïtieve navigatie.</li>
        <li>Educatieve content via tutorials en casestudy’s die nieuwe gebruikers wegwijs maken.</li>
      </ul>
    </div>

    <div className="space-y-4 ">
      <h2 className="text-xl sm:text-2xl font-semibold text-[rgba(38,50,56,1)]">
        Functionaliteiten die Ondernemers Echt Helpen
      </h2>
      <ul className="list-disc list-inside space-y-2 text-base sm:text-lg md:text-xl text-[rgba(121,121,121,1)]">
        <li>Automatiseren van administratieve taken zoals facturatie en btw-aangifte.</li>
        <li>Live inzicht in financiële status met duidelijke grafieken en overzichten.</li>
        <li>Cashflowberekeningen en prognoses voor betere financiële planning.</li>
        <li>Slimme belastingadviezen voor het mkb en zzp’ers, op maat gemaakt.</li>
      </ul>
    </div>

    <div className="space-y-4 ">
      <h2 className="text-xl sm:text-2xl font-semibold text-[rgba(38,50,56,1)]">
        Een Merk dat Groeit met de Ondernemer Mee
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-[rgba(121,121,121,1)] leading-relaxed">
        De kracht van FINGUIDE ligt in de combinatie van branding en functionaliteit. Het is niet zomaar een tool, maar een partner in groei. De visuele identiteit sluit aan bij de behoeften van de gebruiker en evolueert mee naarmate hun bedrijf groeit. Dit project is een voorbeeld van hoe goede branding een applicatie kan transformeren tot een waardevol merk.
      </p>
    </div>
  </div>
</div>


    );
};

export default Finguide;