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
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-100 to-yellow-300 pt-20 px-2 sm:px-0">
        <div className="w-full max-w-md sm:max-w-2xl md:max-w-4xl bg-white rounded-lg shadow-lg p-4 sm:p-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center text-yellow-700">Gallery</h1>
          <GalleryGrid images={images} />
        </div>
      </div>
  );
}
