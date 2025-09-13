import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaClock, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Footer from './Footer';

const Contact = () => {
  return (
    <>
      {/* Top-left corner VetLink logo */}
      <div className="absolute top-6 left-6 text-black">
        <h1 className="text-4xl font-bold">VetLink</h1>
        <p className="text-xl">Connecting Health Empowering Life</p>
      </div>

      {/* Contact Card */}
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-28 mb-5 relative z-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">📬 Contact VetLink Support</h2>
        <p className="text-gray-600 mb-6">
          Whether you're a pet owner, vet, or partner — we're here to help. Reach out anytime!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
          <div>
            <h3 className="font-semibold text-lg mb-2">General Inquiries</h3>
            <p className="flex items-center gap-2"><FaEnvelope className="text-blue-600" /> support@vetlink.in</p>
            <p className="flex items-center gap-2"><FaPhoneAlt className="text-green-600" /> +91 98765 43210</p>
            <p className="flex items-center gap-2"><FaClock className="text-yellow-600" /> Mon–Fri, 9:00 AM – 6:00 PM IST</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Head Office</h3>
            <p className="flex items-center gap-2"><FaMapMarkerAlt className="text-red-600" /> VetLink HQ, Sadar, Uttar Pradesh, India</p>
            <p className="ml-6">Pincode: 272001</p>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-2">🌐 Connect with Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="https://facebook.com/vetlink" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800"><FaFacebookF /></a>
            <a href="https://instagram.com/vetlink" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700"><FaInstagram /></a>
            <a href="https://linkedin.com/company/vetlink" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-900"><FaLinkedinIn /></a>
          </div>
        </div>

        <div className="mt-10 border-t pt-6 text-sm text-gray-500 mb-5">
          <p>🔒 Your privacy is important to us. We never share your data without consent.</p>
          <p>💡 Need help fast? Visit our <a href="/faq" className="text-blue-600 hover:underline">FAQ page</a> or use the live chat.</p>
        </div>
      </div>

      {/* Footer outside the card, full-width */}
      <Footer />
    </>
  );
};

export default Contact;