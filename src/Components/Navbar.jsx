import React, { useState } from "react";
import logo from "./../assets/Verdique logo.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(!show);
  }

  return (
    <div  className="sticky top-0 left-0 right-0 z-50 shadow-md bg-white">
      {/* Navbar container */}
      <div className="flex justify-between items-center px-4 md:px-4 py-2 border-b-4 border-b-green-700">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <a href="#home"><img className="w-12 h-12 rounded-full p-2" src={logo} alt="Logo" /></a>
          <div>
            <h2 className="font-extrabold text-lg font-edu">Verdique</h2>
            <p className="text-[12px] text-gray-500">
              YOUR DREAM GARDEN BEGINS HERE
            </p>
          </div>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-8">
          <a href ="#home"><li className="my-auto border-x-2 px-2 py-2 hover:text-green-700   cursor-pointer">
            Home
          </li></a>
          <a href ="#about"><li className="my-auto border-x-2 px-4 py-2 hover:text-green-700 cursor-pointer">
            About
          </li></a>
          <a href ="#services"><li className="my-auto border-x-2 px-4 py-2 hover:text-green-700  cursor-pointer">
            Services
          </li></a>
          <a href ="#Contact"><li className="my-auto border-x-2 px-4 py-2 hover:text-green-700 cursor-pointer">
            Contact
          </li></a>
        </ul>

        {/* Icons + Hamburger */}
        <div className="flex items-center gap-4  md:gap-8 w-fit">
          {/* Phone & Email icons always visible */}
          <a href ="/#Contact"><i  className="border-2 text-xl  md:text-2xl rounded-xl fa-solid fa-phone text-green-700"></i></a>
          <a href ="/#Messages"><i className="border-2 text-xl md:text-2xl rounded-xl fa-regular fa-envelope text-green-700"></i></a>

          {/* Hamburger only on mobile */}
          <div className="md:hidden">
          <i
            className="fa-solid fa-bars text-2xl cursor-pointer"
            onClick={handleShow}
            style={{ color: "#4e535a" }}
          ></i>
          </div>
         
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
          show ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col p-4 gap-2">
          <a href ="#home"><li className="py-2 border-b border-gray-200 cursor-pointer">Home</li></a>
          <a href ="#about"><li className="py-2 border-b border-gray-200 cursor-pointer">About</li></a>
          <a href ="#services"><li className="py-2 border-b border-gray-200 cursor-pointer">Services</li></a>
          <a href ="#Contact"><li className="py-2 border-b border-gray-200 cursor-pointer">Contact</li></a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
