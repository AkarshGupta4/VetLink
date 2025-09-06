import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function UserProfile() {
  const [user, setUser] = useState({
    name: "Amit Sharma",
    email: "amit@example.com",
    phone: "+91 9876543210",
    farmRegNo: "FARM-123",
    profilePic: "https://via.placeholder.com/150"
  });

  const [isEditing, setIsEditing] = useState(false); // modal toggle
  const [formData, setFormData] = useState(user);

  useEffect(() => {
    // Future: API call to fetch real user data
  }, []);

  // Input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Save changes
  const handleSave = () => {
    setUser(formData);
    setIsEditing(false);
    // Future: API call to update backend
    // If using file upload, send formData.profileFile to backend
  };

  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-1 flex-col items-center justify-center bg-gray-50 p-6 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md text-center">
          {/* Profile Picture */}
          <img
            src={user.profilePic}
            alt="Profile"
            className="w-28 h-28 rounded-full mx-auto border-4 border-green-600 mb-4 object-cover"
          />

          {/* User Info */}
          <h2 className="text-2xl font-bold text-green-700">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-gray-600">📞 {user.phone}</p>
          <p className="text-gray-600">🏢 Farm Reg No: {user.farmRegNo}</p>

          {/* Buttons */}
          <div className="mt-6 flex justify-center gap-4">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              Edit Profile
            </button>
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
              Logout
            </button>
          </div>
        </div>
      </div>

      <Footer />

      {/* Edit Profile Modal */}
      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
            <h2 className="text-2xl font-bold text-green-700 mb-4 text-center">
              Edit Profile
            </h2>

            {/* Form */}
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              <input
                type="text"
                name="farmRegNo"
                value={formData.farmRegNo}
                onChange={handleChange}
                placeholder="Farm Registration Number"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              {/* Image Upload */}
              <div className="flex flex-col items-center">
                <label className="mb-2 font-medium text-gray-700">Upload Profile Picture</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const imageUrl = URL.createObjectURL(file);
                      setFormData({ ...formData, profilePic: imageUrl, profileFile: file });
                    }
                  }}
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                {formData.profilePic && (
                  <img
                    src={formData.profilePic}
                    alt="Preview"
                    className="w-24 h-24 rounded-full mt-4 border-2 border-green-500 object-cover"
                  />
                )}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
