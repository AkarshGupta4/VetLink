import React, { useState } from "react";
import MedicalRecords from "./MedicalRecord";
import { Link, Routes, Route } from "react-router-dom";
import PrescriptionForm from "./PrescriptionForm";
import AddPatientForm from "./AddPatientForm";
import Report from "../User/Report";
import Appoinments from "./Appoinments";
import VeterinarianProfile from "./VeterinarianProfile.jsx";



import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

// ✅ Dummy Health Data
const healthData = [
    { month: "Jan", healthy: 80, sick: 20 },
    { month: "Feb", healthy: 85, sick: 15 },
    { month: "Mar", healthy: 78, sick: 22 },
    { month: "Apr", healthy: 90, sick: 10 },
    { month: "May", healthy: 88, sick: 12 },
    { month: "Jun", healthy: 92, sick: 8 },
];

function Calendar() {
    const [currentDate, setCurrentDate] = useState(new Date());

    const days = ["S", "M", "T", "W", "T", "F", "S"];
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    const prevMonth = () => {
        setCurrentDate(new Date(year, month - 1, 1));
    };

    const nextMonth = () => {
        setCurrentDate(new Date(year, month + 1, 1));
    };

    let calendarDays = [];
    for (let i = 0; i < firstDay; i++) {
        calendarDays.push(null);
    }
    for (let d = 1; d <= lastDate; d++) {
        calendarDays.push(d);
    }

    return (
        <div className="bg-white rounded-xl p-6 shadow w-full">
            {/* Month Navigation */}
            <div className="flex justify-between items-center mb-4">
                <button
                    onClick={prevMonth}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                    ◀
                </button>
                <h3 className="font-semibold text-lg">
                    {currentDate.toLocaleString("default", { month: "long" })} {year}
                </h3>
                <button
                    onClick={nextMonth}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                    ▶
                </button>
            </div>

            {/* Calendar Table */}
            <table className="w-full text-center text-gray-700">
                <thead>
                    <tr>
                        {days.map((day, idx) => (
                            <th key={idx}>{day}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: Math.ceil(calendarDays.length / 7) }).map(
                        (_, rowIdx) => (
                            <tr key={rowIdx}>
                                {calendarDays
                                    .slice(rowIdx * 7, rowIdx * 7 + 7)
                                    .map((day, colIdx) => (
                                        <td
                                            key={colIdx}
                                            className={`py-2 ${day === new Date().getDate() &&
                                                month === new Date().getMonth() &&
                                                year === new Date().getFullYear()
                                                ? "bg-green-600 text-white rounded-full"
                                                : ""
                                                }`}
                                        >
                                            {day || ""}
                                        </td>
                                    ))}
                            </tr>
                        )
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default function VetDashboard() {
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
                        <a href="#" className="flex items-center space-x-3 bg-green-800 px-4 py-3 rounded-md">
                            <span>Dashboard</span>
                        </a>

                        <Link to="/appointments">
                            <a href="#" className="flex items-center space-x-3 hover:bg-green-800 px-4 py-3 rounded-md">
                                <span>Appointments</span>
                            </a>
                        </Link>

                        {/* Vet record means madical record jo ki routing ki gayi hai medical record ke naam se */}

                        <Link to="/medical-records" className="flex items-center space-x-3 hover:bg-green-800 px-4 py-3 rounded-md">
                            <span>Vet Records</span>
                        </Link>
                        <Link
                            to="/prescriptionForm"
                            className="flex items-center space-x-3 hover:bg-green-800 px-4 py-3 rounded-md"
                        >
                            <span>Prescriptions</span>
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
                                type="search"
                                placeholder="Search patients or appointments..."
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
                                        <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">
                                            <Link to="/veterinarianprofile">Profile</Link>
                                        </li>

                                        <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">Settings</li>
                                        <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">Logout</li>
                                    </ul>
                                )}
                            </div>
                        </div>
                    </header>

                    {/* Overview Section */}
                    <section className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        <div className="bg-white rounded-xl p-6 shadow">
                            <p className="text-gray-500">Total Patients</p>
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
                            <p className="text-gray-500">Completed Consultations</p>
                            <p className="text-4xl font-bold">20</p>
                        </div>
                    </section>

                    {/* Main Dashboard Content */}
                    <section className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
                        {/* Quick Stats */}
                        <div className="bg-white rounded-xl p-6 shadow space-y-4">
                            <h3 className="font-semibold text-lg">Quick Stats</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>5 New Patients Today</li>
                                <li>2 Appointments Rescheduled</li>
                                <li>1 Prescription Renewed</li>
                                <li>3 Follow-up Calls Scheduled</li>
                            </ul>
                        </div>

                        {/* Actions */}
                        <div className="bg-white rounded-xl p-6 shadow flex flex-col space-y-4">
                            <h3 className="font-semibold text-lg">Actions</h3>
                            <Link
                                to="/add-patient"
                                className="px-4 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition text-center"
                            >
                                ➕ Add New Patient
                            </Link>
                            <Link
                                to="/appointments"
                                className="px-4 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition block text-center"
                            >
                                Appointment
                            </Link>

                            <Link
                                to="/reports"
                                className="px-4 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition text-center"
                            >
                                📑 View Reports
                            </Link>
                            <Link to="/prescriptionForm">
                                <button className="px-4 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition">
                                    Generate Prescription
                                </button>
                            </Link>
                        </div>

                        {/* ✅ Fixed Calendar */}
                        <Calendar />

                        {/* ✅ Animal Health Trends with Graph */}
                        <div className="bg-white rounded-xl p-6 shadow flex flex-col justify-center items-center min-h-[250px]">
                            <h3 className="font-semibold text-lg mb-4">Animal Health Trends</h3>
                            <ResponsiveContainer width="100%" height={200}>
                                <LineChart data={healthData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="month" />
                                    <YAxis />
                                    <Tooltip />
                                    <Line type="monotone" dataKey="healthy" stroke="#16a34a" strokeWidth={2} />
                                    <Line type="monotone" dataKey="sick" stroke="#dc2626" strokeWidth={2} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
}
