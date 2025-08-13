"use client";

import React from 'react';
import { useState, useEffect } from "react";
import Navbar from '../components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import AboutPage from './about/page';
import MenuPage from './menu/page';
import GallaeryPage from './gallery/page';
import ContactPage from './contact/page';

export default function HomePage() {
  const images = [
    "/images/bg1.jpeg",
    "/images/bg2.jpeg",
    "/images/bg3.jpeg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section>
      <Navbar />
      <main className="w-full h-screen bg-center bg-cover transition-all duration-1000"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}>
        <div className="flex flex-col items-center text-center mt-24" style={{ color: 'white' }}>
          <Image src="/images/logo-white.png" alt="AALAPPEAZ Logo" width={150} height={150} priority />
          <p className="text-xl">Venice of the East</p>
          <p className="text-xl">16 St Perters Churchyard, Derby, DE1 1NN</p>
          <p>Your comfort is our priority. Explore our services and make a reservation today!</p>
            <Link href="/booking">
              <button className="mt-4 px-6 py-2 bg-[#005b66] text-white rounded hover:bg-[#007c8a] transition">Book Table</button>
            </Link>
          <p>With the soulful flavours of coastal Kerala,
            Aalappeaz is more than just a meal,
            it is a journey to the heart of the backwaters.</p>
        </div>
      </main>
      <AboutPage />
      <h1 className="text-2xl font-bold text-center">OUR MENU</h1>
      <MenuPage />
           
      <GallaeryPage />
      <h1 className="text-2xl font-bold text-center">CONTACT US</h1>
       <ContactPage />
      {/* Uncomment the Footer component when ready to use */}
      {/* <Footer /> */}
    </section>
  );
};