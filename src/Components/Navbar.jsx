import React, { useState } from "react";
import logo from "./../assets/Verdique logo.jpg";
import { Link } from "react-router-dom";
import {HashLink} from "react-router-hash-link";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  function handleShow() {
    setShow(!show);
  }
  function closeMenu() {
  setShow(false);
}


  return (
    <div  className="sticky top-0 left-0 right-0 z-50 shadow-md bg-white">
      {/* Navbar container */}
      <div className="flex justify-between items-center px-4 md:px-4 py-2 border-b-4 border-b-green-700">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to="/"><img className="w-12 h-12 rounded-full p-2" src={logo} alt="Logo" /></Link>
          <div>
            <h2 className="font-extrabold text-lg font-edu">Verdique</h2>
            <p className="text-[12px] text-gray-500">
              YOUR DREAM GARDEN BEGINS HERE
            </p>
          </div>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-8">
          <HashLink smooth to ="/"><li className="my-auto border-x-2 px-2 py-2 hover:text-green-700   cursor-pointer">
            Home
          </li></HashLink>
          <HashLink smooth to ="/#about"><li className="my-auto border-x-2 px-4 py-2 hover:text-green-700 cursor-pointer">
            About
          </li></HashLink>
          <HashLink smooth to ="/#services"><li className="relative my-auto border-x-2 px-4 py-2 hover:text-green-700  cursor-pointer group">
            <span>Services</span> <ul  className="absolute left-0 top-full  w-48 bg-white shadow-lg rounded-md hidden group-hover:block">
              <Link to='/landscape'><li className="px-4 py-2 text-black text-sm hover:bg-green-100">LandScape</li></Link>
              <Link to='/garden-maintenance'><li className="px-4 py-2 text-black text-sm hover:bg-green-100">Garden-Maintenance</li></Link>
              <Link to='/agricultural-services'><li className="px-4 py-2 text-black text-sm hover:bg-green-100">Agricultural-Service</li></Link>
            </ul>
          </li></HashLink>
          <HashLink smooth to ="/#contact"><li className="my-auto border-x-2 px-4 py-2 hover:text-green-700 cursor-pointer">
            Contact
          </li></HashLink>
        </ul>

        {/* Icons + Hamburger */}
        <div className="flex items-center gap-4  md:gap-8 w-fit">
          {/* Phone & Email icons always visible */}
          <HashLink smooth to ="/#contact"><i  className="border-2 text-xl  md:text-2xl rounded-xl fa-solid fa-phone text-green-700"></i></HashLink>
          <HashLink smooth to ="/#Messages"><i className="border-2 text-xl md:text-2xl rounded-xl fa-regular fa-envelope text-green-700"></i></HashLink>

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
          <HashLink onClick={closeMenu} smooth to ="/"><li className="py-2 border-b border-gray-200 cursor-pointer">Home</li></HashLink>
          <HashLink onClick={closeMenu} smooth to ="/#about"><li className="py-2 border-b border-gray-200 cursor-pointer">About</li></HashLink>
          <HashLink ><li className="border-b border-gray-200">
  <button
    onClick={() => setServiceOpen(!serviceOpen)}
    className="w-full text-left py-2 cursor-pointer flex justify-between items-center"
  >
    Services
    <span>{serviceOpen ? <i class="fa-solid fa-minus"></i> : <i class="fa-solid fa-plus"></i>}</span>
  </button>

  {serviceOpen && (
    <ul className="pl-4">
      <Link to="/landscape" onClick={closeMenu}>
        <li className="py-2">Landscape</li>
      </Link>
      <Link to="/garden-maintenance" onClick={closeMenu}>
        <li className="py-2">Garden Maintenance</li>
      </Link>
      <Link to="/agricultural-services" onClick={closeMenu}>
        <li className="py-2">Agricultural Service</li>
      </Link>
    </ul>
  )}
</li>
</HashLink>
          <HashLink onClick={closeMenu} smooth to ="/#contact"><li className="py-2 border-b border-gray-200 cursor-pointer">Contact</li></HashLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
