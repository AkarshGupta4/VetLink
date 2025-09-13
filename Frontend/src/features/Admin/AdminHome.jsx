import React from "react";
import {
  Home,
  Users,
  Calendar,
  BarChart2,
  FileText,
  Settings,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const livestockData = [
  { month: "Jan", value: 5 },
  { month: "Feb", value: 22 },
  { month: "Mar", value: 15 },
  { month: "Apr", value: 30 },
  { month: "May", value: 38 },
  { month: "Jun", value: 50 },
];

const revenueData = [
  { month: "Jan", value: 4000 },
  { month: "Feb", value: 6000 },
  { month: "Mar", value: 6500 },
  { month: "Apr", value: 5000 },
  { month: "May", value: 7800 },
  { month: "Jun", value: 4200 },
  { month: "Jul", value: 5600 },
  { month: "Aug", value: 7200 },
];

export default function AdminHome() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-4 flex flex-col">
        <h1 className="text-2xl font-bold mb-6">ADMIN PORTAL</h1>
        <nav className="space-y-3">
          <div className="flex items-center gap-3 p-2 rounded-lg cursor-pointer bg-gray-700">
            <Home size={18} />
            <span>Dashboard</span>
          </div>

          <Link
            to="/usermanagement"
            className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-800"
          >
            <Users size={18} />
            <span>User Management</span>
          </Link>

          <div className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-800">
            <Users size={18} />
            <span>Doctor Management</span>
          </div>

          <div className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-800">
            <Calendar size={18} />
            <span>Appointments Management</span>
          </div>

          <div className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-800">
            <BarChart2 size={18} />
            <span>Reports</span>
          </div>

          <div className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-800">
            <FileText size={18} />
            <span>Complaints</span>
          </div>

          <div className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-800">
            <Settings size={18} />
            <span>Settings</span>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

        {/* Top Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
          {[
            { title: "Total Farms", value: "12" },
            { title: "Animals", value: "145" },
            { title: "Crop Fields", value: "83" },
            { title: "Revenue", value: "$42,580" },
            { title: "Pending Tasks", value: "5" },
            { title: "Appointments", value: "3" },
          ].map(({ title, value }, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded shadow text-center"
            >
              <h3 className="text-sm text-gray-500">{title}</h3>
              <p className="text-xl font-bold">{value}</p>
            </div>
          ))}
        </div>

        {/* Weather & Climate */}
        <section className="mb-6 p-4 bg-white rounded shadow flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Weather & Climate</h3>
            <p className="text-2xl font-bold">21°C</p>
            <p className="text-sm text-gray-500">Partly Cloudy</p>
            <p className="text-sm text-gray-500">10 km/h wind</p>
          </div>
          <div className="text-4xl">☁</div>
        </section>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <section className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-4">Livestock Growth</h3>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={livestockData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#3b82f6"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </section>
        </div>

        <section className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold mb-4">Monthly Revenue</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#10b981"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </section>
      </main>
    </div>
  );
}
