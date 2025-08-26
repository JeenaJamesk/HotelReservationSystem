"use client";


import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoIosMenu } from "react-icons/io";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Change background on scroll (optional)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu if viewport becomes >= md
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const handler = (e: MediaQueryListEvent | MediaQueryList) => {
      if ("matches" in e ? e.matches : (e as MediaQueryList).matches) {
        setIsOpen(false);
      }
    };
    handler(mq); // run once
    mq.addEventListener?.("change", handler as any);
    return () => mq.removeEventListener?.("change", handler as any);
  }, []);

  const linkClass =
    "px-4 py-2 rounded-full font-semibold bg-yellow-500 hover:bg-yellow-600 transition text-black text-center";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-white/95 text-black shadow-md" : "bg-black/40 text-white"
      }`}
    >
  <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo-white.png"
            alt="AALAPPEAZ Logo"
            width={48}
            height={48}
            priority
          />
        </Link>

  {/* Desktop menu (>= md) */}
  <div className="hidden md:flex items-center gap-3">
          <Link href="/booking" className={linkClass}>Book Table</Link>
          <a href="#about-section" className={linkClass}>About us</a>
          <a href="#menu-section" className={linkClass}>Menu</a>
          <a href="#gallery-section" className={linkClass}>Gallery</a>
          <a href="#contact-section" className={linkClass}>Contact us</a>
        </div>

        {/* Hamburger (mobile only) */}
        <button
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 border-0 background-transparent"
          onClick={() => setIsOpen((v) => !v)}
        >
          <IoIosMenu className={`text-yellow-500 transition-transform ${isOpen ? "rotate-90" : ""}`} />
        </button>
      </div>

      {/* Mobile dropdown (< md) */}
      <div
        className={`md:hidden overflow-hidden bg-white text-black transition-[max-height,opacity,padding] duration-300 ${
          isOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="flex flex-col items-center gap-3 px-4">
          <Link href="/booking" className={linkClass} onClick={() => setIsOpen(false)}>
            Book Table
          </Link>
          <a href="#about-section" className={linkClass} onClick={() => setIsOpen(false)}>
            About us
          </a>
          <a href="#menu-section" className={linkClass} onClick={() => setIsOpen(false)}>
            Menu
          </a>
          <a href="#gallery-section" className={linkClass} onClick={() => setIsOpen(false)}>
            Gallery
          </a>
          <a href="#contact-section" className={linkClass} onClick={() => setIsOpen(false)}>
            Contact us
          </a>
        </div>
      </div>
    </nav>
  );
}
