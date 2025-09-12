import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useAuth } from "../../context/AuthContext";
import { authAPI } from "../../services/api";

function UserProfile() {
  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: "",
    farmRegNo: "",
    address: "",
    profilePic: "",
    createdAt: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const { user: authUser, logout, updateUser } = useAuth();
  const navigate = useNavigate(); // Initialize navigate

  // Fetch user data from backend
  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      setLoading(true);
      const response = await authAPI.getMe();
      setUserData(response.data.user);
      setFormData(response.data.user);
    } catch (error) {
      console.error("Failed to fetch user profile:", error);
      setError("Failed to load profile data");

      // Fallback to auth context data
      if (authUser) {
        setUserData(authUser);
        setFormData(authUser);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      setError("");
      setMessage("");

      // Simulate API call - replace with actual update profile API
      // const response = await authAPI.updateProfile(formData);

      // For now, just update local state
      updateUser(formData);
      setUserData(formData);

      setMessage("Profile updated successfully!");
      setIsEditing(false);

      setTimeout(() => setMessage(""), 3000);
    } catch (error) {
      setError(
        "Failed to update profile: " +
          (error.response?.data?.message || error.message)
      );
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setFormData(userData);
    setIsEditing(false);
    setError("");
    setMessage("");
  };

  const handleLogout = async () => {
    try {
      await logout();
      // Redirect to login page after successful logout
      navigate("/login");

      // Optional: Show logout success message on login page
      localStorage.setItem(
        "logoutMessage",
        "You have been successfully logged out."
      );
    } catch (error) {
      console.error("Logout error:", error);
      setError(
        "Logout failed: " + (error.response?.data?.message || error.message)
      );
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading profile...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-1 flex-col items-center justify-center bg-gray-50 p-6 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
          {/* Success/Error Messages */}
          {message && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
              ✅ {message}
            </div>
          )}

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              ❌ {error}
            </div>
          )}

          {/* Profile Header */}
          <div className="text-center mb-6">
            {/* Profile Picture */}
            <img
              src={
                userData.profilePic || "/src/assets/images/default-avatar.png"
              }
              alt="Profile"
              className="w-28 h-28 rounded-full mx-auto border-4 border-green-600 mb-4 object-cover"
            />

            <h1 className="text-2xl font-bold text-gray-800">User Profile</h1>
          </div>

          {/* User Info Form */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName || ""}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                disabled={!isEditing}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email || ""}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-100"
                disabled
              />
              <p className="text-xs text-gray-500 mt-1">
                Email cannot be changed
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone || ""}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                disabled={!isEditing}
                pattern="[0-9]{10}"
                maxLength="10"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Role
              </label>
              <input
                type="text"
                value={
                  formData.role
                    ? formData.role.charAt(0).toUpperCase() +
                      formData.role.slice(1)
                    : ""
                }
                className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-100"
                disabled
              />
            </div>

            {userData.role === "farmer" && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Farm Registration Number
                </label>
                <input
                  type="text"
                  name="farmRegNo"
                  value={formData.farmRegNo || ""}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  disabled={!isEditing}
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address
              </label>
              <textarea
                name="address"
                value={formData.address || ""}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                rows="3"
                disabled={!isEditing}
                placeholder="Enter your complete address"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Member Since
              </label>
              <input
                type="text"
                value={
                  userData.createdAt
                    ? new Date(userData.createdAt).toLocaleDateString("en-IN", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                    : "N/A"
                }
                className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-100"
                disabled
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-col gap-3">
            {isEditing ? (
              <div className="flex gap-3">
                <button
                  onClick={handleCancel}
                  className="flex-1 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  disabled={loading}
                  className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 transition"
                >
                  {loading ? "Saving..." : "Save Changes"}
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                Edit Profile
              </button>
            )}

            <button
              onClick={handleLogout}
              className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default UserProfile;
