import { useEffect } from "react";

import shift1 from "/src/shassets/shift_guide.png"
import shift2 from "/src/shassets/shift_guide1.png"
import shift3 from "/src/shassets/shift_guide2.png"
import shift4 from "/src/shassets/shift_guide3.png"

const ShiftMode = () => {

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

    return (
        <div className="space-y-16 mt-10 mx-auto px-4 sm:px-6 md:px-8 lg:px-32 max-w-screen-xl">
  {/* Section 1 */}
  <div className="">
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
      {/* Left Image */}
      <div className="flex justify-center">
        <img
          className="w-full max-w-4xl object-contain"
          src={shift1}
          alt="Shiftguide Website Preview"
        />
      </div>

      {/* Right Details */}
      <div className="space-y-4 lg:ml-6">
        <h1 className="text-2xl sm:text-3xl font-plus-jakarta text-[#468AFF] font-bold">
          Shiftguide: De Ultieme Roosterplanning App voor de Uitzendbranche en Multi-Location Bedrijven
        </h1>

        <div className="space-y-3 border border-slate-200 rounded-md p-4">
          <div className="flex justify-between text-sm sm:text-base">
            <p className="font-medium text-slate-800">Category:</p>
            <p className="text-slate-600">UI Design</p>
          </div>
          <div className="flex justify-between text-sm sm:text-base border-t pt-2">
            <p className="font-medium text-slate-800">Tools:</p>
            <p className="text-slate-600">Figma</p>
          </div>
          <div className="flex justify-between text-sm sm:text-base border-t pt-2">
            <p className="font-medium text-slate-800">Project date:</p>
            <p className="text-slate-600">February, 2020</p>
          </div>
          <div className="flex justify-between text-sm sm:text-base border-t pt-2">
            <p className="font-medium text-slate-800">Share this:</p>
            <p className="text-slate-600">Facebook, Twitter, LinkedIn</p>
          </div>
        </div>

        <div>
          <button className="relative text-white bg-[#468AFF] px-6 py-2 sm:px-8 sm:py-3 rounded-lg shadow-lg transition hover:bg-[#3570D4] hover:scale-105 active:scale-95 focus:outline-none text-sm sm:text-base">
            Bekijk Live site
          </button>
        </div>
      </div>
    </div>

    {/* Description */}
    <div className="mt-10">
      <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed font-plus-jakarta">
        In een wereld waar efficiëntie en inzicht in personeelskosten cruciaal zijn, introduceert Younitech Shiftguide: een innovatieve app die de complexiteit van personeelsplanning aanpakt. Speciaal ontworpen voor de uitzendbranche en multi-location bedrijven, biedt deze applicatie niet alleen gebruiksgemak voor werknemers, maar ook uitgebreide controle voor werkgevers.
      </p>
    </div>
  </div>

  {/* Section 2 */}
  <div className="space-y-6">
    <div className="flex justify-center lg:justify-start">
      <img className="w-full max-w-lg object-contain" src={shift2} alt="Shiftguide Screenshot" />
    </div>
    <div className="space-y-4">
      <h1 className="text-xl sm:text-2xl text-slate-800 font-plus-jakarta font-semibold">
        De Kracht van Shiftguide: Meer dan Alleen Roosters
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed font-plus-jakarta">
        Waar veel planningssoftware zich beperkt tot het inplannen van medewerkers, gaat Shiftguide verder. Het systeem is ontwikkeld om niet alleen roosters te beheren, maar ook om een brug te slaan tussen planning en financiën.
      </p>
    </div>
  </div>

  {/* Section 3 */}
  <div className="flex justify-center lg:justify-start">
    <img className="w-full max-w-lg object-contain" src={shift3} alt="Shiftguide Features" />
  </div>
  <div className="space-y-6">
    <div>
      <h2 className="text-xl sm:text-2xl text-slate-800 font-plus-jakarta font-semibold">
        1. Roosterplanning op maat
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed font-plus-jakarta">
        Met Shiftguide kunnen werkgevers moeiteloos personeel inplannen, ongeacht het aantal locaties. Werknemers ontvangen hun diensten via de app en kunnen deze direct accepteren of weigeren.
      </p>
    </div>
    <div>
      <h2 className="text-xl sm:text-2xl text-slate-800 font-plus-jakarta font-semibold">
        2. GPS-gebaseerde in- en uitcheckfunctie
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed font-plus-jakarta">
        Een unieke toevoeging aan Shiftguide is de ingebouwde in- en uitcheckfunctie. Gebaseerd op GPS, maakt deze functie het mogelijk voor werknemers om hun gewerkte uren nauwkeurig bij te houden, wat resulteert in een betrouwbare loonadministratie.
      </p>
    </div>
    <div>
      <h2 className="text-xl sm:text-2xl text-slate-800 font-plus-jakarta font-semibold">
        3. Ziekte- en absentiemeldingen
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed font-plus-jakarta">
        Medewerkers kunnen eenvoudig via de app ziekte of andere onvoorziene omstandigheden melden. Deze meldingen worden direct zichtbaar voor de werkgever, waardoor snelle herplanning mogelijk is.
      </p>
    </div>
    <div>
      <h2 className="text-xl sm:text-2xl text-slate-800 font-plus-jakarta font-semibold">
        4. Integratie met financiële applicaties
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed font-plus-jakarta">
        Shiftguide is niet alleen een planningstool, maar ook een krachtige schakel in het financiële proces. Door koppelingen met financiële software kunnen gewerkte uren automatisch worden omgezet in loonadministratie, waardoor fouten worden geminimaliseerd.
      </p>
    </div>
  </div>

  {/* Section 4 */}
  <div className="flex justify-center lg:justify-start">
    <img className="w-full max-w-lg object-contain" src={shift4} alt="Shiftguide App View" />
  </div>

  {/* Section 5 */}
  <div className="space-y-6">
    <h1 className="text-xl sm:text-2xl text-slate-800 font-plus-jakarta font-semibold">
      Een Oplossing voor het MKB: Betaalbaar en Krachtig
    </h1>
    <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed font-plus-jakarta">
      Veel bestaande roosterplanningstools zijn duur en complex. Shiftguide is speciaal ontwikkeld met het midden- en kleinbedrijf in gedachten. De gebruiksvriendelijke interface en het modulaire systeem maken het toegankelijk én betaalbaar.
    </p>

    <h1 className="text-xl sm:text-2xl text-slate-800 font-plus-jakarta font-semibold">
      Design, Complexiteit en Pragmatiek in Harmonie
    </h1>
    <ul className="list-disc pl-4 text-slate-600 text-base sm:text-lg md:text-xl space-y-2">
      <li>
        <span className="font-semibold text-slate-800">Design:</span> De applicatie straalt eenvoud en professionaliteit uit, met een overzichtelijke indeling die het gebruik intuïtief maakt.
      </li>
      <li>
        <span className="font-semibold text-slate-800">Complexiteit:</span> Ondanks de eenvoudige interface schuilt er een geavanceerd systeem achter dat alle bedrijfsbehoeften ondersteunt.
      </li>
      <li>
        <span className="font-semibold text-slate-800">Pragmatiek:</span> Ontworpen vanuit de praktijk, sluit de app aan bij de dagelijkse processen van bedrijven.
      </li>
    </ul>

    <h1 className="text-xl sm:text-2xl text-slate-800 font-plus-jakarta font-semibold">
      Een Volledige Integratie van Idee tot Realiteit
    </h1>
    <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed font-plus-jakarta">
      Om gebruikers een complete ervaring te bieden, heeft Younitech naast de app ook een bijbehorende website ontwikkeld. Deze dient als informatieportaal én als toegangspunt voor werkgevers die liever via de desktop werken.
    </p>
  </div>
</div>

    );
};

export default ShiftMode;