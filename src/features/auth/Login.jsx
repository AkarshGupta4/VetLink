import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-50 to-blue-50">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        {/* Logo / Title */}
        <div className="text-center mb-6">
          <div className="flex justify-center mb-2">
            {/* Aap apna logo icon dal sakte ho */}
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8c-1.657 0-3 1.343-3 3m0 0c0 1.657 1.343 3 3 3m0-6c1.657 0 3 1.343 3 3m-3-3V4m0 10v6m-7-7h4m6 0h4"
              />
            </svg> */}
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Farm Portal</h1>
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
          {/* Pet Owner Portal */}
          <Link
            to="/userhome"
            className="block w-full bg-green-600 text-white text-center py-2 rounded-lg hover:bg-green-700 transition"
          >
            Sign In
          </Link>

          {/* doctor home page link */}
          {/* <Link
            to="/vethome"
            className="block w-full bg-green-600 text-white text-center py-2 rounded-lg hover:bg-green-700 transition"
          >
            Sign In
          </Link> */}

          {/* Admin */}

           {/* <Link
            to="/adminhome"
            className="block w-full bg-green-600 text-white text-center py-2 rounded-lg hover:bg-green-700 transition"
          >
            Sign In
          </Link> */}

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
