import React from "react";

function ComplaintForm() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold text-green-600 mb-4 text-center">
          Animal Health Complaint Form
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Register animal complaints and record treatment details for monitoring.
        </p>

        <form className="space-y-4">
          {/* Animal ID */}
          <input
            type="text"
            placeholder="Animal ID (e.g., COW-001, SHEEP-115)"
            className="w-full border rounded-lg p-2"
          />

          {/* Animal Type */}
          <select className="w-full border rounded-lg p-2">
            <option>Select Animal Type</option>
            <option>Cow</option>
            <option>Buffalo</option>
            <option>Goat</option>
            <option>Sheep</option>
            <option>Pig</option>
            <option>Poultry</option>
          </select>

          {/* Age */}
          <input
            type="text"
            placeholder="Animal Age (e.g., 2 years, 6 months)"
            className="w-full border rounded-lg p-2"
          />

          {/* Symptoms */}
          <textarea
            placeholder="Describe symptoms (e.g., fever, loss of appetite, coughing)"
            className="w-full border rounded-lg p-2"
            rows="3"
          ></textarea>

          {/* Treatment Type */}
          <select className="w-full border rounded-lg p-2">
            <option>Select Treatment Type</option>
            <option>Vaccination</option>
            <option>Antibiotic</option>
            <option>Deworming</option>
            <option>Other</option>
          </select>

          {/* Dosage */}
          <input
            type="text"
            placeholder="Dosage (e.g., 5mg/kg, 10ml, 2 tablets)"
            className="w-full border rounded-lg p-2"
          />

          {/* Date */}
          <input
            type="date"
            className="w-full border rounded-lg p-2"
          />

          {/* File Upload */}
          <div className="border-2 border-dashed rounded-lg p-4 text-center text-gray-500">
            <input type="file" className="hidden" id="upload" />
            <label htmlFor="upload" className="cursor-pointer">
              Upload Lab Report / Image (Optional)
            </label>
          </div>

          {/* Farmer Contact */}
          <input
            type="text"
            placeholder="Farmer's Name"
            className="w-full border rounded-lg p-2"
          />
          <input
            type="tel"
            placeholder="Farmer's Phone Number"
            className="w-full border rounded-lg p-2"
          />

          {/* Submit */}
          <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
            Submit Complaint
          </button>
        </form>
      </div>
    </div>
  );
}

export default ComplaintForm;
