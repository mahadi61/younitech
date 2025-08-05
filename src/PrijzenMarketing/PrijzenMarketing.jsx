import { useEffect, useRef, useState } from "react";
import { FaUpload } from "react-icons/fa";
import Select from "react-select";
import bg1 from "../assets/Appnet.jpeg";
import das from "../assets/das.png";
//import emailjs from '@emailjs/browser';
//import Swal from 'sweetalert2'
import emailjs from "@emailjs/browser";
import { format } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PrijzenMarketing = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  {
    /**Form validation start */
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

    e.preventDefault();
    if (isFormValid) {
      alert("Form submitted successfully!");

      const form = e.target;

      const name = form.name.value;
      const cname = form.cname.value;
      const email = form.email.value;
      const telephone = form.telephone.value;
      const huidige = form.huidige.value;
      const file = form.file.value;
      const integrat = form.integrat.value;
      const backend = form.backend.value;
      const preferred = form.preferred.value;
      //const typeapp = form.typeapp.value;
      const typeapp = selectedApp ? selectedApp.value : null;
      //const platform = form.platform.value;
      const ontwer = form.ontwer.value;
      const budget = form.budget.value;
      //const gewenste = form.gewenste.value;
      const message = form.message.value;
      const functies = form.functies.value;
      //const doelgroep = form.doelgroep.value;
      //const leeft = form.leeft.value;

      // Collect selected genders
      let gender = Object.keys(selectedGender).filter((g) => selectedGender[g]);
      if (selectedGender.other && customGender.trim()) {
        // Replace "other" with custom input
        gender = gender.filter((g) => g !== "other");
        gender.push(customGender.trim());
      }

      const formattedDate = selectedDate
        ? format(selectedDate, "dd-MM-yyyy")
        : "";

      // Multiple values
      const selectedValues = selectedPlatforms.map((option) => option.value);
      const selectedDoelgroepValues = selectedDoelgroep.map(
        (option) => option.value
      );
      const selectedLeeftValues = selectedLeeft.map((option) => option.value);

      // single values
      const selectedAppValue = selectedApp ? selectedApp.value : null;
      const selectedBudgetValue = selectedBudget ? selectedBudget.value : null;

      const formValue = {
        name,
        cname,
        email,
        telephone,
        huidige,
        file,
        integrat,
        backend,
        preferred,
        typeapp,
        //platform,
        ontwer,
        budget,
        //gewenste,
        message,
        functies,
        //doelgroep,
        //leeft,
        gender,
        formattedDate,
        selectedValues,
        selectedAppValue,
        selectedDoelgroepValues,
        selectedLeeftValues,
        selectedBudgetValue,
      };

      setSelectedGender({ man: false, vrouw: false, other: false });
      setCustomGender("");

      console.log(formValue);

      //Send to backend

      fetch(`${import.meta.env.VITE_API_URL}/users`, {
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

      // fetch("http://localhost:5500/formone",{
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json"
      //   },
      //   body: JSON.stringify(formValue)
      // })
      //   .then(response => response.json())
      //   .then(data => {
      //     console.log("Response from backend:", data);
      //     alert("Data successfully sent to the server!");
      //     form.reset();
      //   })
      // .catch(error => {
      //   console.error("Error submitting form:", error);
      //   alert("Failed to submit form. Try again.");
      // });
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   // Validate form before submission
  //   if (!isFormValid) {
  //     alert('Please fill in all required fields correctly.');
  //     return;
  //   }

  //   try {
  //     const form = e.target;

  //     // Collect all form data
  //     const formValue = {
  //       name: form.name.value,
  //       cname: form.cname.value,
  //       email: form.email.value,
  //       telephone: form.telephone.value,
  //       huidige: form.huidige.value,
  //       file: form.file.value,
  //       integrat: form.integrat.value,
  //       backend: form.backend.value,
  //       preferred: form.preferred.value,
  //       typeapp: selectedOption,
  //       platform: selectedPlatform,
  //       ontwer: form.ontwer.value,
  //       budget: selectedBudget,
  //       gewenste: form.gewenste.value,
  //       message: form.message.value,
  //       functies: form.functies.value,
  //       doelgroep: selectedDoelgroep,
  //       leeft: selectedLeeft,
  //       gender: (() => {
  //         let gender = Object.keys(selectedGender).filter(g => selectedGender[g]);
  //         if (selectedGender.other && customGender.trim()) {
  //           gender = gender.filter(g => g !== 'other');
  //           gender.push(customGender.trim());
  //         }
  //         return gender;
  //       })()
  //     };

  //     // Send to backend
  //     const response = await fetch("http://localhost:5500/formone", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify(formValue)
  //     });

  //     // First check if response is JSON
  //     const text = await response.text();
  //   let data;

  //   try {
  //     data = JSON.parse(text); // Try to parse as JSON
  //   } catch {
  //     console.error('Server returned:', text);
  //     throw new Error('Server returned unexpected response');
  //   }

  //   if (!response.ok) {
  //     throw new Error(data.message || `Server error: ${response.status}`);
  //   }

  //     // Success handling
  //     console.log("Success:", data);

  //     // Reset form fields
  //     form.reset();

  //     // Reset all states
  //     setFormData({ name: '', email: '' });
  //     setSelectedGender({ man: false, vrouw: false, other: false });
  //     setCustomGender('');
  //     setSelectedOption('');
  //     setSelectedPlatform('');
  //     setSelectedDoelgroep('');
  //     setSelectedLeeft('');
  //     setSelectedBudget('');

  //     // Show success message
  //     alert('Your form has been submitted successfully! We will contact you soon.');

  //   } catch (error) {
  //     console.error("Submission error:", error);

  //     // Handle specific error cases
  //     let errorMessage = error.message;

  //     // If server returns HTML error page
  //     if (errorMessage.includes('<!DOCTYPE html>')) {
  //       errorMessage = 'Server error occurred. Please try again later.';
  //     }
  //     // If network error
  //     else if (error.message === 'Failed to fetch') {
  //       errorMessage = 'Network error. Please check your connection.';
  //     }

  //     alert(`Submission failed: ${errorMessage}`);
  //   }
  // };
  {
    /**Form validation End */
  }

  // Dropdown 1 of app

  // const options = [
  //   'Mobiele App',
  //   'Webapplicatie',
  //   'Hybride App (Web & Mobiel)',
  //   'SaaS-platform',
  //   'E-commerce / Webshop App',
  //   'CRM / Bedrijfssoftware',
  //   'IoT & Smart Device App',
  //   'Gaming App',
  //   'Overige (met invulveld)'
  // ];

  const appOptions = [
    { value: "Mobiele App", label: "Mobiele App" },
    { value: "Webapplicatie", label: "Webapplicatie" },
    { value: "Hybride App (Web & Mobiel", label: "Hybride App (Web & Mobiel" },
    { value: "SaaS-platform", label: "SaaS-platform" },
    { value: "E-commerce / Webshop App", label: "E-commerce / Webshop App" },
    { value: "CRM / Bedrijfssoftware", label: "CRM / Bedrijfssoftware" },
    { value: "IoT & Smart Device App", label: "IoT & Smart Device App" },
    { value: "Gaming App", label: "Gaming App" },
    { value: "Overige (met invulveld)", label: "Overige (met invulveld)" },
  ];

  const [selectedApp, setSelectedApp] = useState(null);

  const handleApptype = (selectedOption) => {
    setSelectedApp(selectedOption);
  };

  // Dropdown of platform versist  selectedDoelgroep

  // const [selectedPlatform, setSelectedPlatform] = useState('');

  // const platforms = [
  //   'iOS',
  //   'Android',
  //   'Webbrowser',
  //   'Windows',
  //   'macOS',
  //   'Cross-platform (React Native / Flutter)',
  //   'Nog niet zeker',
  // ];

  const platformOptions = [
    { value: "iOS", label: "iOS" },
    { value: "Android", label: "Android" },
    { value: "Webbrowser", label: "Webbrowser" },
    { value: "Windows", label: "Windows" },
    { value: "macOS", label: "macOS" },
    {
      value: "Cross-platform (React Native / Flutter)",
      label: "Cross-platform (React Native / Flutter)",
    },
    { value: "Nog niet zeker", label: "Nog niet zeker" },
  ];

  const [selectedPlatforms, setSelectedPlatforms] = useState([]);

  const handlePlatform = (selectedOptions) => {
    setSelectedPlatforms(selectedOptions);
  };

  // Dropdown of Doelgroep

  // const [selectedDoelgroep, setSelectedDoelgroep] = useState('');

  // const odelgroeps = [
  //   'Bedrijven (B2B)',
  //   'Consumenten (B2C)',
  //   'Overheid & Non-Profit',
  //   'Startups',
  //  ' E-commerce & Retail',
  //   'Educatie & Training',
  //   'Fintech & Banking',
  //   'Zorg & Gezondheid'
  // ];

  const doelgroepOptions = [
    { value: "Bedrijven (B2B)", label: "Bedrijven (B2B)" },
    { value: "Consumenten (B2C)", label: "Consumenten (B2C)" },
    { value: "Overheid & Non-Profit", label: "Overheid & Non-Profit" },
    { value: "Startups", label: "Startups" },
    { value: "E-commerce & Retail", label: "E-commerce & Retail" },
    { value: "Educatie & Training", label: "Educatie & Training" },
    { value: "Fintech & Banking", label: "Fintech & Banking" },
    { value: "Zorg & Gezondheid", label: "Zorg & Gezondheid" },
  ];

  const [selectedDoelgroep, setSelectedDoelgroep] = useState("");

  const handleDoelgroep = (selectedOptions) => {
    setSelectedDoelgroep(selectedOptions);
  };

  // Dropdown of Leefts

  // const [selectedLeeft, setSelectedLeeft] = useState('');

  // const leefts = [
  //   'Jongeren (13-18 jaar)',
  //   'Jongvolwassenen (18-30 jaar)',
  //   'Volwassenen (30-50 jaar)',
  //  ' Senioren (50+)'
  // ];

  const leeftOptions = [
    { value: "Jongeren (13-18 jaar)", label: "Jongeren (13-18 jaar)" },
    {
      value: "Jongvolwassenen (18-30 jaar)",
      label: "Jongvolwassenen (18-30 jaar)",
    },
    { value: "Volwassenen (30-50 jaar)", label: "Volwassenen (30-50 jaar)" },
    { value: "Senioren (50+", label: "Senioren (50+" },
  ];

  const [selectedLeeft, setSelectedLeeft] = useState("");

  const handleLeefts = (selectedOptions) => {
    setSelectedLeeft(selectedOptions);
  };

  // Dropdown of
  // const [selectedBudget, setSelectedBudget] = useState('');

  // const budgetOptions = [
  //   '€5.000 - €10.000 (Basisfunctionaliteiten, MVP)',
  //   '€10.000 – €25.000 (Middelgrote app, extra functies)',
  //   '€25.000 – €50.000 (Complexe applicatie, maatwerk)',
  //   '€50.000+ (Grote projecten, schaalbare oplossingen)',
  //   'Nog niet zeker',
  // ];

  const budgetOptions = [
    {
      value: "€5.000 - €10.000 (Basisfunctionaliteiten, MVP)",
      label: "€5.000 - €10.000 (Basisfunctionaliteiten, MVP)",
    },
    {
      value: "€10.000 – €25.000 (Middelgrote app, extra functies)",
      label: "€10.000 – €25.000 (Middelgrote app, extra functies)",
    },
    {
      value: "€25.000 – €50.000 (Complexe applicatie, maatwerk)",
      label: "€25.000 – €50.000 (Complexe applicatie, maatwerk)",
    },
    {
      value: "€50.000+ (Grote projecten, schaalbare oplossingen)",
      label: "€50.000+ (Grote projecten, schaalbare oplossingen)",
    },
    { value: "Nog niet zeker", label: "Nog niet zeker" },
  ];

  const [selectedBudget, setSelectedBudget] = useState("");

  const handleBudget = (selectedOptions) => {
    setSelectedBudget(selectedOptions);
  };

  // check box

  const [selectedGender, setSelectedGender] = useState({
    man: false,
    vrouw: false,
    other: false,
  });
  const [customGender, setCustomGender] = useState("");

  const handleChangee = (e) => {
    const { name, checked } = e.target;
    setSelectedGender((prev) => ({
      ...prev,
      [name]: checked,
    }));

    // Reset custom gender input if "other" is unchecked
    if (name === "other" && !checked) {
      setCustomGender("");
    }
  };

  // const showAlert=()=>{
  //   Swal.fire({
  //     title: "Bedankt voor je aanvraag!",
  //     text: "We hebben je gegevens ontvangen en sturen je binnenkort een offerte. Mocht je vragen hebben, neem gerust contact met ons op.",
  //     icon: "success"
  //   });
  // }

  const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm('service_adb605b','template_31qworp', form.current, {
  //       publicKey: 'zVpdm4YG_4bymkiyw',
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
  return (
    <>
      <div className="bg-[#F5F5F5] w-full flex flex-col items-center py-16">
        <h1 className="text-xl font-bold text-gray-800">
          App ontwikkeling Prijsplannen
        </h1>
        <h1 className="flex items-center gap-2 text-gray-600 text-sm md:text-base">
          Home
          <img className="w-5 h-[2px]" src={das} alt="separator" />
          Prijzen
        </h1>
      </div>
      {/*Hero section P-M */}
      <div
        className="hero h-[520px] md:h-[444px] lg:h-[444px]"
        style={{
          backgroundImage: `url(${bg1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="px-4 md:px-8 lg:px-12">
            <h1 className="mb-4 text-3xl md:text-5xl font-bold text-[#FFFFFF] font-plus-jakarta">
              Applicatie Ontwikkeling
            </h1>
            <p className="mb-4 lg:ml-20 lg:mr-20 text-sm md:text-base text-[#FFFFFF] font-plus-jakarta">
              Bij Younitech staan we bekend om onze toewijding aan het leveren
              van hoogwaardige app-ontwikkelingsdiensten die voldoen aan de
              unieke behoeften van onze klanten. Of je nu een iOS, Android of
              cross-platform app nodig hebt, ons ervaren team van ontwikkelaars
              staat klaar om jouw ideeën tot leven te brengen. Van concept tot
              lancering en daar voorbij, we zorgen ervoor dat jouw app zowel
              functioneel als gebruiksvriendelijk is.
            </p>
            <p className="mb-2 pt-4 text-sm md:text-base font-semibold text-[#FFFFFF] font-plus-jakarta">
              Vul het onderstaande formulier in om jouw aanvraag zo volledig
              mogelijk te maken.
            </p>
            <p className="mb-4 text-sm md:text-base text-[#FFFFFF] font-plus-jakarta">
              Hulp nodig? Neem contact met ons op via
              <a href="/contactpagina">
                {" "}
                <span className="text-[#407BFF]">contactpagina.</span>
              </a>
            </p>
          </div>
        </div>
      </div>

      <form ref={form} onSubmit={handleSubmit} className=" px-6 mx-auto mt-10">
        {/* First Part */}
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-16">
            {/* Left Side Inputs */}
            <div className="flex flex-col gap-4">
              <h2 className="text-[28px] text-[rgba(64,123,255,1)] font-plus-jakarta font-semibold  mb-4">
                Basisinformatie:
              </h2>
              <div>
                <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px] mb-1">
                  Naam (Voornaam en achternaam)
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
                    E-mailadres
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
              <h2 className="text-[28px] text-[rgba(64,123,255,1)] font-plus-jakarta font-semibold md:mb-4 ">
                Technische details:
              </h2>

              <div>
                <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px] mb-1">
                  Heeft u een huidige app of een prototype?
                </label>

                <div className="grid grid-cols-2 gap-1">
                  {/* Left Side Input */}
                  <div>
                    <div className="relative">
                      <input
                        type="text"
                        name="huidige"
                        placeholder="Ja/nee, zo ja: geef details of upload"
                        className="border border-gray-300 rounded-lg p-2 w-full pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  {/* Right Side Input (Moved Up) */}
                  <div className="">
                    <div className="border border-gray-300 rounded-lg py-2 flex items-center justify-around md:gap-1 cursor-pointer bg-black hover:bg-gray-800 transition">
                      <label
                        htmlFor="imageUpload"
                        className="text-white cursor-pointer"
                      >
                        Upload afbeelding
                      </label>
                      <FaUpload className="text-white text-sm mg:text-lg" />
                      <input
                        type="file"
                        name="file"
                        className="hidden"
                        id="imageUpload"
                      />
                    </div>
                  </div>

                  {/* Image Upload Option */}
                </div>
              </div>

              <div>
                <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px] mb-1">
                  Integratievereisten
                </label>
                <input
                  type="text"
                  name="integrat"
                  placeholder="bijv. API's, betalingsgateways, services van derden"
                  className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px] mb-1">
                  Backend -behoeften
                </label>
                <input
                  type="text"
                  name="backend"
                  placeholder="bijv. Database, serverhosting, cloudservices"
                  className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px] mb-1">
                  Gewenste Technology stack
                </label>
                <input
                  type="text"
                  name="preferred"
                  placeholder="Eventuele specifieke programmeertalen of kaders"
                  className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 2nd part */}

        <div className=" mt-10 ">
          <div className="">
            <h2 className="text-[28px] text-[rgba(64,123,255,1)] font-plus-jakarta font-semibold mb-4">
              App -projectinformatie:
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Left Side Inputs */}
              <div className="flex flex-col gap-4">
                <div>
                  <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px] mb-1">
                    Type app
                  </label>

                  <Select
                    name="typeapp"
                    options={appOptions}
                    value={selectedApp}
                    onChange={handleApptype}
                    placeholder="Welk type applicatie wil je laten ontwikkelen?"
                  />
                </div>

                <div>
                  <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px] mb-1">
                    <strong>Platform(s) vereist</strong>
                  </label>
                  <Select
                    isMulti
                    name="platform"
                    options={platformOptions}
                    value={selectedPlatforms}
                    onChange={handlePlatform}
                    placeholder="Op welke platforms moet de app beschikbaar zijn?"
                  />
                </div>

                <div>
                  <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px] mb-1">
                    App -functies
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="functies"
                      placeholder="Korte beschrijving van functies, bijv. Gebruikersaanmelding, etc"
                      className="border border-gray-300 rounded-lg p-2 w-full pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* upload image option */}
                <div className="">
                  <div className="my-4">
                    <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px] mb-1">
                      Doelgroep
                    </label>
                    <Select
                      isMulti
                      name="doelgroep"
                      options={doelgroepOptions}
                      value={selectedDoelgroep}
                      onChange={handleDoelgroep}
                      placeholder="Demografie, gebruikersbehoeften, enz"
                    />
                  </div>

                  <div>
                    <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px] mb-1">
                      Leeftijdscategorie
                    </label>
                    <Select
                      isMulti
                      name="leeft"
                      options={leeftOptions}
                      value={selectedLeeft}
                      onChange={handleLeefts}
                      placeholder="Uitkiezen"
                    />
                  </div>

                  <div className="font-plus-jakarta text-gray-700 mt-5">
                    <h3 className="text-[rgba(38,50,56,1)] font-semibold text-[16px] mb-4">
                      Op basis van demografie & geslacht
                    </h3>
                    <div className="flex space-x-6">
                      <label className="inline-flex items-center text-gray-400">
                        <input
                          type="checkbox"
                          name="man"
                          checked={selectedGender.man}
                          onChange={handleChangee}
                          className="w-4 h-4 mr-2 border-gray-400 rounded focus:ring-0"
                        />
                        Man
                      </label>
                      <label className="inline-flex items-center text-gray-400">
                        <input
                          type="checkbox"
                          name="vrouw"
                          checked={selectedGender.vrouw}
                          onChange={handleChangee}
                          className="w-4 h-4 mr-2 border-gray-400 rounded focus:ring-0"
                        />
                        Vrouw
                      </label>
                      <label className="inline-flex items-center text-gray-400">
                        <input
                          type="checkbox"
                          name="other"
                          checked={selectedGender.other}
                          onChange={handleChangee}
                          className="w-4 h-4 mr-2 border-gray-400 rounded focus:ring-0"
                        />
                        Anders
                      </label>
                      {selectedGender.other && (
                        <input
                          type="text"
                          placeholder="Voer geslacht in..."
                          className="ml-2 p-1 border border-gray-300 rounded"
                          value={customGender}
                          onChange={(e) => setCustomGender(e.target.value)}
                        />
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px] mt-4 mb-1">
                      Ontwerpvoorkeuren
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="ontwer"
                        placeholder="Eenvoudig, verfijnd, kleurrijk, modern, etc."
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
                    name="budget"
                    options={budgetOptions}
                    value={selectedBudget}
                    onChange={handleBudget}
                    placeholder="Wat is het beschikbare budget voor de ontwikkeling?"
                  />
                </div>

                <div>
                  <label className="block text-[rgba(38,50,56,1)] font-semibold font-plus-jakarta text-[16px] mb-1">
                    Gewenste voltooiingsdatum
                  </label>
                  <div className="relative">
                    <DatePicker
                      selected={selectedDate}
                      onChange={(date) => setSelectedDate(date)}
                      dateFormat="dd-MM-yyyy"
                      placeholderText="DD-MM-YYYY"
                      className="w-full px-4 py-2 md:pr-72 lg:pr-[350px] border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
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
                    placeholder="Verzoeken en vragen"
                    className="textarea  textarea-bordered textarea-lg w-full max-w-full h-48"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center md:my-8 my-4">
            <button
              disabled={!isFormValid}
              className="btn hover:bg-[#468AFFE6] bg-[#468AFF] rounded-lg  md:px-32 px-10 py-2  text-[#FFFFFF] text-lg md:text-md lg:text-xl"
            >
              Boek Offerte
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default PrijzenMarketing;
