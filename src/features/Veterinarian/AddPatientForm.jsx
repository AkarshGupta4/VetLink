import React, { useState } from "react";

export default function AddPatientForm() {
  const [formData, setFormData] = useState({
    animalId: "",
    species: "",
    breed: "",
    age: "",
    weight: "",
    ownerName: "",
    ownerContact: "",
    ownerAddress: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Patient Data:", formData);
    alert("✅ Patient Added Successfully!");
    // backend API call yaha karega
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-green-700 mb-6">
          🐄 Add New Patient
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Animal ID / Tag */}
          <div>
            <label className="block text-gray-700 font-medium">Animal ID / Tag Number</label>
            <input
              type="text"
              name="animalId"
              value={formData.animalId}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-600"
              required
            />
          </div>

          {/* Species */}
          <div>
            <label className="block text-gray-700 font-medium">Species</label>
            <select
              name="species"
              value={formData.species}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-600"
              required
            >
              <option value="">Select Species</option>
              <option value="Cow">Cow</option>
              <option value="Buffalo">Buffalo</option>
              <option value="Goat">Goat</option>
              <option value="Sheep">Sheep</option>
            </select>
          </div>

          {/* Breed, Age, Weight */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-gray-700 font-medium">Breed</label>
              <input
                type="text"
                name="breed"
                value={formData.breed}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-600"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Age (Years)</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-600"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Weight (Kg)</label>
              <input
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-600"
              />
            </div>
          </div>

          {/* Owner Details */}
          <div>
            <label className="block text-gray-700 font-medium">Owner Name</label>
            <input
              type="text"
              name="ownerName"
              value={formData.ownerName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-600"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Owner Contact</label>
            <input
              type="text"
              name="ownerContact"
              value={formData.ownerContact}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-600"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Owner Address</label>
            <textarea
              name="ownerAddress"
              value={formData.ownerAddress}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-600"
              rows="2"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-700 text-white py-3 rounded-lg shadow hover:bg-green-800 transition"
          >
            ➕ Add Patient
          </button>
        </form>
      </div>
    </div>
  );
}
