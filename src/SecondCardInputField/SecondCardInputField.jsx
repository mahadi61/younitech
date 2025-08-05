//import { FaChevronDown } from "react-icons/fa";
import { Upload } from "lucide-react";
import { useEffect, useRef, useState } from "react";
//import { FaUpload } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Select from "react-select";

const SecondCardInputField = () => {
  // Dropdown 1 of Vakgebied

  // const [selectedOption, setSelectedOption] = useState('');

  // const options = [
  //   'Basisonderwijs',
  //   'Grafisch ontwerp',
  //   'IT-training',
  //   'Zakelijke dienstverlening',
  //   'Retail / E-commerce',
  //   'Overige (met invulveld)',
  // ];

  const options = [
    { value: "Basisonderwijs", label: "Basisonderwijs" },
    { value: "Grafisch ontwerp", label: "Grafisch ontwerp" },
    { value: "IT-training", label: "IT-training" },
    { value: "Zakelijke dienstverlening", label: "Zakelijke dienstverlening" },
    { value: "Retail / E-commerce", label: "Retail / E-commerce" },
    { value: "Overige (met invulveld)", label: "Overige (met invulveld)" },
  ];

  const [selectedOption, setSelectedOption] = useState([]);
  const handleOptions = (selectedOptions) => {
    setSelectedOption(selectedOptions || []);
  };

  const [customSpecialization, setCustomSpecialization] = useState("");

  const showCustomField = selectedOption.some(
    (option) => option.value === "Overige (met invulveld)"
  );

  // Dropdown 2

  //   const [subjectArea, setSubjectArea] = useState('');

  // const subjectOptions = [
  //   "Basisonderwijs",
  //   "Grafisch ontwerp",
  //   "IT-training",
  //   "Zakelijke dienstverlening",
  //   "Retail / E-commerce",
  //   "Overige (met invulveld)"
  // ];

  const doelgroeps = [
    { value: "Basisonderwijs", label: "Basisonderwijs" },
    { value: "Grafisch ontwerp", label: "Grafisch ontwerp" },
    { value: "IT-training", label: "IT-training" },
    { value: "Zakelijke dienstverlening", label: "Zakelijke dienstverlening" },
    { value: "Retail / E-commerce", label: "Retail / E-commerce" },
    { value: "Overige (met invulveld)", label: "Overige (met invulveld)" },
  ];

  const [selectedDoelgroep, setSelectedDoelgroep] = useState([]);

  const handleDoelgroeps = (selectedOptions) => {
    setSelectedDoelgroep(selectedOptions || []);
  };

  const [customDoelgroep, setCustomDoelgroep] = useState("");
  const showCustomDoelgroep = selectedDoelgroep.some(
    (option) => option.value === "Overige (met invulveld)"
  );

  // Dropdown 3

  // const [selectedHeb, setSelectedHeb] = useState('');

  // const hebs = [
  //   'Basisonderwijs',
  //   'Grafisch ontwerp ',
  //   'IT-training',
  //   'Zakelijke dienstverlening',
  //   'Retail / E-commerce',
  //   'Overige (met invulveld)',
  // ];

  const wensens = [
    { value: "Basisonderwijs", label: "Basisonderwijs" },
    { value: "Grafisch ontwerp", label: "Grafisch ontwerp" },
    { value: "IT-training", label: "IT-training" },
    { value: "Zakelijke dienstverlening", label: "Zakelijke dienstverlening" },
    { value: "Retail / E-commerce", label: "Retail / E-commerce" },
    { value: "Overige (met invulveld)", label: "Overige (met invulveld)" },
  ];

  const [selectedWensen, setSelectedWensen] = useState([]);

  const handleWensen = (selectedOptions) => {
    setSelectedWensen(selectedOptions || []);
  };

  const [customWensen, setCustomWensen] = useState("");
  const showCustomWensen = selectedWensen.some(
    (option) => option.value === "Overige (met invulveld)"
  );

  // Dropdown 4

  const [selectedProvide, setSelectedProvide] = useState("");

  const provides = [
    "Basisonderwijs",
    "Grafisch ontwerp",
    "IT-training",
    "Zakelijke dienstverlening",
    "Retail / E-commerce",
    "Overige (met invulveld)",
  ];

  // Dropdown 5

  const [subjectWorden, setSubjectWorden] = useState("");

  const wordens = [
    "Basisonderwijs",
    "Grafisch ontwerp",
    "IT-training",
    "Zakelijke dienstverlening",
    "Retail / E-commerce",
    "Overige (met invulveld)",
  ];

  //const [contentAccess, setContentAccess] = useState('');

  // Checkbox 1

  const [selectedGoals, setSelectedGoals] = useState({
    portfolio: false,
    blog: false,
    contact: false,
    courses: false,
    other: false,
  });

  const [customGoal, setCustomGoal] = useState("");

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setSelectedGoals((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  // Checkbox 2
  const [features, setFeatures] = useState({
    crm: false,
    forms: false,
    api: false,
  });

  const handleFunction = (e) => {
    const { name, checked } = e.target;
    setFeatures((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  // Checkbox 3

  const [pages, setPages] = useState({
    home: false,
    about: false,
    portfolio: false,
    blog: false,
    contact: false,
    anders: false,
  });

  const [customPage, setCustomPage] = useState("");
  // const [errorr, setErrorr] = useState(false);

  const handlePagina = (e) => {
    const { name, checked } = e.target;
    setPages((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  // File upload max 10 MB
  const fileInputRef = useRef(null);
  const [error, setError] = useState("");
  const [fileName, setFileName] = useState("");

  const MAX_FILE_SIZE_MB = 10;

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const fileSizeMB = file.size / (1024 * 1024);

      if (fileSizeMB > MAX_FILE_SIZE_MB) {
        setError(`Het bestand is te groot. Max. 10MB toegestaan.`);
        setFileName("");
      } else {
        setError("");
        setFileName(file.name);

        // ✅ Upload logic here
        console.log("✅ Bestand gekozen:", file.name);
        // Example: You could send it via FormData to an API
        // const formData = new FormData();
        // formData.append('file', file);
        // await fetch('/upload', { method: 'POST', body: formData });
      }
    }
  };

  const [wantsDomain, setWantsDomain] = useState(null); // true / false
  const [domainName, setDomainName] = useState("");

  const [seoControl, setSeoControl] = useState("");
  const [seoControlName, setSeoControlName] = useState("");

  {
    /**Form validation Start */
  }

  const [formData, setFormData] = useState({
    name: "",
    adres: "",
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

  const handleCardChange = (e) => {
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

    if (name === "adres") {
      if (!value.trim()) {
        fieldErrors.adres = "Address is required";
      } else {
        delete fieldErrors.adres;
      }
    }

    setErrors(fieldErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_hxxv27j", "template_z2t5x1q", form.current, {
        publicKey: "Z3HTMkKpJIM22rfNm",
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
      const adres = form.adres.value;
      //const apptype = form.apptype.value;
      const bestaande = form.bestaande.value;
      const vakgebied = form.vakgebied.value;
      //const groep = form.groep.value;
      //const heb = form.heb.value;
      //const worden = form.worden.value;
      const opmerkingen = form.opmerkingen.value;
      const file = form.file.value;

      const radio1 = {
        wantsDomain,
        domainName: wantsDomain ? domainName : null,
      };

      const radio2 = {
        seoControl, // either "ja" or "nee"
        seoControlName: seoControl ? seoControlName : null,
      };

      const check1 = {
        ...selectedGoals,
        customGoal: selectedGoals.other ? customGoal : null,
      };

      const check2 = {
        ...features, // crm, forms, api as booleans
      };

      const check3 = {
        ...pages,
        customPage: pages.anders ? customPage : null,
      };

      // Multple selctetion
      const selectedOptionValue = selectedOption.map((option) => option.value);
      const selectedDuelValue = selectedDoelgroep.map((option) => option.value);
      const selectedWensenValue = selectedWensen.map((option) => option.value);

      const dataOptions = {
        Select: selectedOptionValue,
        Overige: selectedOptionValue.includes("Overige (met invulveld)")
          ? customSpecialization
          : "",
      };

      const dataDuelgrouep = {
        Select: selectedDuelValue,
        Overige: selectedDuelValue.includes("Overige (met invulveld)")
          ? customDoelgroep
          : "",
      };

      const dataWensen = {
        Select: selectedWensenValue,
        Overige: selectedWensenValue.includes("Overige (met invulveld)")
          ? customWensen
          : "",
      };

      const formValue = {
        name,
        adres,
        //apptype,
        bestaande,
        radio1,
        vakgebied,
        radio2,
        check1,
        //groep,
        check2,
        //heb,
        check3,
        // worden,
        opmerkingen,
        file,
        // selectedOptionValue,
        dataOptions,
        dataDuelgrouep,
        dataWensen,
      };

      // console.log(formValue);

      fetch(`${import.meta.env.VITE_API_URL}/maatwerk`, {
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
    /**Form validation End */
  }

  return (
    <>
      <h1 className="md:px-36 font-plus-jakarta font-semibold text-4xl text-[rgba(29,32,38,1)]">
        {" "}
        Custom Code Webbuilder Formulier
      </h1>

      <form onSubmit={handleSubmit}>
        {/* First Part */}
        <div className="md:px-36 px-6 mx-auto">
          <div className=" flex  md:gap-[496px]">
            <h2 className="text-3xl text-[rgba(64,123,255,1)] font-semibold font-plus-jakarta md:mt-8 mt-4 mb-4">
              Algemene Informatie
            </h2>
            <h2 className="text-3xl text-[rgba(64,123,255,1)] font-semibold font-plus-jakarta  lg:-ml-[420px] xl:-ml-[210px]  mb-4 md:mt-8 mt-4  hidden sm:block ">
              Doel van de Website
            </h2>
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2  lg:gap-16">
            {/* Left Side Inputs */}
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-base font-plus-jakarta text-[rgba(38,50,56,1)] font-semibold mb-1">
                  Voornaam & Achternaam*
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleCardChange}
                  placeholder="Naam"
                  className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}
              </div>
              <div>
                <label className="block text-base font-plus-jakarta text-[rgba(38,50,56,1)] font-semibold mb-1">
                  Adres*
                </label>
                <input
                  type="text"
                  name="adres"
                  value={formData.adres}
                  onChange={handleCardChange}
                  placeholder="Adres"
                  className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.adres && (
                  <p className="text-red-500 text-sm">{errors.adres}</p>
                )}
              </div>

              <div>
                <label className="block text-base font-plus-jakarta text-[rgba(38,50,56,1)] font-semibold mb-1">
                  Type app
                </label>

                <Select
                  isMulti
                  options={options}
                  value={selectedOption}
                  onChange={handleOptions}
                  placeholder="Select"
                />

                {showCustomField && (
                  <div>
                    <input
                      type="text"
                      value={customSpecialization}
                      onChange={(e) => setCustomSpecialization(e.target.value)}
                      placeholder="Type App"
                      className="w-full border border-gray-300 mt-2 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                )}

                {/* <select
                  value={selectedOption}
                  name="apptype"
                  onChange={(e) => setSelectedOption(e.target.value)}
                  className={`block w-full px-3 py-2 border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500
                    ${selectedOption === '' ? 'text-gray-400 ' : 'text-gray-700'}`}
                >
                  
                  <option value="" disabled hidden>
                  Select
                  </option>
                  {options.map((option, index) => (
                    <option key={index} value={option} className="text-gray-700">
                      {option}
                    </option>
                  ))}
                </select> */}
              </div>

              <div>
                <label className="block text-base font-plus-jakarta text-[rgba(38,50,56,1)] font-semibold mb-1">
                  Heb je al een bestaande website? Zo ja, wat is de URL?
                </label>
                <input
                  type="text"
                  name="bestaande"
                  placeholder="Invul veld"
                  className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <h2 className="text-3xl text-[rgba(64,123,255,1)] font-semibold font-plus-jakarta md:mt-8 mt-4 mb-4">
                  Techniek & Hosting
                </h2>

                <label className="block text-base font-plus-jakarta text-[rgba(38,50,56,1)] font-semibold mb-1">
                  Wil je een eigen domeinnaam?*
                </label>
                <div>
                  <div className="flex items-center gap-4">
                    <label className="flex items-center gap-1">
                      <input
                        type="radio"
                        name="domain"
                        value="ja"
                        onChange={() => setWantsDomain(true)}
                      />
                      Ja
                    </label>

                    <label className="flex items-center gap-1">
                      <input
                        type="radio"
                        name="domain"
                        value="nee"
                        onChange={() => setWantsDomain(false)}
                      />
                      Nee
                    </label>
                  </div>

                  {wantsDomain && (
                    <div className="mt-4 mb-4">
                      <input
                        type="text"
                        placeholder="Invul veld"
                        value={domainName}
                        onChange={(e) => setDomainName(e.target.value)}
                        className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  )}
                </div>

                <div className="mb-4">
                  <label className="block text-base font-plus-jakarta text-[rgba(38,50,56,1)] font-semibold mb-1">
                    Vakgebied en specialisatie*
                  </label>
                  <select
                    value={selectedProvide}
                    name="vakgebied"
                    onChange={(e) => setSelectedProvide(e.target.value)}
                    className={`block w-full px-3 py-2 border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500
                    ${
                      selectedProvide === ""
                        ? "text-gray-400 "
                        : "text-gray-700"
                    }`}
                  >
                    <option value="" disabled hidden>
                      Select
                    </option>
                    {provides.map((option, index) => (
                      <option
                        key={index}
                        value={option}
                        className="text-gray-700"
                      >
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div></div>
              </div>
            </div>

            {/* Right Side Inputs */}

            <div className="flex flex-col gap-4">
              <div>
                <h3 className="block text-base font-plus-jakarta text-[rgba(38,50,56,1)] font-semibold mb-1">
                  Wat is het hoofddoel van je website?*
                </h3>
                <div className="flex flex-wrap gap-4 text-gray-400">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="portfolio"
                      checked={selectedGoals.portfolio}
                      onChange={handleChange}
                      className="w-4 h-4 mr-2 border-gray-400 rounded focus:ring-0"
                    />
                    Portfolio tonen
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="blog"
                      checked={selectedGoals.blog}
                      onChange={handleChange}
                      className="w-4 h-4 mr-2 border-gray-400 rounded focus:ring-0"
                    />
                    Blog schrijven
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="contact"
                      checked={selectedGoals.contact}
                      onChange={handleChange}
                      className="w-4 h-4 mr-2 border-gray-400 rounded focus:ring-0"
                    />
                    Contact genereren
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="courses"
                      checked={selectedGoals.courses}
                      onChange={handleChange}
                      className="w-4 h-4 mr-2 border-gray-400 rounded focus:ring-0"
                    />
                    Online cursussen verkopen
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="other"
                      checked={selectedGoals.other}
                      onChange={handleChange}
                      className="w-4 h-4 mr-2 border-gray-400 rounded focus:ring-0"
                    />
                    Anders
                  </label>
                  {selectedGoals.other && (
                    <input
                      type="text"
                      placeholder="Schrijf je doel op..."
                      className="ml-2 p-1 border border-gray-300 rounded"
                      value={customGoal}
                      onChange={(e) => setCustomGoal(e.target.value)}
                    />
                  )}
                </div>
              </div>

              <div>
                <label className="block text-base font-plus-jakarta text-[rgba(38,50,56,1)] font-semibold mb-1">
                  Wie is je doelgroep?*
                </label>

                <Select
                  isMulti
                  options={doelgroeps}
                  value={selectedDoelgroep}
                  onChange={handleDoelgroeps}
                  placeholder="Select"
                />

                {showCustomDoelgroep && (
                  <div>
                    <input
                      type="text"
                      value={customDoelgroep}
                      onChange={(e) => setCustomDoelgroep(e.target.value)}
                      placeholder="Type App"
                      className="w-full border border-gray-300 mt-2 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                )}

                {/* <select
                  value={subjectArea}
                  name="groep"
                  onChange={(e) => setSubjectArea(e.target.value)}
                  className={`block w-full  px-3 py-2 border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500
                    ${subjectArea === '' ? 'text-gray-400 ' : 'text-gray-700'}`}
                    >

                  <option value="" disabled hidden>
                  (Dropdown, eventueel met mogelijkheid tot meerdere selecties)
                  </option>
                  {subjectOptions.map((option, index) => (
                    <option key={index} value={option} className="text-gray-700 ">
                      {option}
                    </option>
                  ))}
                </select> */}
              </div>

              <div>
                <h3 className="text-base font-plus-jakarta text-[rgba(38,50,56,1)] font-semibold mb-4">
                  Welke specifieke functionaliteiten of maatwerk elementen heb
                  je nodig?*
                </h3>
                <div className="flex flex-wrap gap-6 text-gray-400">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="crm"
                      checked={features.crm}
                      onChange={handleFunction}
                      className="w-4 h-4 mr-2 border-gray-400 rounded focus:ring-0"
                    />
                    integratie CRM
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="forms"
                      checked={features.forms}
                      onChange={handleFunction}
                      className="w-4 h-4 mr-2 border-gray-400 rounded focus:ring-0"
                    />
                    geavanceerde formulieren
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="api"
                      checked={features.api}
                      onChange={handleFunction}
                      className="w-4 h-4 mr-2 border-gray-400 rounded focus:ring-0"
                    />
                    API-koppelingen
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-base font-plus-jakarta text-[rgba(38,50,56,1)] font-semibold mb-1">
                  Heb je specifieke wensen voor UI/UX design?
                </label>

                <Select
                  isMulti
                  options={wensens}
                  value={selectedWensen}
                  onChange={handleWensen}
                  placeholder="Select"
                />

                {showCustomWensen && (
                  <div>
                    <input
                      type="text"
                      value={customWensen}
                      onChange={(e) => setCustomWensen(e.target.value)}
                      placeholder="Type App"
                      className="w-full border border-gray-300 mt-2 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                )}

                {/* <select
                  value={selectedHeb}
                  name="heb"
                  onChange={(e) => setSelectedHeb(e.target.value)}
                  className={`block w-full px-3 py-2 border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500
                    ${selectedHeb === '' ? 'text-gray-400 ' : 'text-gray-700'}`}
                >
                  
                  <option value="" disabled hidden>
                  (Vrij invulveld – optioneel)
                  </option>
                  {hebs.map((option, index) => (
                    <option key={index} value={option} className="text-gray-700">
                      {option}
                    </option>
                  ))}
                </select> */}
              </div>

              <div>
                <h2 className="text-3xl text-[rgba(64,123,255,1)] font-semibold font-plus-jakarta md:mt-8 mt-4 mb-4">
                  Inhoud & Pagina’s
                </h2>
                {/* <h3 className="text-base font-plus-jakarta text-[rgba(38,50,56,1)] font-semibold mb-4">
          Welke pagina’s wil je?*
        </h3>
        <div className="flex flex-wrap gap-6 text-gray-400">
          {[
            { name: 'home', label: 'Home' },
            { name: 'about', label: 'About' },
            { name: 'portfolio', label: 'Portfolio' },
            { name: 'blog', label: 'Blog' },
            { name: 'contact', label: 'Contact' },
            { name: 'anders', label: 'Anders' },
          ].map((item) => (
            <label key={item.name} className="inline-flex items-center">
              <input
                type="checkbox"
                name={item.name}
                checked={pages[item.name]}
                onChange={handlePagina}
                className="w-4 h-4 mr-2 border-gray-400 rounded focus:ring-0"
              />
              {item.label}
            </label>
          ))}

          {pages.anders && (
            <input
              type="text"
              placeholder="Welke pagina’s wil je?*"
              className="ml-2 p-1 border border-gray-300 rounded"
              value={customPage}
              onChange={(e) => setCustomPage(e.target.value)}
            />
          )}
        </div> */}
              </div>

              <label className="block text-base font-plus-jakarta text-[rgba(38,50,56,1)] font-semibold mb-1">
                Heb je de teksten en afbeeldingen al of moeten die gemaakt
                worden?*
              </label>

              <div>
                <div className="">
                  <div className="flex gap-6 text-gray-400">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="seoControl"
                        value="ja"
                        // checked={seoControl === 'ja'}
                        onChange={(e) => setSeoControl(true)}
                        className="w-4 h-4 mr-2 border-gray-400 text-black focus:ring-0"
                      />
                      Ja
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="seoControl"
                        value="nee"
                        // checked={seoControl === 'nee'}
                        onChange={(e) => setSeoControl(false)}
                        className="w-4 h-4 mr-2 border-gray-400 text-black focus:ring-0"
                      />
                      Nee
                    </label>
                  </div>
                  {seoControl && (
                    <div className="mt-4 mb-4">
                      <input
                        type="text"
                        placeholder="Invul veld"
                        value={seoControlName}
                        onChange={(e) => setSeoControlName(e.target.value)}
                        className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* <div>
            <label className="block text-base font-plus-jakarta text-[rgba(38,50,56,1)] font-semibold mb-1">
            Heb je de teksten en afbeeldingen al of moeten die gemaakt worden?*
                </label>
                <select
                  value={subjectWorden}
                  name="worden"
                  onChange={(e) => setSubjectWorden(e.target.value)}
                  className={`block w-full  px-3 py-2 border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500
                    ${subjectWorden === '' ? 'text-gray-400 ' : 'text-gray-700'}`}
                    >

                  <option value="" disabled hidden>
                  Select
                  </option>
                  {wordens .map((option, index) => (
                    <option key={index} value={option} className="text-gray-700">
                      {option}
                    </option>
                  ))}
                </select>
                </div> */}

              <div>
                <h2 className="text-3xl text-[rgba(64,123,255,1)] font-semibold font-plus-jakarta md:mt-4 mt-2 mb-4">
                  Extra Wensen
                </h2>
                <label className="block text-base font-plus-jakarta text-[rgba(38,50,56,1)] font-semibold mb-1">
                  Opmerkingen & Specifieke verzoeken
                </label>
                <input
                  type="text"
                  name="opmerkingen"
                  placeholder="(Vrij veld, optioneel)"
                  className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <h2 className="text-base font-plus-jakarta text-[rgba(38,50,56,1)] font-semibold  md:mt-4 mt-2 mb-4">
                  Voeg hier bestanden toe die je aanvraag verduidelijken, zoals
                  screenshots, documenten of voorbeelden. Max. 10MB per bestand.
                </h2>
                <button
                  type="button"
                  onClick={handleClick}
                  className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-lg flex items-center gap-2"
                >
                  Upload afbeelding
                  <Upload size={16} />
                </button>

                <input
                  type="file"
                  name="file"
                  accept="image/*"
                  className="hidden"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                />

                {/* File name shown when valid */}
                {fileName && (
                  <p className="mt-2 text-sm text-green-600">
                    Bestand geselecteerd: {fileName}
                  </p>
                )}

                {/* Error message if too big */}
                {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
              </div>
            </div>
          </div>
        </div>

        <div className="md:px-0 px-6">
          <div className="flex justify-center items-center md:my-8 my-4 ">
            <button
              disabled={!isFormValid}
              className="btn hover:bg-[#468AFFE6] bg-[#468AFF]  md:px-32 px-10 py-3 text-[#FFFFFF] rounded-xl text-lg md:text-md lg:text-xl"
            >
              Vraag offerte aan
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default SecondCardInputField;
