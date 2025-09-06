import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-white p-10">
      <div className="bg-white shadow-lg rounded-lg p-10 w-full">
        {/* Title */}
        <h1 className="text-4xl font-bold text-green-600 mb-6 text-center">
          About Us
        </h1>

        {/* ~150 words Paragraph */}
        <p className="text-gray-700 text-lg leading-relaxed text-justify">
          The Digital Farm Management Portal is designed to make farming smarter,
          safer, and more sustainable by using digital tools and data. Farmers
          and veterinarians often face challenges in tracking medicine usage,
          residue levels, and ensuring compliance with food safety standards.
          Our platform simplifies these tasks by providing a single system to
          record and monitor <b>Maximum Residue Limits (MRL)</b> and{" "}
          <b>Antimicrobial Usage (AMU)</b>. This ensures healthier animals,
          responsible use of medicines, and greater transparency in food
          production. With intuitive dashboards and real-time insights, farmers
          can improve productivity while regulators benefit from accurate and
          transparent reporting. Our vision is to empower farmers with digital
          tools that make agriculture more efficient and transparent. Our mission
          is to create a trusted ecosystem where technology connects farmers,
          veterinarians, and regulators, ensuring safe food and better animal
          welfare for everyone.
        </p>
      </div>
    </div>
  );
}

export default About;
