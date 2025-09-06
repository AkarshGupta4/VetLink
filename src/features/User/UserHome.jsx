import React from "react";
import Navbar from "../../components/Navbar";
import { VscGraph } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import About from "../../components/About"; 
import Footer from "../../components/Footer"; 
import Monitoring from "../../components/Monitoring";
import UserDashboard from "./Userdashboard";

function UserHome() {
  return (
    <div>
      <Navbar />
      
      {/* Content Section */}
      <div className="flex flex-col items-center justify-center bg-gray-50 mt-10 p-6">
        {/* Heading */}
        <h1 className="font-bold text-5xl text-center mb-5 text-green-700">
          Digital Farm Management Portal
        </h1>
        {/* Subtext */}
        <p className="text-gray-700 text-lg text-center max-w-xl">
          Monitor your animals’ health status and report any health issues promptly to ensure their well-being.
        </p>
        {/* Buttons */}
        <div className="flex space-x-4 mt-8">
          {/* Dashboard Button */}
          <Link
            to="/userdashboard"
            className="flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
          >
            <VscGraph className="text-lg" />
            <span>View Farm Dashboard</span>
            <FaArrowRight />
          </Link>
          {/* Complaint Button */}
          <Link
            to="/complaint"
            className="flex items-center gap-2 bg-white border border-green-600 text-green-600 px-6 py-2 rounded-lg hover:bg-green-50 transition"
          >
            <span>Report Animal Health Problem</span>
          </Link>
        </div>
      </div>
      {/* About Section */}
      <About />
      {/* Monitoring Section */}
      <Monitoring />
      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default UserHome;
