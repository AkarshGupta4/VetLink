import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Homeimage from "../assets/images/Homeimage.png";
import AppLogo from "../assets/images/AppLogo.jpg"; // Import the logo

export default function LandingPage() {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-green-700 text-white px-6 h-20 flex items-center justify-between shadow-2xl relative z-10">
        <div className="flex items-center gap-3 absolute top-2 left-3">
          {/* Logo */}
          <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden bg-white">
            <img
              src={AppLogo}
              alt="VetLink Logo"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Title + Tagline */}
          <div>
            <h1 className="text-3xl font-bold drop-shadow-lg">VetLink</h1>
            <p className="text-sm mt-1 drop-shadow-md">
              Connecting Health Empowering Life
            </p>
          </div>
        </div>
      </div>

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-20 pointer-events-none"></div>

      {/* Role Selection Section */}
      <section className="px-6 py-10 bg-gray-100 z-20 bg-gradient-to-r from-green-50 to-blue-50">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Select Your Role
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Doctor Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 text-center 
                    transform transition-all duration-500 ease-in-out
                    hover:scale-105 hover:shadow-4xl hover:-translate-y-3">
            <h3 className="text-xl font-semibold mb-3 text-green-700">Doctor</h3>
            <p className="text-gray-600 mb-6">Access patient records and manage appointments.</p>
            <Link to="/signup?role=doctor">
              <button className="bg-green-600 text-white px-6 py-3 rounded-full shadow-md 
                           hover:bg-green-700 font-semibold transition-colors duration-300">
                Login / Register
              </button>
            </Link>
          </div>

          {/* Pet Owner Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 text-center 
                    transform transition-all duration-500 ease-in-out
                    hover:scale-105 hover:shadow-4xl hover:-translate-y-3">
            <h3 className="text-xl font-semibold mb-3 text-green-700">Farm Login</h3>
            <p className="text-gray-600 mb-6">Book visits and view pet health history.</p>
            <Link to="/signup?role=owner">
              <button className="bg-green-600 text-white px-6 py-3 rounded-full shadow-md 
                           hover:bg-green-700 font-semibold transition-colors duration-300">
                Login / Register
              </button>
            </Link>
          </div>

          {/* Admin Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 text-center 
                    transform transition-all duration-500 ease-in-out
                    hover:scale-105 hover:shadow-4xl hover:-translate-y-3">
            <h3 className="text-xl font-semibold mb-3 text-green-700">Admin</h3>
            <p className="text-gray-600 mb-6">Manage users and system settings.</p>
            <Link to="/signup?role=admin">
              <button className="bg-green-600 text-white px-6 py-3 rounded-full shadow-md 
                           hover:bg-green-700 font-semibold transition-colors duration-300">
                Login / Register
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Key Features Cards */}
      <section className="px-6 py-10 bg-gray-100 z-10 bg-gradient-to-r from-green-50 to-blue-50">
        <h2 className="text-3xl font-bold text-center mb-10 text-black-800">
          Key Features by Role
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Doctor Features */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 
                    transform transition-all duration-500 ease-in-out
                    hover:scale-105 hover:shadow-4xl hover:-translate-y-3">
            <h3 className="text-xl font-bold text-green-700 mb-4 text-center">Doctor Features</h3>
            <ul className="text-gray-700 list-disc list-inside space-y-2">
              <li>View & update electronic medical records</li>
              <li>Manage appointments & treatments</li>
              <li>Access clinic analytics</li>
            </ul>
          </div>

          {/* Pet Owner Features */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 
                    transform transition-all duration-500 ease-in-out
                    hover:scale-105 hover:shadow-4xl hover:-translate-y-3">
            <h3 className="text-xl font-bold text-green-700 mb-4 text-center">Pet Owner Features</h3>
            <ul className="text-gray-700 list-disc list-inside space-y-2">
              <li>Book & manage appointments</li>
              <li>View pet health history</li>
              <li>Receive notifications for upcoming visits</li>
            </ul>
          </div>

          {/* Admin Features */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 
                    transform transition-all duration-500 ease-in-out
                    hover:scale-105 hover:shadow-4xl hover:-translate-y-3">
            <h3 className="text-xl font-bold text-green-700 mb-4 text-center">Admin Features</h3>
            <ul className="text-gray-700 list-disc list-inside space-y-2">
              <li>Manage user accounts & permissions</li>
              <li>Oversee system settings & inventory</li>
              <li>Generate advanced analytics reports</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
