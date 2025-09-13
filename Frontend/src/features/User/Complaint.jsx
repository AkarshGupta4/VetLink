import React, { useState } from "react";
import jsPDF from "jspdf";
import { Download } from "lucide-react";

const Complaint = () => {
  const [form, setForm] = useState({
    animalId: "",
    issue: "",
    severity: "Moderate",
    date: new Date().toISOString().slice(0, 10),
    contact: ""
  });

  const [submittedComplaints, setSubmittedComplaints] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedComplaints([...submittedComplaints, form]);
    alert("Complaint submitted successfully!");
    setForm({
      animalId: "",
      issue: "",
      severity: "Moderate",
      date: new Date().toISOString().slice(0, 10),
      contact: ""
    });
  };

  const downloadComplaintPDF = (complaint) => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("VetLink Complaint Report", 20, 20);

    doc.setFontSize(12);
    doc.text(`Animal ID: ${complaint.animalId}`, 20, 40);
    doc.text(`Issue: ${complaint.issue}`, 20, 50);
    doc.text(`Severity: ${complaint.severity}`, 20, 60);
    doc.text(`Date: ${complaint.date}`, 20, 70);
    doc.text(`Contact: ${complaint.contact}`, 20, 80);

    const safeFileName = complaint.animalId.replace(/[^a-zA-Z0-9-_]/g, "_");
    doc.save(`Complaint_${safeFileName}.pdf`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 font-sans flex flex-col items-center">
      <div className="w-full max-w-xl">
        <h1 className="text-3xl font-bold mb-2">Animal Health Complaint</h1>
        <p className="mb-6 text-gray-700">
          Submit a complaint when an animal is found unhealthy.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-2xl shadow-lg space-y-4"
        >
          <div>
            <label htmlFor="animalId" className="block mb-1 font-medium">
              Animal ID
            </label>
            <input
              id="animalId"
              type="text"
              name="animalId"
              value={form.animalId}
              onChange={handleChange}
              placeholder="e.g., COW-123"
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="issue" className="block mb-1 font-medium">
              Issue Description
            </label>
            <textarea
              id="issue"
              name="issue"
              value={form.issue}
              onChange={handleChange}
              placeholder="Describe the health issue..."
              rows={3}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="severity" className="block mb-1 font-medium">
              Severity
            </label>
            <select
              id="severity"
              name="severity"
              value={form.severity}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option>Mild</option>
              <option>Moderate</option>
              <option>Severe</option>
            </select>
          </div>
          <div>
            <label htmlFor="date" className="block mb-1 font-medium">
              Date
            </label>
            <input
              id="date"
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="contact" className="block mb-1 font-medium">
              Contact Info
            </label>
            <input
              id="contact"
              type="text"
              name="contact"
              value={form.contact}
              onChange={handleChange}
              placeholder="Your email or phone"
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="bg-green-600 text-white inline-flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            <Download size={16} /> Submit Complaint
          </button>
        </form>
      </div>

      {submittedComplaints.length > 0 && (
        <div className="mt-8 w-full max-w-2xl bg-white p-4 sm:p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-bold mb-4">Submitted Complaints</h2>
          <ul className="space-y-3">
            {submittedComplaints.map((c, index) => (
              <li
                key={index}
                className="border-b last:border-b-0 pb-2 flex justify-between items-center"
              >
                <div>
                  <p className="font-semibold">{c.animalId}</p>
                  <p className="text-sm text-gray-600">{c.issue}</p>
                  <p className="text-sm">Severity: {c.severity}</p>
                </div>
                <button
                  onClick={() => downloadComplaintPDF(c)}
                  className="inline-flex items-center gap-1 text-blue-600 hover:underline transition"
                >
                  <Download size={16} />
                  Download PDF
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Complaint;
