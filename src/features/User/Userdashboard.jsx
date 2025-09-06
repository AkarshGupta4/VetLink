import React, { useState } from "react";
import AnimalRegistry from "./AnimalRegistry";
import { Link } from "react-router-dom";
import Report from "./Report";
import Complaint from "./Complaint";
import UserProfile from "./UserProfile";
import AnimalData from "./AnimalData";
import Footer from "../../components/Footer";


export default function UserDashboard() {
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  return (
    <>
      

      <div className="flex min-h-screen bg-gray-100 font-sans text-gray-800">
        {/* Sidebar */}
        <aside className="w-64 bg-green-900 text-white flex flex-col">
          <div className="flex items-center px-6 py-5 font-bold text-2xl space-x-2 border-b border-green-800">
            <span>VetLink</span>
          </div>
          <nav className="flex-grow p-6 space-y-3">
            {/* Sidebar links */}
            <a href="#" className="flex items-center space-x-3 bg-green-800 px-4 py-3 rounded-md">
              <span>Dashboard</span>
            </a>
           <Link to="/animaldata" className="flex items-center space-x-3 hover:bg-green-800 px-4 py-3 rounded-md">
  <span>My Animals</span>
</Link>
            
           <Link to="/report" className="flex items-center space-x-3 hover:bg-green-800 px-4 py-3 rounded-md">
  <span>Reports</span>
</Link>
           <Link to="/complaint" className="flex items-center space-x-3 hover:bg-green-800 px-4 py-3 rounded-md">
  <span>Complaints</span>
</Link>
           
            <a
              href="#"
              className="flex items-center space-x-3 hover:bg-green-800 px-4 py-3 rounded-md mt-auto pb-6"
            >
              <span>Logout</span>
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 space-y-8 overflow-y-auto">
          {/* Header */}
          <header className="flex items-center justify-between">
            <div className="relative w-1/3">
              <input
                type="text"
                placeholder="Search..."
                className="w-full rounded-md border border-gray-300 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <div className="flex items-center space-x-6">
              <button aria-label="Notifications" className="relative">
                <span className="absolute -top-1 -right-1 bg-red-600 rounded-full w-3 h-3 border-2 border-white"></span>
              </button>
              <div className="relative">
                <button
                  onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                  className="flex items-center space-x-2 focus:outline-none"
                >
                  <span>Logout</span>
                </button>
                {profileMenuOpen && (
                  <ul className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-2 text-gray-700 text-sm ring-1 ring-black ring-opacity-5 z-20">
                   <Link to="/userprofile">
  <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">Profile</li>
</Link>
                    {/* <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">Settings</li> */}
                    <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">Logout</li>
                  </ul>
                )}
              </div>
            </div>
          </header>

          {/* Overview Section */}
          <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow">
              <p className="text-gray-500">Total Animals</p>
              <p className="text-4xl font-bold">45</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <p className="text-gray-500">Upcoming Appointments</p>
              <p className="text-4xl font-bold">3</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <p className="text-gray-500">Pending Reports</p>
              <p className="text-4xl font-bold">2</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <p className="text-gray-500">Recent Complaints</p>
              <p className="text-4xl font-bold">1</p>
            </div>
          </section>

          {/* Main Dashboard Content */}
          <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Quick Stats */}
            <div className="bg-white rounded-xl p-6 shadow space-y-4">
              <h3 className="font-semibold text-lg">Quick Stats</h3>
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-green-400"></div>
                <p>Health Status Summary</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-green-400"></div>
                <p>Milk Production Report</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-green-400"></div>
                <p>Vaccination Updates</p>
              </div>
            </div>

            {/* Actions */}
            <div className="bg-white rounded-xl p-6 shadow flex flex-col space-y-4">
              <h3 className="font-semibold text-lg">Actions</h3>
              {/* <button className="flex items-center space-x-2 px-4 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition">
                <span>Add New Appointment</span>
              </button> */}
            

<Link to="/animalregistry">
  <button className="flex items-center space-x-2 px-4 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition">
    <span>Register New Animal</span>
  </button>
</Link>

            <Link to="/report">
  <button className="flex items-center space-x-2 px-4 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition">
    <span>View Reports</span>
  </button>
</Link> 
              <Link to="/complaint">
  <button className="flex items-center space-x-2 px-4 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition">
    <span>File Complaint</span>
  </button>
</Link>
            </div>

            {/* Calendar */}
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-semibold text-lg mb-4">Calendar</h3>
              <table className="w-full text-center text-gray-700">
                <thead>
                  <tr>
                    <th>S</th>
                    <th>M</th>
                    <th>T</th>
                    <th>W</th>
                    <th>T</th>
                    <th>F</th>
                    <th>S</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Calendar rows here */}
                </tbody>
              </table>
            </div>

            {/* Animal Health Trends */}
            <div className="bg-white rounded-xl p-6 shadow flex flex-col justify-center items-center min-h-[150px]">
              <h3 className="font-semibold text-lg mb-4">Animal Health Trends</h3>
              <div className="w-full h-24 bg-green-100 rounded"></div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
