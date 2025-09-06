import React from "react";

import { VscGraph } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import About from "../../components/About"; 
import Footer from "../../components/Footer"; 
import Monitoring from "../../components/Monitoring";
import PrescriptionForm from "./PrescriptionForm";
import Docnavbar from "../../components/Docnavbar"; 
import VetDashboard from "./VetDashboard";

function UserHome() {
  return (
    <div>
      <Docnavbar />

      {/* Content Section */}
      <div className="flex flex-col items-center justify-center bg-gray-50 mt-10 p-6">
        {/* Heading */}
        <h1 className="font-bold text-5xl text-center mb-5 text-green-700">
          Veterinary Digital Health Portal
        </h1>

        {/* Subtext */}
        <p className="text-gray-700 text-lg text-center max-w-xl">
          Monitor animal health metrics, track Maximum Residue Limits (MRL), and manage Antimicrobial Usage (AMU) efficiently.
        </p>

        {/* Buttons */}
        <div className="flex space-x-4 mt-8">
          {/* Dashboard Button */}
          <Link
            to="/vetdashboard"
            className="flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
          >
            <VscGraph className="text-lg" />
            <span>Go to Dashboard</span>
            <FaArrowRight />
          </Link>

          {/* Prescription Form Button */}
          <Link
            to="/prescriptionForm"  // corrected route spelling here
            className="flex items-center gap-2 bg-white border border-green-600 text-green-600 px-6 py-2 rounded-lg hover:bg-green-50 transition"
          >
            <span>Prescribe Here</span>
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
