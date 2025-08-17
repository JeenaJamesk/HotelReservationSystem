import React from 'react';
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4 text-[#aaa7a7]">
            <div className="flex mx-auto justify-between mr-[1%] ml-[1%]">
                <div><p>&copy; {new Date().getFullYear()} AALAPPEAZ. All rights reserved.</p></div>
                <div><p>Stay in Touch { }
                    <a
                        href="https://instagram.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-pink-500 transition-colors text-xl"
                    >
                        <FaInstagram />
                    </a>
                </p></div>
               
            </div>
        </footer>
    );
};

export default Footer;
