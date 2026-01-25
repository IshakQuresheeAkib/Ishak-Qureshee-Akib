"use client";

import { FaRegCopyright } from "react-icons/fa6";

export default function Footer(): React.ReactElement {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="hero mt-24 backdrop-blur-md bg-black/20 py-3">
      <div className="flex justify-center sm:justify-between flex-wrap sm:gap-0 gap-10 text-white/40 items-center">
        <div className="tracking-widest text-center text-sm">
          <FaRegCopyright className="inline mb-1" /> All rights reserved by Ishak
          Qureshee Akib {currentYear}
        </div>
      </div>
    </footer>
  );
}
