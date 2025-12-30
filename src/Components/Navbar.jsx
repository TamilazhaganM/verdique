import React, { useState } from "react";
import logo from "./../assets/Verdique logo.jpg";

const Navbar = () => {
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(!show);
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 shadow-md bg-white">
      {/* Navbar container */}
      <div className="flex justify-between items-center px-4 md:px-8 py-2 border-b-4 border-b-green-700">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img className="w-12 h-12 rounded-full p-2" src={logo} alt="Logo" />
          <div>
            <h2 className="font-extrabold text-lg font-edu">Verdique</h2>
            <p className="text-[12px] text-gray-500">
              YOUR DREAM GARDEN BEGINS HERE
            </p>
          </div>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-8">
          <li className="my-3 border-x-2 px-3 py-2 hover:text-green-700 hover:border-3  cursor-pointer">
            Home
          </li>
          <li className="my-3 border-x-2 px-3 py-2 hover:text-green-700 hover:border-3 cursor-pointer">
            About
          </li>
          <li className="my-3 border-x-2 px-3 py-2 hover:text-green-700 hover:border-3 cursor-pointer">
            Services
          </li>
          <li className="my-3 border-x-2 px-3 py-2 hover:text-green-700 hover:border-3 cursor-pointer">
            Contact
          </li>
        </ul>

        {/* Icons + Hamburger */}
        <div className="flex items-center gap-4  md:gap-4 w-fit">
          {/* Phone & Email icons always visible */}
          <i className="border-2 text-xl md:text-2xl rounded-xl fa-solid fa-phone text-green-700"></i>
          <i className="border-2 text-xl md:text-2xl rounded-xl fa-regular fa-envelope text-green-700"></i>

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
          <li className="py-2 border-b border-gray-200 cursor-pointer">Home</li>
          <li className="py-2 border-b border-gray-200 cursor-pointer">About</li>
          <li className="py-2 border-b border-gray-200 cursor-pointer">Services</li>
          <li className="py-2 border-b border-gray-200 cursor-pointer">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
