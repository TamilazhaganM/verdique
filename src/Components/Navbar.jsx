import React, { useState } from "react";
import logo from "./../assets/Verdique logo.jpg";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#FAFAF8]/90 border-b border-[#4A7C59]/10 shadow-sm">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 py-3">

        {/* Logo */}
        <HashLink smooth to="/#home" className="flex items-center gap-3">

          <img
            src={logo}
            alt="Verdique"
            className="w-14 h-14 rounded-full object-cover border-2 border-[#7EC845]"
          />

          <div>
            <h1 className="text-xl font-bold text-[#0D1F0F]">
              Verdique
            </h1>

            <p className="text-[11px] tracking-widest text-[#4A7C59] uppercase">
              Green Living Starts Here
            </p>
          </div>
        </HashLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-[#0D1F0F]">

          <HashLink smooth to="/#home">
            <li className="hover:text-[#7EC845] transition duration-300">
              Home
            </li>
          </HashLink>

          <HashLink smooth to="/#about">
            <li className="hover:text-[#7EC845] transition duration-300">
              About
            </li>
          </HashLink>

          {/* Services Dropdown */}
          <li className="relative group cursor-pointer">

            <span className="hover:text-[#7EC845] transition duration-300">
              Services
            </span>

            <div className="absolute left-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">

              <div className="w-60 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">

                <Link to="/landscape">
                  <div className="px-5 py-3 hover:bg-[#F5F2EC]">
                    Landscape Design
                  </div>
                </Link>

                <Link to="/garden-maintenance">
                  <div className="px-5 py-3 hover:bg-[#F5F2EC]">
                    Garden Maintenance
                  </div>
                </Link>

                <Link to="/agricultural-services">
                  <div className="px-5 py-3 hover:bg-[#F5F2EC]">
                    Agricultural Services
                  </div>
                </Link>

              </div>
            </div>

          </li>

          <HashLink smooth to="/#projects">
            <li className="hover:text-[#7EC845] transition duration-300">
              Projects
            </li>
          </HashLink>

          <HashLink smooth to="/#contact">
            <li className="hover:text-[#7EC845] transition duration-300">
              Contact
            </li>
          </HashLink>

        </ul>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-4">

          <HashLink
           smooth
          to="/#footer"
            className="w-10 h-10 rounded-full bg-[#F5F2EC] flex items-center justify-center hover:bg-[#7EC845] hover:text-[#0D1F0F] transition"
          >
            <i className="fa-solid fa-phone"></i>
          </HashLink>

          <HashLink
            smooth
            to="/#contact"
            className="bg-[#7EC845] text-[#0D1F0F] px-6 py-3 rounded-full font-semibold hover:bg-[#92d95a] transition"
          >
            Get Quote
          </HashLink>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setShow(!show)}
          className="md:hidden text-2xl text-[#0D1F0F]"
        >
          {show ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          show ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="bg-white border-t border-gray-100">

          <HashLink
            smooth
            to="/#home"
            onClick={() => setShow(false)}
            className="block px-6 py-4 border-b"
          >
            Home
          </HashLink>

          <HashLink
            smooth
            to="/#about"
            onClick={() => setShow(false)}
            className="block px-6 py-4 border-b"
          >
            About
          </HashLink>
          

          <Link
            to="/landscape"
            onClick={() => setShow(false)}
            className="block px-6 py-4 border-b"
          >
            Landscape Design
          </Link>

          <Link
            to="/garden-maintenance"
            onClick={() => setShow(false)}
            className="block px-6 py-4 border-b"
          >
            Garden Maintenance
          </Link>

          <Link
            to="/agricultural-services"
            onClick={() => setShow(false)}
            className="block px-6 py-4 border-b"
          >
            Agricultural Services
          </Link>
          <HashLink
            smooth
            to="/#projects"
            onClick={() => setShow(false)}
            className="block px-6 py-4 border-b"
          >
            Projects
          </HashLink>
          

          <HashLink
            smooth
            to="/#contact"
            onClick={() => setShow(false)}
            className="block px-6 py-4"
          >
            Contact
          </HashLink>

        </div>
      </div>

    </nav>
  );
};

export default Navbar;