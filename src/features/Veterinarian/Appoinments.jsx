import React, { useState } from "react";

export default function Appointments() {
  const [appointments, setAppointments] = useState([
    { id: 1, farmer: "Amit Sharma", animal: "Cow", date: "2025-09-06", status: "Pending" },
    { id: 2, farmer: "Ravi Kumar", animal: "Goat", date: "2025-09-07", status: "Approved" },
    { id: 3, farmer: "Sunita Devi", animal: "Buffalo", date: "2025-09-08", status: "Rejected" },
  ]);

  const handleStatusChange = (id, newStatus) => {
    setAppointments((prev) =>
      prev.map((appt) =>
        appt.id === id ? { ...appt, status: newStatus } : appt
      )
    );
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Appointments Management</h2>

      <div className="bg-white rounded-xl shadow p-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-green-600 text-white">
              <th className="py-3 px-4 text-left">Farmer</th>
              <th className="py-3 px-4 text-left">Animal</th>
              <th className="py-3 px-4 text-left">Date</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appt) => (
              <tr key={appt.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">{appt.farmer}</td>
                <td className="py-3 px-4">{appt.animal}</td>
                <td className="py-3 px-4">{appt.date}</td>
                <td
                  className={`py-3 px-4 font-semibold ${
                    appt.status === "Approved"
                      ? "text-green-600"
                      : appt.status === "Rejected"
                      ? "text-red-600"
                      : "text-yellow-600"
                  }`}
                >
                  {appt.status}
                </td>
                <td className="py-3 px-4 space-x-2">
                  <button
                    onClick={() => handleStatusChange(appt.id, "Approved")}
                    className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleStatusChange(appt.id, "Rejected")}
                    className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
