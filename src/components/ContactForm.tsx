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
  const [error, setError] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev: ContactFormData) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError("All fields are required.");
      return;
    }
    setError("");
    onSubmit(formData);
  };
    return (
      <form className="space-y-4 sm:space-y-6 px-2 sm:px-0" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            className="w-full border-0 border-b-2 border-gray-300 bg-transparent text-[#00363a] placeholder-gray-400 focus:outline-none focus:border-blue-400 p-1 sm:p-2"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            className="w-full border-0 border-b-2 border-gray-300 p-1 sm:p-2 bg-transparent text-[#00363a] placeholder-gray-400 focus:outline-none focus:border-blue-400"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
        </div>
        <div>
          <textarea
            name="message"
            id="contact-message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full border-0 border-b-2 border-gray-300 p-1 sm:p-2 bg-transparent text-[#00363a] placeholder-gray-400 focus:outline-none focus:border-blue-400 resize-none"
            placeholder="Message"
            required
          />
        </div>
        {error && <div className="text-red-400 text-sm mt-1 text-center">{error}</div>}
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-1 sm:py-2 px-4 sm:px-6 rounded hover:bg-blue-600 transition mx-auto block"
        >
          Send Message
        </button>
      </form>
    );
};

export default ContactForm;
