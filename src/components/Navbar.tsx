"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

export default function Navbar() {
 
      return (
        <nav className="w-full px-8 py-4 bg-black bg-opacity-40 text-white z-50 absolute top-0 left-0">
          <div className="flex justify-between items-center w-full">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/logo-white.png"
                alt="AALAPPEAZ Logo"
                width={50}
                height={50}
                priority
              />
            </Link>
            <div className="flex items-center gap-4">
              <Link
                href="/book-table"
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-full font-semibold transition-all"
              >
                Book Table
              </Link>
              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-500 transition-colors text-xl"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </nav>
      );
    }