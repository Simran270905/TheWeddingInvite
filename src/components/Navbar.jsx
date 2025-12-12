import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-[#faf7f2] border-b-4 border-[#a12727] py-4 px-8 flex items-center justify-between fixed top-0 left-0 z-50">

      {/* Logo */}
      <h1 className="font-para text-3xl md:text-4xl text-[#a12727]">
        Malti & Devansh
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-8 font-para text-lg text-gray-700">
        <li className="hover:text-[#a12727] cursor-pointer">Home</li>
        <li className="hover:text-[#a12727] cursor-pointer">Rituals</li>
        <li className="hover:text-[#a12727] cursor-pointer">Story</li>
        <li className="hover:text-[#a12727] cursor-pointer">Gallery</li>
      </ul>

      {/* Mobile Menu Icon */}
      <div
        className="md:hidden text-4xl text-[#a12727] cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {open ? "✕" : "☰"}
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-[#faf7f2] border-b-4 border-[#a12727] shadow-md md:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-60 py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 text-lg font-para text-gray-700">
          <li className="hover:text-[#a12727] cursor-pointer">Home</li>
          <li className="hover:text-[#a12727] cursor-pointer">Rituals</li>
          <li className="hover:text-[#a12727] cursor-pointer">Story</li>
          <li className="hover:text-[#a12727] cursor-pointer">Gallery</li>
        </ul>
      </div>
    </nav>
  );
}