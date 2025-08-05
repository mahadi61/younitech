//import { FaChevronDown} from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import Select from "react-select";
import bg from "../assets/BrandPrice.jpg";
import das from "../assets/das.png";
//import emailjs from '@emailjs/browser';
//import Swal from 'sweetalert2'
import emailjs from "@emailjs/browser";
import { format } from "date-fns";
import { Upload } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PrijzenBranding = () => {
  // const showAlert=()=>{
  //     Swal.fire({
  //       title: "Bedankt voor je aanvraag!",
  //       text: "We hebben je gegevens ontvangen en sturen je binnenkort een offerte. Mocht je vragen hebben, neem gerust contact met ons op.",
  //       icon: "success"
  //     });
  //   }

  const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm('service_hxxv27j','template_a2312ql', form.current, {
  //       publicKey: 'Z3HTMkKpJIM22rfNm',
  //     })
  //     .then(
  //       () => {
  //         console.log('SUCCESS!');
  //       },
  //       (error) => {
  //         console.log('FAILED...', error.text);
  //       },
  //     );
  // };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Left side checkbox

  // const [selectedGender, setSelectedGender] = useState({
  //   men: false,
  //   women: false,
  //   both: false
  // });

  // const handleChangee = (e) => {
  //   const { name, checked } = e.target;
  //   setSelectedGender((prev) => ({
  //     ...prev,
  //     [name]: checked,
  //   }));
  // };

  // left side file select 1

  const fileTakeRef = useRef(null);

  const handleClick = () => {
    fileTakeRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("Bestand gekozen:", file.name);
      // Handle upload logic here
    }
  };

  //  for 2
  const fileSpiRef = useRef(null);

  const handleSpiClick = () => {
    fileSpiRef.current.click();
  };

  const handleSpiChange = (e) => {
    const filet = e.target.files[0];
    if (filet) {
      console.log("Bestand gekozen:", filet.name);
      // Handle upload logic here
    }
  };
  //  for 3
  const fileInRef = useRef(null);

  const handleInClick = () => {
    fileInRef.current.click();
  };

  const handleFChange = (e) => {
    const fileth = e.target.files[0];
    if (fileth) {
      console.log("Bestand gekozen:", fileth.name);
      // Handle upload logic here
    }
  };

  // date select

  const [selectedDate, setSelectedDate] = useState(null);

  // Dropdown 1

  // const [brand, setSubjectBrand] = useState('');

  // const brands = [
  //   " Visuele Identiteit (logo, kleuren, typografie, huisstijl)",
  //   "Digitale Branding (website/webshop design, social media visuals)",
  //   "Corporate Branding (merkstrategie, positionering, storytelling)",
  //   " Product Branding (verpakking, campagne visuals, promotiemateriaal)",
  //   "Employer Branding (werkgeversimago, recruitment branding)",

  // ];

  const brandOptions = [
    {
      value: "Visuele Identiteit (logo, kleuren, typografie, huisstijl)",
      label: "Visuele Identiteit (logo, kleuren, typografie, huisstijl)",
    },
    {
      value: "Digitale Branding (website/webshop design, social media visuals)",
      label: "Digitale Branding (website/webshop design, social media visuals)",
    },
    {
      value: "Corporate Branding (merkstrategie, positionering, storytelling)",
      label: "Corporate Branding (merkstrategie, positionering, storytelling)",
    },
    {
      value:
        "Product Branding (verpakking, campagne visuals, promotiemateriaal)",
      label:
        "Product Branding (verpakking, campagne visuals, promotiemateriaal)",
    },
    {
      value: "Employer Branding (werkgeversimago, recruitment branding)",
      label: "Employer Branding (werkgeversimago, recruitment branding)",
    },
  ];

  const [selectedBrand, setSelectedBrand] = useState("");

  const handleBrand = (selectedOptions) => {
    setSelectedBrand(selectedOptions);
  };

  // Dropdown 2

  // const [doel, setSubjectDoel] = useState('');

  // const doels = [
  //   " B2B (Bedrijven & Ondernemers)",
  //   "B2C (Consumenten & Retail)",
  //   "E-commerce & Webshops",
  //   " Startups & Scale-ups",
  //   "Lokale & Dienstverlenende bedrijven",
  //   "High-end & Luxe merken"

  // ];

  const doelOptions = [
    {
      value: "B2B (Bedrijven & Ondernemers)",
      label: "B2B (Bedrijven & Ondernemers)",
    },
    {
      value: "B2C (Consumenten & Retail)",
      label: "B2C (Consumenten & Retail)",
    },
    { value: "E-commerce & Webshops", label: "E-commerce & Webshops" },
    { value: "Startups & Scale-ups", label: "Startups & Scale-ups" },
    {
      value: "Lokale & Dienstverlenende bedrijven",
      label: "Lokale & Dienstverlenende bedrijven",
    },
  ];

  const [selectedDoel, setSelectedDoel] = useState("");

  const handleDoel = (selectedOptions) => {
    setSelectedDoel(selectedOptions);
  };

  // Dropdown 3

  // const [age, setSubjectAge] = useState('');

  // const ages = [
  //   " 0-16 jaar",
  //   "16-21 jaar",
  //   "21-35 Jaar",
  //   " 35-50 jaar",
  //   "50-65 jaar",
  //   "65+"

  // ];

  const leeftOptions = [
    { value: "0-16 jaar", label: "0-16 jaar" },
    { value: "16-21 jaar", label: "16-21 jaar" },
    { value: "21-35 Jaar", label: "21-35 Jaar" },
    { value: "35-50 jaar", label: "35-50 jaar" },
    { value: "50-65 jaar", label: "50-65 jaar" },
    { value: "65+", label: "65+" },
  ];

  const [selectedLeeft, setSelectedLeeft] = useState("");

  const handleLeeft = (selectedOptions) => {
    setSelectedLeeft(selectedOptions);
  };

  // Dropdown 4

  // const [begroting, setSubjectBegroting] = useState('');

  // const begrotings = [
  //   "€1.000 - €5.000 (Basisbranding & logo-ontwerp)",
  //   "€5.000 - €10.000 (Uitgebreide branding & strategie)",
  //   " €10.000+ (Complete merkstrategie + digitale branding)",

  // ];

  const begrotingOptions = [
    {
      value: "€1.000 - €5.000 (Basisbranding & logo-ontwerp)",
      label: "€1.000 - €5.000 (Basisbranding & logo-ontwerp)",
    },
    {
      value: "€5.000 - €10.000 (Uitgebreide branding & strategie)",
      label: "€5.000 - €10.000 (Uitgebreide branding & strategie)",
    },
    {
      value: " €10.000+ (Complete merkstrategie + digitale branding)",
      label: " €10.000+ (Complete merkstrategie + digitale branding)",
    },
  ];

  const [selectedBegroting, setSelectedBegroting] = useState("");

  const handleBegroting = (selectedOptions) => {
    setSelectedBegroting(selectedOptions);
  };

  // Dropdown 5

  const genOptions = [
    { value: "man", label: "Man" },
    { value: "vrouw", label: "Vrouw" },
    { value: "beide", label: "Beide" },
  ];

  const [selectedGen, setSelectedGen] = useState("");

  const handleGen = (selectedOptions) => {
    setSelectedGen(selectedOptions);
  };

  {
    /* Form validation start*/
  }

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const noErrors = Object.keys(errors).length === 0;
    const allFilled = Object.values(formData).every(
      (field) => field.trim() !== ""
    );
    setIsFormValid(noErrors && allFilled);
  }, [errors, formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let fieldErrors = { ...errors };

    if (name === "name") {
      if (!value.trim()) {
        fieldErrors.name = "Name is required";
      } else {
        delete fieldErrors.name;
      }
    }

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value.trim()) {
        fieldErrors.email = "Email is required";
      } else if (!emailRegex.test(value)) {
        fieldErrors.email = "Invalid email format";
      } else {
        delete fieldErrors.email;
      }
    }

    setErrors(fieldErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_adb605b", "template_31qworp", form.current, {
        publicKey: "zVpdm4YG_4bymkiyw",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    if (isFormValid) {
      alert("Form submitted successfully!");

      const form = e.target;

      const name = form.name.value;
      const cname = form.cname.value;
      const email = form.email.value;
      const telephone = form.telephone.value;
      const theams = form.theams.value;
      const file = form.file.value;
      const inspiratie = form.inspiratie.value;
      const filet = form.filet.value;
      const eventuele = form.eventuele.value;
      //const branding = form.branding.value;
      const korte = form.korte.value;
      //const doelgroep = form.doelgroep.value;
      //const ages = form.ages.value;

      const huidige = form.huidige.value;
      const fileth = form.fileth.value;
      const message = form.message.value;
      const gewenste = form.gewenste.value;
      const merkbericht = form.merkbericht.value;
      //const bereik  = form.bereik.value;
      //const voltoo = form.voltoo.value;

      const formattedDate = selectedDate
        ? format(selectedDate, "dd-MM-yyyy")
        : null;
      // const gender = Object.keys(selectedGender).filter(g => selectedGender[g]);

      // Multiple values
      const selectedBrandValues = selectedBrand.map((option) => option.value);
      const selectedDoelValues = selectedDoel.map((option) => option.value);
      const selectedLeeftValues = selectedLeeft.map((option) => option.value);
      const selectedGenValues = selectedGen.map((option) => option.value);

      // single values
      const selectedBegValue = selectedBegroting
        ? selectedBegroting.value
        : null;

      const formValue = {
        name,
        cname,
        email,
        telephone,
        theams,
        file,
        inspiratie,
        filet,
        eventuele,
        //branding,
        korte,
        //ages,
        huidige,
        gewenste,
        message,
        fileth,
        //doelgroep,
        merkbericht,
        //bereik ,
        //voltoo,
        formattedDate,
        selectedBrandValues,
        selectedDoelValues,
        selectedLeeftValues,
        selectedGenValues,
        selectedBegValue,
        formData,

        // gender Add gender array here
      };

      // console.log(formValue);

      fetch(`${import.meta.env.VITE_API_URL}/forms`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formValue),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });

      form.reset();
    }
  };

  {
    /* Form validation end*/
  }

  return (
    <>
      <div className="bg-[#F5F5F5] w-full flex flex-col items-center py-16">
        <h1 className="text-xl font-bold text-gray-800">
          Branding Prijsplannen
        </h1>
        <h1 className="flex items-center gap-2 text-gray-600 text-sm md:text-base">
          Home
          <img className="w-5 h-[2px]" src={das} alt="separator" />
          Prijzen
        </h1>
      </div>
      {/*Hero section p-B */}
      <div
        className="hero md:h-[444px] lg:h-[444px]"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="lg:px-12">
            <h1 className="mb-4 text-4xl md:text-5xl font-bold text-[#FFFFFF] font-plus-jakarta">
              Branding
            </h1>
            <p className="mb-4 text-sm md:text-base text-[#FFFFFF] font-plus-jakarta">
              Bij Younitech geloven we dat sterke branding essentieel is voor
              het succes van jouw bedrijf. Onze aanpak combineert creativiteit
              met strategie om een merkidentiteit te creëren die resoneert en
              impact maakt. Of het nu gaat om het ontwerpen van een logo, het
              definiëren van je merkverhaal of het ontwikkelen van een
              consistente visuele stijl, wij bieden op maat gemaakte oplossingen
              die jouw merk naar een hoger niveau tillen.
            </p>
            <p className="mb-2 pt-4 text-sm md:text-base text-[#FFFFFF] font-plus-jakarta">
              Vul het onderstaande formulier in om een zo duidelijk mogelijk
              beeld te schetsen van jouw aanvraag.
            </p>
            <p className="mb-4 text-sm md:text-base text-[#FFFFFF] font-plus-jakarta">
              Kom je er niet uit? Neem gerust contact met ons op via
              <a href="/contactpagina">
                <span className="text-[#407BFF]"> contactpagina.</span>
              </a>
            </p>
          </div>
        </div>
      </div>

      <form
        ref={form}
        onSubmit={handleSubmit}
        className="px-5 lg:px-36 mx-auto"
      >
        {/* First Part */}

        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-16">
          {/* Left Side Inputs */}
          <div className="flex flex-col gap-4">
            <h2 className="text-[28px] text-[rgba(64,123,255,1)] font-plus-jakarta font-semibold md:mt-8 mt-4 mb-4">
              Basisinformatie:
            </h2>
            <div>
              <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px] mb-1">
                Naam (Voor en Achternaam)
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Naam"
                className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>
            <div>
              <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px] mb-1">
                Bedrijfsnaam (indien van toepassing)
              </label>
              <input
                type="text"
                name="cname"
                placeholder="Naam"
                className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px] mb-1">
                  E -mailadres
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="E-mail"
                  className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
              <div>
                <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px] mb-1">
                  Telefoonnummer
                </label>
                <input
                  type="tel"
                  name="telephone"
                  placeholder="Bijv. +31 6 12345678"
                  className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Right Side Inputs */}

          <div className="flex flex-col gap-4">
            <h2 className="text-[28px] text-[rgba(64,123,255,1)] font-plus-jakarta font-semibold  mb-4 md:mt-8 mt-4">
              Technisch
            </h2>
            <div>
              <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px] ">
                Voorkeurskleuren of themas
              </label>
              <div className="grid grid-cols-2 items-center gap-2">
                <div>
                  <input
                    type="text"
                    name="theams"
                    placeholder="Thema’s"
                    className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="">
                  <button
                    type="button"
                    onClick={handleClick}
                    className="bg-gray-800 hover:bg-gray-700 text-white text-[14px] font-medium py-2.5  rounded-lg flex items-center px-2  gap-1"
                  >
                    Upload afbeelding
                    <Upload size={12} />
                  </button>

                  <input
                    type="file"
                    name="file"
                    className="hidden"
                    ref={fileTakeRef}
                    onChange={handleFileChange}
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px] mb-1">
                Inspiratie
              </label>
              <div className="grid grid-cols-2 gap-1">
                <div>
                  <input
                    type="text"
                    name="inspiratie"
                    placeholder="Inspiratie"
                    className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="">
                  <button
                    type="button"
                    onClick={handleSpiClick}
                    className="bg-gray-800 hover:bg-gray-700 text-white text-[14px] font-medium py-2.5  rounded-lg flex items-center px-2  gap-1"
                  >
                    Upload afbeelding
                    <Upload size={16} />
                  </button>
                  <input
                    type="file"
                    name="filet"
                    accept="image/*"
                    className="hidden"
                    ref={fileSpiRef}
                    onChange={handleSpiChange}
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px] mb-1">
                Eventuele specifieke merkelementen die nodig zijn
              </label>
              <input
                type="text"
                name="eventuele"
                placeholder="bijv. Logo, visitekaartjes, brochures, website -ontwerp"
                className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* 2nd part */}

        <div className="">
          <div className="">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Left Side Inputs */}
              <div className="flex flex-col gap-4">
                <h2 className="text-[28px] text-[rgba(64,123,255,1)] font-plus-jakarta font-semibold mt-8   mb-4">
                  Informatie over brandingsproject:
                </h2>
                <div>
                  <div className="relative">
                    <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px] mb-1">
                      Type branding
                    </label>

                    <Select
                      isMulti
                      options={brandOptions}
                      value={selectedBrand}
                      onChange={handleBrand}
                      placeholder="Uitkiezen"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px] mb-1">
                    De kernwaarden en missie van het merk
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="korte"
                      placeholder="Korte beschrijving"
                      className="border border-gray-300 rounded-lg p-2 w-full pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px] mb-1">
                    Doelgroep
                  </label>
                  <Select
                    isMulti
                    options={doelOptions}
                    value={selectedDoel}
                    onChange={handleDoel}
                    placeholder="Uitkiezen"
                  />
                  {/* <select
                  value={doel}
                  name="doelgroep"
                  onChange={(e) => setSubjectDoel(e.target.value)}
                  className={`block w-full  px-3 py-2 border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500
                    ${brand === '' ? 'text-gray-400 ' : 'text-gray-700'}`}
                    >
                
                  <option value="" disabled hidden>
                  Uitkiezen
                  </option>
                  {doels .map((option, index) => (
                    <option key={index} value={option} className="text-gray-700  ">
                      {option}
                    </option>
                  ))}
                </select> */}
                </div>

                <div>
                  <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px] mb-1">
                    Leeftijden
                  </label>

                  <Select
                    isMulti
                    options={leeftOptions}
                    value={selectedLeeft}
                    onChange={handleLeeft}
                    placeholder="Uitkiezen"
                  />
                  {/* <select
                  value={age}
                  name="ages"
                  onChange={(e) => setSubjectAge(e.target.value)}
                  className={`block w-full  px-3 py-2 border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500
                    ${brand === '' ? 'text-gray-400 ' : 'text-gray-700'}`}
                    >
                
                  <option value="" disabled hidden>
                  Uitkiezen
                  </option>
                  {ages.map((option, index) => (
                    <option key={index} value={option} className="text-gray-700  ">
                      {option}
                    </option>
                  ))}
                </select> */}
                </div>

                <div className="">
                  <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px] mb-1">
                    Op basis van demografie & geslacht
                  </label>
                  <Select
                    isMulti
                    name="leeft"
                    options={genOptions}
                    value={selectedGen}
                    onChange={handleGen}
                    placeholder="Uitkiezen"
                  />

                  {/* <h3  style={{ fontWeight: '600', text:'16px',color: 'rgba(38, 50, 56, 1)', fontFamily: 'Plus Jakarta Sans, sans-serif'  }}>Op basis van demografie & geslacht</h3>
              <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', color: '#999' }}>
                  <input
                    type="checkbox"
                    name="men"
                    checked={selectedGender.man}
                    onChange={handleChangee}
                    style={{ marginRight: '0.5rem' }}
                  />
                  Men
                </label>
                <label style={{ display: 'flex', alignItems: 'center', color: '#999' }}>
                  <input
                    type="checkbox"
                    name="women"
                    checked={selectedGender.man}
                    onChange={handleChangee}
                    style={{ marginRight: '0.5rem' }}
                  />
                  Women
                </label>
                <label style={{ display: 'flex', alignItems: 'center', color: '#999' }}>
                  <input
                    type="checkbox"
                    name="both"
                    checked={selectedGender.vrouw}
                    onChange={handleChangee}
                    style={{ marginRight: '0.5rem' }}
                  />
                  Both
                </label>
              </div> */}
                </div>

                {/* upload image option */}
                <div className="">
                  <div className="md:grid md:grid-cols-2 items-center gap-6">
                    {/* Left Side Input */}
                    <div>
                      <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px] mb-1">
                        Huidige branding (indien aanwezig)
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="huidige"
                          placeholder="Geef details op"
                          className="border border-gray-300 rounded-lg p-2 w-full pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    {/* Right Side Input (Moved Up) */}
                    <div className="">
                      <label className="block text-gray-700 font-medium mt-[50px]"></label>

                      <button
                        type="button"
                        onClick={handleInClick}
                        className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-lg flex items-center gap-2"
                      >
                        Upload afbeelding
                        <Upload size={16} />
                      </button>
                      <input
                        type="file"
                        name="fileth"
                        accept="image/*"
                        className="hidden"
                        ref={fileInRef}
                        onChange={handleFChange}
                      />
                    </div>

                    {/* Image Upload Option */}
                  </div>

                  <div className="my-4">
                    <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px] mb-1">
                      Gewenste look en feel
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="gewenste"
                        placeholder="Uitkiezen"
                        className="border border-gray-300 rounded-lg p-2 w-full pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px] mb-1">
                      Merkbericht/positionering
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="merkbericht"
                        placeholder="Wat wil je dat je merk met je publiek communiceert?"
                        className="border border-gray-300 rounded-lg p-2 w-full pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side Inputs */}
              <div className="flex flex-col gap-4">
                <h2 className="text-[28px] text-[rgba(64,123,255,1)] font-plus-jakarta font-semibold mb-4">
                  Begroting
                </h2>
                <div>
                  <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px] mb-1">
                    Budgetbereik
                  </label>
                  <Select
                    options={begrotingOptions}
                    value={selectedBegroting}
                    onChange={handleBegroting}
                    placeholder="Uitkiezen"
                  />
                </div>

                <div>
                  <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px] mb-1">
                    Gewenste voltooiingsdatum
                  </label>
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat="dd-MM-yyyy"
                    placeholderText="DD-MM-YYYY"
                    className=" relative w-full px-4 py-2 md:pr-72 lg:pr-[350px] border border-gray-300 rounded-md text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                {/* comment box */}
                <div>
                  <h2 className="text-[28px] text-[rgba(64,123,255,1)] font-plus-jakarta font-semibold mb-4">
                    Aanvullende opmerkingen:
                  </h2>
                  <h2 className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px] mb-1">
                    Verzoek en vragen
                  </h2>

                  <textarea
                    name="message"
                    placeholder="Verzoeken en/of vragen"
                    className="  focus:outline-none focus:ring-2 focus:ring-blue-600 textarea  textarea-bordered textarea-lg w-full h-52 max-w-full"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center md:my-8 my-4 ">
            <button
              disabled={!isFormValid}
              className="btn hover:bg-[#468AFFE6] bg-[#468AFF] rounded-lg  md:px-32 px-10 py-2 text-[#FFFFFF] text-lg md:text-md lg:text-xl"
            >
              Boek offerte!
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default PrijzenBranding;
