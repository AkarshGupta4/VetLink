import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function AnimalRegistry() {
  const [formData, setFormData] = useState({
    farmReg: "",
    animalId: "",
    type: "",
    breed: "",
    age: "",
    gender: "",
    weight: "",
    health: "",
    vaccination: "",
    ownerName: "",
    contact: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newAnimal = { ...formData };

    const existing = JSON.parse(localStorage.getItem("animalData")) || [];
    existing.push(newAnimal);
    localStorage.setItem("animalData", JSON.stringify(existing));

    alert("✅ Animal Registered Successfully!");

    setFormData({
      farmReg: "",
      animalId: "",
      type: "",
      breed: "",
      age: "",
      gender: "",
      weight: "",
      health: "",
      vaccination: "",
      ownerName: "",
      contact: ""
    });
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-50 to-blue-50 p-6">
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
          <h2 className="text-2xl font-bold text-green-600 mb-4 text-center">
            Animal Registry Form
          </h2>
          <p className="text-gray-600 text-center mb-6">
            Register animal details along with farm registration information.
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input name="farmReg" value={formData.farmReg} onChange={handleChange} type="text" placeholder="Farm Registration Number" className="w-full border rounded-lg p-2" required />
            <input name="animalId" value={formData.animalId} onChange={handleChange} type="text" placeholder="Animal ID (e.g., COW-001)" className="w-full border rounded-lg p-2" required />
            <select name="type" value={formData.type} onChange={handleChange} className="w-full border rounded-lg p-2" required>
              <option>Select Animal Type</option>
              <option>Cow</option>
              <option>Buffalo</option>
              <option>Goat</option>
              <option>Sheep</option>
              <option>Pig</option>
              <option>Poultry</option>
            </select>
            <input name="breed" value={formData.breed} onChange={handleChange} type="text" placeholder="Breed (e.g., Jersey)" className="w-full border rounded-lg p-2" />
            <input name="age" value={formData.age} onChange={handleChange} type="text" placeholder="Age (e.g., 2 years)" className="w-full border rounded-lg p-2" />
            <select name="gender" value={formData.gender} onChange={handleChange} className="w-full border rounded-lg p-2">
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
            <input name="weight" value={formData.weight} onChange={handleChange} type="number" placeholder="Weight (kg)" className="w-full border rounded-lg p-2" />
            <select name="health" value={formData.health} onChange={handleChange} className="w-full border rounded-lg p-2">
              <option>Select Health Status</option>
              <option>Healthy</option>
              <option>Sick</option>
              <option>Under Treatment</option>
            </select>
            <textarea name="vaccination" value={formData.vaccination} onChange={handleChange} placeholder="Vaccination details (e.g., FMD - done)" className="w-full border rounded-lg p-2" rows="3" />
            <input name="ownerName" value={formData.ownerName} onChange={handleChange} type="text" placeholder="Farm Owner's Name" className="w-full border rounded-lg p-2" required />
            <input name="contact" value={formData.contact} onChange={handleChange} type="tel" placeholder="Contact Number" className="w-full border rounded-lg p-2" required />

            {/* File Upload (Optional) */}
            <div className="border-2 border-dashed rounded-lg p-4 text-center text-gray-500">
              <input type="file" className="hidden" id="upload" />
              <label htmlFor="upload" className="cursor-pointer">
                Upload Animal Photo / Document (Optional)
              </label>
            </div>

            <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
              Register Animal
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AnimalRegistry;
