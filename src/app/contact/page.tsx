import React from 'react';
import { FaPhoneAlt, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const ContactPage = () => {
    return (
        <div style={{ backgroundImage: `url('/images/contactBg.png')` }}>
            <div className="mx-auto p-4 flex flex-col w-1/2" style={{color: 'white'}}>

                <p className='m-0 text-center'>If you have any questions or feedback, feel free to reach out to us!</p>
                <form className="mt-[4px]">
                    <div className="mt-[2.5px]">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" id="name" className="mt-1 block w-full border border-gray-300 rounded-md p-2" required />
                    </div>
                    <div className="mt-[2.5px]">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" className="mt-1 block w-full border border-gray-300 rounded-md p-2" required />
                    </div>
                    <div className="mt-[2.5px]">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                        <textarea id="message" className="mt-1 block w-full border border-gray-300 rounded-md p-2" rows={4} required></textarea>
                    </div>
                    <div className='mx-auto my-[0px] justify-self-center'>
                        <button type="submit" className="mx-auto mt-[10px] bg-blue-500 text-white px-4 py-2 my-2.5 rounded">Send Message</button>
                    </div>
                </form>
                <div className='flex my-[10px]'>
                    <img src="/images/insta.png" alt="Contact Us" className="mr-[10px] mt-[6px] w-full h-auto rounded-lg shadow-lg" />
                    <img src="/images/location.png" alt="Contact Us" className="mt-[6px] w-full h-auto rounded-lg shadow-lg" />
                </div>
                <div className="flex gap-2 items-center justify-center my-[10px]">
                    <div className="flex items-center">
                        <FaPhoneAlt className="text-blue-500 mr-[5px]" />
                        <span className="mr-[10px] text-lg font-semibold">+441234567890</span>
                    </div>
                    <div className="flex items-center">
                        <FaPhoneAlt className="text-blue-500 mr-[5px]" />
                        <span className="text-lg font-semibold">+01332974086</span>
                    </div>
                    </div>
                    <div  className="flex gap-2 items-center justify-center my-[10px] gap-[10px] ">
                    <div className="flex items-center">
                        <FaInstagram className="text-pink-500 [5px]" />
                        <span className="text-lg font-semibold">aalappeaz.uk</span>
                    </div>
                    <div className="flex items-center">
                        <MdEmail className="text-red-500 [5px]" />
                        <span className="text-lg font-semibold">aalappeaz@gmail.com</span>
                    </div>
                    <div className="flex items-center">
                        <FaMapMarkerAlt className="text-green-600 [5px]" />
                        <span className="text-lg font-semibold">16 St Peters Churchyard, Derby, DE1 1NN</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;