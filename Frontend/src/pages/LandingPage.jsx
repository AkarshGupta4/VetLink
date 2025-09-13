import React, { useState } from "react";
import Homeimage from "../assets/images/Homeimage.png";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Contact from "../components/contact";

export default function LandingPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="relative flex-1 w-full h-screen overflow-hidden">
        {/* Hero Image */}
        <img
          src={Homeimage}
          alt="Home"
          className="w-full h-full object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        {/* Header (Logo + Navbar) */}
        <div className="absolute top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-20">
          {/* Logo */}
          <div>
            <h1 className="text-2xl sm:text-4xl font-bold text-black drop-shadow-md">
              VetLink
            </h1>
            <p className="hidden sm:block text-sm sm:text-lg text-black drop-shadow-md">
              Connecting Health Empowering Life
            </p>
          </div>

          {/* Navbar */}
          <div className="font-inter">
            {/* Desktop Navbar */}
            <div className="hidden md:flex space-x-8">
              <Link
                to="/"
                className="text-black hover:text-green-400 font-medium text-lg cursor-pointer"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-black hover:text-green-400 font-medium text-lg cursor-pointer"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-black hover:text-green-400 font-medium text-lg cursor-pointer"
              >
                Contact
              </Link>
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-black cursor-pointer focus:outline-none"
              >
                {isOpen ? (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
              <div className="absolute top-16 right-6 bg-white bg-opacity-95 backdrop-blur-md rounded-md shadow-lg w-40 p-4 space-y-3 md:hidden">
                <Link
                  to="/"
                  className="block text-black hover:text-green-600 font-medium cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="block text-black hover:text-green-600 font-medium cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="block text-black hover:text-green-600 font-medium cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-10">
          <h1 className="text-3xl sm:text-6xl font-bold drop-shadow-lg text-white">
            Welcome to VetLink
          </h1>
          <h3 className="mt-3 text-lg sm:text-2xl drop-shadow-md text-white">
            Connecting farmers with modern veterinary solutions
          </h3>

          {/* Button to Role Selection */}
          <Link to="/role-selection">
            <button className="mt-6 px-6 sm:px-8 py-2 sm:py-3 bg-green-600 text-white text-lg font-semibold rounded-md shadow-lg hover:bg-green-700 transition duration-300 cursor-pointer">
              Get Started
            </button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
