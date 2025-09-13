import React, { useState } from "react";
import {
  Home,
  Users,
  Leaf,
  Calendar,
  BarChart2,
  FileText,
  Package,
  DollarSign,
  Settings,
  Plus,
  Search,
} from "lucide-react";
import { Link } from "react-router-dom";

// Sample user data with farm details
const initialUsers = [
  {
    name: "John Doe",
    role: "Farmer",
    email: "johndoe@example.com",
    status: "Active",
    farm: {
      name: "Green Valley",
      location: "Lucknow",
      animals: 45,
      crops: "Wheat",
      revenue: "₹1,20,000",
    },
  },
  {
    name: "Jane Smith",
    role: "Veterinarian",
    email: "janesmith@example.com",
    status: "Active",
    farm: null,
  },
  {
    name: "Steve Johnson",
    role: "Technician",
    email: "stevej@example.com",
    status: "Inactive",
    farm: null,
  },
  {
    name: "Emily Davis",
    role: "Farmer",
    email: "emilyd@example.com",
    status: "Active",
    farm: {
      name: "Sunrise Farm",
      location: "Kanpur",
      animals: 32,
      crops: "Rice",
      revenue: "₹85,000",
    },
  },
];

export default function UserManagement() {
  const [users] = useState(initialUsers);
  const [search, setSearch] = useState("");

  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.role.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-4 flex flex-col">
        <h1 className="text-2xl font-bold mb-6">ADMIN PORTAL</h1>
        <nav className="space-y-3">
          <SidebarItem icon={<Home size={18} />} label="Dashboard" to="/" />
          <SidebarItem icon={<Users size={18} />} label="User Management" active />
          <SidebarItem icon={<Leaf size={18} />} label="Animal Management" />
          <SidebarItem icon={<Calendar size={18} />} label="Crop Management" />
          <SidebarItem icon={<BarChart2 size={18} />} label="Appointments & Visits" />
          <SidebarItem icon={<FileText size={18} />} label="Reports & Analytics" />
          <SidebarItem icon={<Package size={18} />} label="Inventory & Resources" />
          <SidebarItem icon={<DollarSign size={18} />} label="Financial Module" />
          <SidebarItem icon={<Settings size={18} />} label="Settings" />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6">User Management</h2>

        <div className="bg-white rounded-lg shadow p-4 overflow-x-auto">
          {/* Top bar */}
          <div className="flex justify-between items-center mb-4">
            <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700">
              <Plus size={16} /> Add User
            </button>
            <div className="flex items-center bg-gray-100 rounded px-3 py-2">
              <Search size={16} className="text-gray-500" />
              <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-transparent ml-2 outline-none text-sm"
              />
            </div>
          </div>

          {/* User Table */}
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b text-gray-600">
                <th className="p-2">Name</th>
                <th className="p-2">Role</th>
                <th className="p-2">Email</th>
                <th className="p-2">Status</th>
                <th className="p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user, i) => (
                <React.Fragment key={i}>
                  <tr className="border-b">
                    <td className="p-2">{user.name}</td>
                    <td className="p-2">{user.role}</td>
                    <td className="p-2">{user.email}</td>
                    <td className="p-2">
                      <span
                        className={`px-2 py-1 rounded text-sm font-medium ${
                          user.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-200 text-gray-700"
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="p-2">
                      <button className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 text-sm">
                        Edit
                      </button>
                    </td>
                  </tr>

                  {/* Farm Details Row */}
                  {user.farm && (
                    <tr className="bg-gray-50 text-sm text-gray-700">
                      <td colSpan={5} className="p-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div><strong>Farm Name:</strong> {user.farm.name}</div>
                          <div><strong>Location:</strong> {user.farm.location}</div>
                          <div><strong>Animals:</strong> {user.farm.animals}</div>
                          <div><strong>Crops:</strong> {user.farm.crops}</div>
                          <div><strong>Revenue:</strong> {user.farm.revenue}</div>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

// Sidebar item component
function SidebarItem({ icon, label, active, to }) {
  const content = (
    <div
      className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer ${
        active ? "bg-gray-700" : "hover:bg-gray-800"
      }`}
    >
      {icon}
      <span>{label}</span>
    </div>
  );

  return to ? <Link to={to}>{content}</Link> : content;
}
