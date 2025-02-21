import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* About Us Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">ABOUT US</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">FAQs</a></li>
            <li><a href="#" className="hover:text-white">Privacy</a></li>
            <li><a href="#" className="hover:text-white">Terms of use</a></li>
            <li><a href="#" className="hover:text-white">Admin Login</a></li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3 className="text-lg font-semibold mb-3">SUBSCRIBE NEWSLETTER</h3>
          <div className="flex flex-col">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="p-3 bg-gray-800 text-white rounded-md outline-none"
            />
            <button className="mt-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3 rounded-md flex justify-center items-center">
              Subscribe <span className="ml-2">➡️</span>
            </button>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            *We send great deals and latest auto news to our subscribed users every week.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col bottom-0">
          <p className="text-gray-400">Connect with Us:</p>
          <div className="flex space-x-4 mt-3">
            <a href="#" className="text-gray-400 hover:text-white text-xl">📘</a>
            <a href="#" className="text-gray-400 hover:text-white text-xl">🐦</a>
            <a href="#" className="text-gray-400 hover:text-white text-xl">💼</a>
            <a href="#" className="text-gray-400 hover:text-white text-xl">🔵</a>
            <a href="#" className="text-gray-400 hover:text-white text-xl">📸</a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-gray-400 text-sm border-t border-gray-700 mt-8 pt-6">
        Copyright © 2020 Bike Rental Portal. All Rights Reserved
      </div>
      
    </footer>
  );
};

export default Footer;
