
"use client";


import Image from "next/image";
import React from "react";
import { useState, useEffect } from "react";

export default function LaunchingSoon() {
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
    <div
      className="flex flex-col items-center justify-center min-h-screen text-center transition-all duration-1000"
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        height: "100vh",
        color: "white",
      }}
    >
      <Image src="/images/logo-white.png" alt="AALAPPEAZ Logo" width={150} height={100} priority />
      <h1 className="text-5xl font-bold mb-6 drop-shadow-lg">Launching Soon!</h1>
      <p className="text-lg mb-8 drop-shadow">Stay tuned for updates!</p>
      <div className="animate-bounce text-3xl">🚀</div>
    </div>
  );
}
