import React from "react";
import { FaShieldAlt } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

function Monitoring() {
  return (
    <div className="bg-gray-50 py-16">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        Why Monitoring is Important
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-lg p-8 text-center hover:shadow-xl transition">
          <div className="flex justify-center mb-4">
            <FaShieldAlt className="text-green-500 text-4xl" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Food Safety
          </h3>
          <p className="text-gray-600">
            Ensure agricultural products meet international safety standards by
            monitoring residue limits and preventing contamination that could
            harm consumers.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-lg p-8 text-center hover:shadow-xl transition">
          <div className="flex justify-center mb-4">
            <FaHeart className="text-blue-500 text-4xl" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Animal Health
          </h3>
          <p className="text-gray-600">
            Optimize antimicrobial usage to maintain animal welfare while
            preventing resistance development and ensuring effective treatment
            protocols.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-lg p-8 text-center hover:shadow-xl transition">
          <div className="flex justify-center mb-4">
            <FaCheckCircle className="text-green-600 text-4xl" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Compliance
          </h3>
          <p className="text-gray-600">
            Meet regulatory requirements and maintain certifications by
            providing transparent documentation and automated compliance
            reporting.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Monitoring;
