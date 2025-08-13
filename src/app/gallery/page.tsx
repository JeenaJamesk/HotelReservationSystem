
"use client";



import React from "react";
import GalleryGrid from "../../components/GalleryGrid";

export default function GalleryPage() {
  const images = [
    { src: "/images/resturant.png", alt: "Gallery Image 1" },
    { src: "/images/resturantLogo.png", alt: "Gallery Image 2" },
    { src: "/images/menuCard.png", alt: "Gallery Image 3" },
    { src: "/images/plate.png", alt: "Gallery Image 4" },
    { src: "/images/uniform.png", alt: "Gallery Image 5" },
    { src: "/images/nameSlip.png", alt: "Gallery Image 6" },
    { src: "/images/parcel.png", alt: "Gallery Image 7" },
    { src: "/images/pack.png", alt: "Gallery Image 8" },
  ];
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-start py-12 px-6">
      <h2 className="text-5xl font-bold mb-10">GALLERY</h2>
      <GalleryGrid images={images} />
    </section>
  );
}