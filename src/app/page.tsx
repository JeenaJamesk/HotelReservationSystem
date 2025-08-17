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
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default function HomePage() {
  const [adminCredentials, setAdminCredentials] = useState<any[]>([]);

  useEffect(() => {
    async function fetchAdminCredentials() {
      const credentials = await prisma.adminCredential.findMany();
      setAdminCredentials(credentials);
      console.log(credentials);
    }
    fetchAdminCredentials();
  }, []);

  const live = process.env.NEXT_PUBLIC_LIVE === 'true';
  if (!live) {
    return <LaunchingSoon />;
  }

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
    <>
      <section className="scroll-smooth">
        <Navbar />
        <main className="w-full h-screen bg-center bg-cover transition-all duration-1000"
          style={{ backgroundImage: `url(${images[currentIndex]})` }}>
          <div className="flex flex-col items-center text-center mt-24 h-full justify-center" style={{ color: 'white' }}>
            <Image src="/images/logo-white.png" alt="AALAPPEAZ Logo" width={150} height={150} priority />
            <p className="text-xl">Venice of the East</p>
            <p className="text-xl">16 St Perters Churchyard, Derby, DE1 1NN</p>
            <p>Your comfort is our priority. Explore our services and make a reservation today!</p>

            <p>With the soulful flavours of coastal Kerala,
              Aalappeaz is more than just a meal,
              it is a journey to the heart of the backwaters.</p>
          </div>
          <a
            href="/booking"
            className="fixed left-1/2 top-1/2 z-[10] p-[10px] pl-[2rem] pr-[2rem] text-black font-bold text-lg shadow-lg hover:scale-105 hover:bg-transparent focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all pointer-events-auto no-underline -translate-x-1/2 -translate-y-1/2"
            style={{ opacity: 1, visibility: 'visible', backgroundColor: 'white' }}
          >
            BOOK
          </a>
        </main>
        <div id="about-section">
          <AboutPage />
        </div>
        <div id="menu-section">
          <h1 className="text-2xl font-bold text-center">OUR MENU</h1>
          <MenuPage />
        </div>
        <div id="gallery-section">
          <GallaeryPage />
        </div>
        <div id="contact-section">
          <h1 className="text-2xl font-bold text-center">CONTACT US</h1>
          <ContactPage />
        </div>
        <Footer />
      </section>
    </>
  );
}