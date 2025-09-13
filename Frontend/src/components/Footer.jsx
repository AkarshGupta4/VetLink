import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Contact from "./contact";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-700 via-green-800 to-green-900 text-gray-200 py-10 mt-1">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-3xl font-extrabold text-white">VetLink</h2>
          <p className="mt-3 text-gray-300 text-sm leading-relaxed">
            Empowering farmers with modern veterinary solutions for healthier animals and a better tomorrow.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-yellow-400 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-yellow-400 transition">About</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-400 transition">Contact</Link></li>
            <li><Link to="/role-selection" className="hover:text-yellow-400 transition">Role Selection</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-yellow-400 transition">Help Center</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4 text-xl">
            <a href="#" className="hover:text-yellow-400 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-yellow-400 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-yellow-400 transition"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-yellow-400 transition"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} <span className="font-semibold text-white">VetLink</span>. All rights reserved.
      </div>
    </footer>
  );
}
