import React, { useState } from "react";
import { FaPhoneAlt, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ContactForm, { ContactFormData } from "../../components/ContactForm";

const ContactPage = () => {
  const [showForm, setShowForm] = useState(false);


  const handleFormSubmit = (data: ContactFormData) => {
    console.log("Form submitted:", data);
    setShowForm(false);
  };

  return (
    <div className="relative bg-cover bg-center" style={{ backgroundImage: `url('/images/contactBg.png')` }}>
      <div className="mx-auto p-4 flex flex-col w-1/2 text-white relative z-10">
        <p className="m-0 text-center">
          If you have any questions or feedback, feel free to reach out to us!
        </p>

        {!showForm && (
          <div className="flex justify-center my-4">
            <button
              className="text-blue-400 underline text-lg font-semibold hover:text-blue-600 transition bg-transparent border-0"
              onClick={() => setShowForm(true)}
              type="button"
            >
              Send Message
            </button>
          </div>
        )}

        {showForm && (
          <div className="inset-0 flex items-center justify-center bg-opacity-70">
            <div className="p-6 rounded-lg shadow-2xl w-full max-w-md relative text-white border-white">
              <ContactForm onSubmit={handleFormSubmit} onClose={() => setShowForm(false)} />
            </div>
          </div>
        )}

        {/* Social Images */}
        <div className="flex mt-[2%] mb-[2%] h-[100px] items-center justify-center">
          <img
            src="/images/insta.png"
            alt="Instagram"
            className="mr-[1%] rounded-lg shadow-lg"
            width={150}
            height={100}
          />
          <img
            src="/images/location.png"
            alt="Location"
            className="rounded-lg shadow-lg"
            width={150}
            height={100}
          />
        </div>

        <div className="flex items-center justify-center mb-[2%]">
          <div className="flex items-center mr-[10px]">
            <FaPhoneAlt className="text-blue-500 mr-[2px]" />
            <span className="text-lg font-semibold">+44 1234 567890</span>
          </div>
          <div className="flex items-center">
            <FaPhoneAlt className="text-blue-500 mr-[2px]" />
            <span className="text-lg font-semibold">+01 332 974086</span>
          </div>
        </div>

        <div className="flex items-center justify-evenly mb-[2%]">
          <div className="flex items-center">
            <FaInstagram className="text-pink-500 mr-[2px]" />
            <span className="text-lg font-semibold">aalappeaz.uk</span>
          </div>
          <div className="flex items-center">
            <MdEmail className="text-red-500 mr-[2px]" />
            <span className="text-lg font-semibold">aalappeaz@gmail.com</span>
          </div>
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-green-600 mr-[2px]" />
            <span className="text-lg font-semibold">
              16 St Peters Churchyard, Derby, DE1 1NN
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
