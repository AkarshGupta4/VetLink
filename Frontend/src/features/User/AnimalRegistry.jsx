import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { animalsAPI } from "../../services/api";
import { useAuth } from "../../context/AuthContext";

function AnimalRegistry() {
  const [formData, setFormData] = useState({
    animalId: "",
    type: "",
    breed: "",
    age: "",
    gender: "",
    weight: "",
    healthStatus: "Healthy",
    vaccination: "",
    farmRegNo: "",
    contact: "",
  });

  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const { user } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    // Validation
    if (
      !formData.animalId ||
      !formData.type ||
      !formData.farmRegNo ||
      !formData.contact
    ) {
      setError("Please fill all required fields (*)");
      setLoading(false);
      return;
    }

    try {
      const submissionData = new FormData();

      // Append all form data
      Object.keys(formData).forEach((key) => {
        submissionData.append(key, formData[key]);
      });

      // Append image file if selected
      if (imageFile) {
        submissionData.append("animalImage", imageFile);
      }

      const response = await animalsAPI.createAnimal(submissionData);

      setMessage("✅ Animal Registered Successfully!");

      // Reset form
      setFormData({
        animalId: "",
        type: "",
        breed: "",
        age: "",
        gender: "",
        weight: "",
        healthStatus: "Healthy",
        vaccination: "",
        farmRegNo: "",
        contact: "",
      });
      setImageFile(null);

      // Redirect to animals list after 2 seconds
      setTimeout(() => {
        navigate("/animaldata");
      }, 2000);
    } catch (error) {
      setError(
        "❌ Registration failed: " +
          (error.response?.data?.message || "Please try again")
      );
    } finally {
      setLoading(false);
    }
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

          {message && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
              {message}
            </div>
          )}

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Required Fields */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Animal ID * (e.g., COW-001)
              </label>
              <input
                name="animalId"
                value={formData.animalId}
                onChange={handleChange}
                type="text"
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-green-500"
                required
                placeholder="Enter unique animal ID"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Animal Type *
              </label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-green-500"
                required
              >
                <option value="">Select Animal Type</option>
                <option value="Cow">Cow</option>
                <option value="Buffalo">Buffalo</option>
                <option value="Goat">Goat</option>
                <option value="Sheep">Sheep</option>
                <option value="Pig">Pig</option>
                <option value="Poultry">Poultry</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Farm Registration Number *
              </label>
              <input
                name="farmRegNo"
                value={formData.farmRegNo}
                onChange={handleChange}
                type="text"
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-green-500"
                required
                placeholder="Enter farm registration number"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contact Number *
              </label>
              <input
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                type="tel"
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-green-500"
                required
                pattern="[0-9]{10}"
                maxLength="10"
                placeholder="10-digit phone number"
              />
            </div>

            {/* Optional Fields */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Breed
              </label>
              <input
                name="breed"
                value={formData.breed}
                onChange={handleChange}
                type="text"
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-green-500"
                placeholder="e.g., Jersey, Holstein"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Age
                </label>
                <input
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  type="text"
                  className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-green-500"
                  placeholder="e.g., 2 years"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Gender
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-green-500"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Weight (kg)
              </label>
              <input
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                type="number"
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-green-500"
                placeholder="Weight in kilograms"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Health Status
              </label>
              <select
                name="healthStatus"
                value={formData.healthStatus}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-green-500"
              >
                <option value="Healthy">Healthy</option>
                <option value="Sick">Sick</option>
                <option value="Under Treatment">Under Treatment</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Vaccination Details
              </label>
              <textarea
                name="vaccination"
                value={formData.vaccination}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-green-500"
                rows="3"
                placeholder="Vaccination history and details"
              />
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Animal Photo
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-green-500"
              />
              {imageFile && (
                <p className="text-sm text-green-600 mt-1">
                  Selected: {imageFile.name}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 disabled:opacity-50"
            >
              {loading ? "Registering Animal..." : "Register Animal"}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AnimalRegistry;
