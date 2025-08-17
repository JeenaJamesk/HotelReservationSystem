"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 80px is the height of the hero/main section's navbar area
      setScrolled(window.scrollY > window.innerHeight - 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full px-4 sm:px-8 py-2 sm:py-4 z-50 fixed top-0 left-0 transition-colors duration-300 ${scrolled ? 'text-black shadow-md' : 'text-white'}`}
      style={{ backgroundColor: scrolled ? '#fff' : 'rgba(0,0,0,0.4)' }}
    >
      <div className="flex flex-col sm:flex-row justify-between items-center w-full">
        <Link href="/" className="flex items-center gap-2 mb-2 sm:mb-0">
          <Image
            src="/images/logo-white.png"
            alt="AALAPPEAZ Logo"
            width={50}
            height={50}
            priority
          />
        </Link>
        <div className="flex flex-wrap items-center gap-2 sm:gap-4">
          <Link
            href="/booking"
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-2 sm:px-4 py-1 sm:py-2 rounded-full font-semibold transition-all"
            style={{ color: scrolled ? '#000' : '#fff' }}
          >
            Book Table
          </Link>
          <a
            href="#about-section"
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-2 sm:px-4 py-1 sm:py-2 rounded-full font-semibold transition-all cursor-pointer"
            style={{ color: scrolled ? '#000' : '#fff' }}
          >
            About us
          </a>
          <a
            href="#menu-section"
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-2 sm:px-4 py-1 sm:py-2 rounded-full font-semibold transition-all cursor-pointer"
            style={{ color: scrolled ? '#000' : '#fff' }}
          >
            Menu
          </a>
          <a
            href="#gallery-section"
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-2 sm:px-4 py-1 sm:py-2 rounded-full font-semibold transition-all cursor-pointer"
            style={{ color: scrolled ? '#000' : '#fff' }}
          >
            Gallery
          </a>
          <a
            href="#contact-section"
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-2 sm:px-4 py-1 sm:py-2 rounded-full font-semibold transition-all cursor-pointer"
            style={{ color: scrolled ? '#000' : '#fff' }}
          >
            Contact us
          </a>
        </div>
      </div>
    </nav>
  );
}
