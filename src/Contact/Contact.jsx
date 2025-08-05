import { GrLocation } from "react-icons/gr";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import das from "../assets/das.png"
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
//import Swal from 'sweetalert2'

const Contact = () => {

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
  //     .sendForm('service_adb605b','template_sks4f0o', form.current, {
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


  {/** Form Validation start */}

  const [formData, setFormData] = useState({
    from_name: '',
    from_email: ''

  });

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const noErrors = Object.keys(errors).length === 0;
    const allFilled = Object.values(formData).every(field => field.trim() !== '');
    setIsFormValid(noErrors && allFilled);
  }, [errors, formData]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };


  const validateField = (name, value) => {
    let fieldErrors = { ...errors };

    if (name === 'from_name') {
      if (!value.trim()) {
        fieldErrors.from_name = 'Name is required';
      } else {
        delete fieldErrors.from_name;
      }
    }

    if (name === 'from_email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value.trim()) {
        fieldErrors.from_email = 'Email is required';
      } else if (!emailRegex.test(value)) {
        fieldErrors.from_email = 'Invalid email format';
      } else {
        delete fieldErrors.from_email;
      }
    }

    setErrors(fieldErrors);
  };



  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_adb605b','template_sks4f0o', form.current, {
        publicKey: 'zVpdm4YG_4bymkiyw',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      )
      
    if (isFormValid) {
      alert('Form submitted successfully!');
  
      const form = e.target;
  
      const from_name = form.from_name.value;
      const name = form.name.value;
      const from_email = form.from_email.value;
      const telephone = form.telephone.value;
      const subject = form.subject .value;
      const topic = form.topic.value;
      const message = form.message.value;
      
      const formValue = {
        name,
        from_name,
        from_email,
        telephone,
        subject ,
        topic,
        message
        
      };

  
      console.log(formValue);

    // Send to backend
    /*
    fetch("http://localhost:5000/api/submit-form", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(formValue)
})
  .then(response => response.json())
  .then(data => {
    console.log("Response from backend:", data);
    alert("Data successfully sent to the server!");
  })
  .catch(error => {
    console.error("Error submitting form:", error);
    alert("Failed to submit form. Try again.");
  });

    */

  form.reset();

}
}



  {/** Form Validation end  */}



  return (
    <>

      <div className="bg-[#F5F5F5] w-full flex flex-col items-center py-16">
             <h1 className="text-xl font-bold text-gray-800">Contactpagina</h1>
             <h1 className="flex items-center gap-2 text-gray-600 text-sm md:text-base">
               Home 
               <img className="w-5 h-[2px]" src={das} alt="separator" /> 
               Contactpagina
             </h1>
           </div>
    <div className="container mx-auto lg:px-30 py-8">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
        {/* Left Section - Contact Details & Social Media */}
        <div className="bg-[#F5F5F5] rounded-md p-8">
          <h1 className="text-xl font-bold mb-5">Neem contact met ons op</h1>
          <p className="font-plus-jakarta text-[#7E7E7E] mb-1">
            Wij staan klaar om u te helpen bij uw digitale uitdagingen. Samen creëren
          </p>
          {/* <p className="font-plus-jakarta text-[#7E7E7E] mb-5">
            we oplossingen die werken. Neem vandaag nog contact met ons op!
          </p> */}

          <h2 className="font-medium text-base mb-5">Contactgegevens</h2>
          <div className="space-y-4">
            <div>
              <div className="flex items-center">
                <GrLocation className="mr-2" />
                <span className="font-medium">Address:</span>{" "}
                <p className="ml-2 text-slate-500 text-sm">
                De Entree 201, 1101 HG, Amsterdam
              </p>
              </div>
             
            </div>
            <div className="flex items-center">
              <FiPhone className="mr-2" />
              <span className="font-medium">Telefoon:</span>{" "}
              <span className="text-slate-500 ml-1">085-203 15 20</span>
            </div>
            <div className="flex items-center">
              <MdOutlineMail className="mr-2" />
              <span className="font-medium">E-mail:</span>{" "}
              <span className="text-slate-500 ml-1">info@younitech.nl</span>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-bold mb-3">Volg ons op sociale media</h2>
            <div className="space-y-3">
              <div className="flex items-center">
                <FaLinkedin className="mr-2" />
                <span className="font-medium">LinkedIn:</span>{" "}
                <span className="text-slate-500 ml-1">linkedin.com/younitech</span>
              </div>
              <div className="flex items-center">
                <AiFillInstagram className="mr-2" />
                <span className="font-medium">Instagram:</span>{" "}
                <span className="text-slate-500 ml-1">instagram.com/younitech</span>
              </div>
              <div className="flex items-center">
                <FaFacebook className="mr-2" />
                <span className="font-medium">Facebook:</span>{" "}
                <span className="text-slate-500 ml-1">facebook.com/younitech</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="bg-[#F5F5F5] rounded-md p-8">
          <h1 className="text-xl font-bold mb-3">Heeft u een vraag?</h1>
          <p className="font-plus-jakarta text-[#7E7E7E]  mb-6">
            Vul ons contactformulier in op de website en wij nemen zo snel mogelijk
            contact met u op.
          </p>



          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            <div className="lg:flex lg:space-x-4 space-y-4 lg:space-y-0">
              <div className="flex-1">
                <label className="block mb-2 text-sm font-medium" htmlFor="name">
                  Naam
                </label>
                <input
                  type="text"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  placeholder="Voer uw naam in"
                  className="input input-bordered w-full font-plus-jakarta text-[#7E7E7E]"
                  
                />
                 {errors.from_name && <p className="text-red-500 text-sm">{errors.from_name}</p>}
              </div>
              <div className="flex-1">
                <label className="block mb-2 text-sm font-medium" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  placeholder="Voer uw e-mailadres in"
                  className="input input-bordered w-full font-plus-jakarta text-[#7E7E7E]"
                  required
                />
                {errors.from_email && <p className="text-red-500 text-sm">{errors.from_email}</p>}
              </div>
            </div>
            <div className="lg:flex lg:space-x-4 space-y-4 lg:space-y-0">
              <div className="flex-1">
                <label className="block mb-2 text-sm font-medium" htmlFor="telephone">
                Telefoonnummer
                </label>
                <input
                  type="tel"
                  name="telephone"
                  placeholder="Voer telefoon nr in"
                  className="input input-bordered w-full font-plus-jakarta text-[#7E7E7E]"
                />
              </div>
              <div className="flex-1">
                <label className="block mb-2 text-sm font-medium" htmlFor="name">
                Bedrijfsnaam (optioneel)
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Voer de bedrijfsnaam in"
                  className="input input-bordered w-full font-plus-jakarta text-[#7E7E7E]"
                />
              </div>
            </div>

            <div className="lg:flex lg:space-x-4 space-y-4 lg:space-y-0">
              <div className="flex-1">
                <label className="block mb-2 text-sm font-medium" htmlFor="subject">
                Producttype
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Geef context"
                  className="input input-bordered w-full font-plus-jakarta text-[#7E7E7E]"
                />
              </div>
              <div className="flex-1">
                <label className="block mb-2 text-sm font-medium" htmlFor="topic">
                  Onderwerp
                </label>
                <input
                  type="text"
                  name="topic"
                  placeholder="Selecteer Onderwerp"
                  className="input input-bordered w-full font-plus-jakarta text-[#7E7E7E]"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium" htmlFor="message">
                Bericht
              </label>
              <textarea
                name="message"
                className="textarea textarea-bordered w-full h-36 font-plus-jakarta text-[#7E7E7E]"
                placeholder="Schrijf hier uw vraag"
              ></textarea>
            </div>

            <div>
              <button
              
              disabled={!isFormValid}
                type="submit"
                className="relative text-white btn bg-[#468AFF] px-4 py-2 sm:px-8 sm:py-3 rounded-lg shadow-lg transition-all hover:bg-blue-500 text-xs sm:text-base w-2/4 lg:w-2/4 "
              >
                Verstuur Bericht
              </button>
            </div>
          </form>


        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
