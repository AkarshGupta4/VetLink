import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";
import { TbReport } from "react-icons/tb";
import { CiDatabase } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="w-full bg-green-700 text-white px-6 py-3 flex items-center justify-between shadow-md">
      {/* Logo Section */}
      <div>
        <h3 className="font-bold text-3xl">VetLink</h3>
      </div>

      {/* Links Section */}
      <div className="flex items-center space-x-6">
        <Link to="/userhome" className="flex items-center gap-2 hover:underline">
          <FaHome /> Home
        </Link>


        <Link to="/vetdashboard" className="flex items-center gap-2 hover:underline">
          <VscGraph /> Dashboard
        </Link>

        <Link to="/report" className="flex items-center gap-2 hover:underline">
          <TbReport /> Report
        </Link>

        {/* doctor report section */}
        {/* <Link to="/vetreport" className="flex items-center gap-2 hover:underline">
          <TbReport /> Report
        </Link> */}

        <Link to="/userprofile" className="flex items-center gap-2 hover:underline">
          <FaUserCircle /> Profile
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

