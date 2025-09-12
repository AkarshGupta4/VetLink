import React, { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Signup() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    role: "",
    password: "",
    confirmPassword: "",
    phone: "",
    farmRegNo: "",
    address: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { register } = useAuth();

  const roleFromUrl = searchParams.get("role");

  useEffect(() => {
    if (roleFromUrl) {
      setFormData((prev) => ({
        ...prev,
        role: roleFromUrl === "owner" ? "farmer" : roleFromUrl,
      }));
    }
  }, [roleFromUrl]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Validation
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.role ||
      !formData.password
    ) {
      setError("Please fill all required fields.");
      setLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    try {
      const user = await register(formData);

      // Redirect based on role
      switch (user.role) {
        case "farmer":
          navigate("/userdashboard");
          break;
        case "veterinarian":
          navigate("/vetdashboard");
          break;
        case "admin":
          navigate("/admindashboard");
          break;
        default:
          navigate("/");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-50 to-blue-50 flex items-center justify-center px-4 py-10">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="mx-auto w-12 h-12 rounded-full flex items-center justify-center overflow-hidden bg-white border-2 border-green-600">
            <img
              src="/src/assets/images/AppLogo.jpg"
              alt="App Logo"
              className="w-10 h-10 object-cover"
            />
          </div>
          <h2 className="mt-4 text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
          <p className="mt-1 text-gray-600">
            {roleFromUrl
              ? `Sign up as ${roleFromUrl}`
              : "Enter your details to register"}
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white shadow-lg rounded-xl p-8">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <input
                name="fullName"
                type="text"
                placeholder="Enter your full name *"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
                required
              />

              <input
                name="email"
                type="email"
                placeholder="Enter your email *"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
                required
              />

              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
                required
              >
                <option value="">Select your role *</option>
                <option value="farmer">Farmer</option>
                <option value="veterinarian">Veterinarian</option>
                <option value="admin">Admin</option>
              </select>

              {formData.role === "farmer" && (
                <input
                  name="farmRegNo"
                  type="text"
                  placeholder="Farm Registration Number"
                  value={formData.farmRegNo}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              )}

              <input
                name="phone"
                type="tel"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
              />

              <input
                name="address"
                type="text"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
              />

              <input
                name="password"
                type="password"
                placeholder="Create a password *"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
                required
              />

              <input
                name="confirmPassword"
                type="password"
                placeholder="Confirm your password *"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
                required
              />
            </div>

            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition disabled:opacity-50 font-semibold"
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>
          </form>
        </div>

        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-green-600 hover:underline font-medium"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
