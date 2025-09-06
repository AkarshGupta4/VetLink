import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-50 to-blue-50">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        {/* Logo / Title */}
        <div className="text-center mb-6">
          <div className="flex justify-center mb-3">
            <img
              src="/src/assets/images/AppLogo.jpg" // Update to your actual logo path
              alt="VetLink Logo"
              className="w-12 h-12 rounded-full object-cover"
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-800">Login</h1>
          <p className="text-gray-500">Sign in to your account</p>
        </div>

        {/* Card */}
        <h2 className="text-lg font-semibold text-gray-800 mb-1">
          Welcome Back
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Enter your credentials to access the farm management portal
        </p>

        <form className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Submit */}
          <Link
            to="/userhome"
            className="block w-full bg-green-600 text-white text-center py-2 rounded-lg hover:bg-green-700 transition"
          >
            Sign In
          </Link>

          {/* Other roles can be added here */}
        </form>

        {/* Footer */}
        <p className="text-sm text-gray-600 text-center mt-6">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-green-600 font-medium hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
