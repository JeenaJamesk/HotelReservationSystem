"use client";

import React from 'react';
import { useState, useEffect } from "react";
import Navbar from '../components/Navbar';
import Image from 'next/image';
import AboutPage from './about/page';
import MenuPage from './menu/page';
import GallaeryPage from './gallery/page';
import ContactPage from './contact/page';
import LaunchingSoon from '../components/LaunchingSoon';
import Footer from '../components/Footer';

// const prisma = new PrismaClient();

export default function HomePage() {
  const [adminCredentials, setAdminCredentials] = useState<any[]>([]);

  useEffect(() => {
    async function fetchAdminCredentials() {
      // const credentials = await prisma.adminCredential.findMany();
      // setAdminCredentials(credentials);
      // console.log(credentials);
    }
    fetchAdminCredentials();
  }, []);

  const live = process.env.NEXT_PUBLIC_LIVE === 'false';
  if (!live) {
    return <LaunchingSoon />;
  }

  const images = [
    "/images/bg1.JPG",
    "/images/bg2.JPG",
    "/images/bg3.JPG",
    "/images/bg4.JPG",
    "/images/bg5.JPG",
    "/images/bg6.JPG",
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
    <>
      <section className="scroll-smooth">
        <Navbar />
        <main className="w-full h-screen bg-center bg-cover transition-all duration-1000 flex items-center justify-center"
          style={{ backgroundImage: `url(${images[currentIndex]})` }}>
          <div className="flex flex-col items-center text-center mt-24 h-full justify-center px-4 sm:px-8 md:px-16 lg:px-32" style={{ color: 'white' }}>
            <Image src="/images/logo-white.png" alt="AALAPPEAZ Logo" width={150} height={150} priority />
            <p className="text-lg sm:text-xl md:text-2xl">Venice of the East</p>
            <p className="text-lg sm:text-xl md:text-2xl">16 St Perters Churchyard, Derby, DE1 1NN</p>
            <p className="text-base sm:text-lg md:text-xl">Your comfort is our priority. Explore our services and make a reservation today!</p>

            <p className="text-base sm:text-lg md:text-xl">With the soulful flavours of coastal Kerala,
              Aalappeaz is more than just a meal,
              it is a journey to the heart of the backwaters.</p>

            <a
              href="/booking"
              className="inline-block mt-6 p-[3px] z-[10] text-black font-bold text-lg shadow-lg hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all pointer-events-auto no-underline rounded-lg hover:no-underline fixed left-1/2 -translate-x-1/2 bottom-0 w-auto max-w-[90vw]"
              style={{ opacity: 1, visibility: 'visible', backgroundColor: 'white', padding: '5px 10px' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.4)')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'white')}
            >
              BOOK
            </a>
          </div>
        </main>
        <div id="about-section" className="w-full px-2 sm:px-4 md:px-8 lg:px-16">
          <AboutPage />
        </div>
        <div id="menu-section" className="w-full px-2 sm:px-4 md:px-8 lg:px-16">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center">OUR MENU</h1>
          <MenuPage />
        </div>
        <div id="gallery-section" className="w-full px-2 sm:px-4 md:px-8 lg:px-16">
          <GallaeryPage />
        </div>
        <div id="contact-section" className="w-full px-2 sm:px-4 md:px-8 lg:px-16">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center">CONTACT US</h1>
          <ContactPage />
        </div>
        <Footer />
      </section>
    </>
  );
}