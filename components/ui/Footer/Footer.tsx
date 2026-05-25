"use client";

import { FaRegCopyright } from "react-icons/fa6";

export default function Footer(): React.ReactElement {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="hero mt-12 sm:mt-16 lg:mt-24 backdrop-blur-md bg-black/20 py-3 sm:py-4 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center sm:justify-between flex-wrap gap-4 sm:gap-0 text-white/40 items-center max-w-7xl mx-auto">
        <div className="tracking-wider sm:tracking-widest w-fit mx-auto text-center text-xs sm:text-sm 3xl:text-base">
          <FaRegCopyright className="inline mb-0.5 sm:mb-1" /> All rights reserved by Ishak
          Qureshee Akib- {currentYear}
        </div>
      </div>
    </footer>
  );
}
