import React, { useState } from "react";
export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

interface ContactFormProps {
  onSubmit: (data: ContactFormData) => void;
  onClose: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit, onClose }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
  setFormData((prev: ContactFormData) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 grid gap-[10px]">
      <div>
        <input
          type="text"
          name="name"
          id="contact-name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border-0 border-b-2 border-gray-300 px-3 py-2 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
          placeholder="Name"
          required
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          id="contact-email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border-0 border-b-2 border-gray-300 px-3 py-2 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
          placeholder="Email"
          required
        />
      </div>
      <div>
        <textarea
          name="message"
          id="contact-message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full border-0 border-b-2 border-gray-300 px-3 py-2 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 resize-none"
          placeholder="Message"
          required
        />
      </div>
      <div className="flex items-center justify-center gap-4 mt-4 mx-[5px]">
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold px-6 py-2 rounded hover:bg-blue-600 transition mr-[5px]"
        >
          Submit
        </button>
        <button
          type="button"
          onClick={onClose}
          className="bg-red-500 text-white font-bold px-6 py-2 rounded hover:bg-red-600 transition mr-[5px]"
        >
          Close
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
