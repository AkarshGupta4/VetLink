import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";
import { TbReport } from "react-icons/tb";
import { CiDatabase } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-green-700 text-white px-4 py-3 flex flex-wrap items-center justify-between shadow-md relative">
      {/* Logo Section */}
      <div>
        <h3 className="font-bold text-3xl">VetLink</h3>
      </div>
      {/* Hamburger Icon for Mobile View */}
      <button
        className="md:hidden block ml-auto"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Links Section */}
      <div className={`flex-col md:flex-row md:flex items-center space-y-4 md:space-y-0 md:space-x-6 absolute md:static top-full left-0 w-full md:w-auto bg-green-700 md:bg-transparent z-20 transition-all duration-200 ${menuOpen ? "flex" : "hidden md:flex"}`}>
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

