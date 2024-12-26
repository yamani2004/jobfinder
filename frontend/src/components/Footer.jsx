// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#f34c26] text-white py-6">
      <div className="container mx-auto flex flex-col items-center space-y-4 text-center sm:flex-row sm:justify-between sm:space-y-0">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} <span className="font-bold">Job Finder</span>. All rights reserved.
        </p>
        <nav className="flex space-x-6">
          <a
            href="/"
            className="text-sm hover:underline hover:text-blue-400 transition duration-200"
          >
            About Us
          </a>
          <a
            href="/"
            className="text-sm hover:underline hover:text-blue-400 transition duration-200"
          >
            Contact
          </a>
          <a
            href="/"
            className="text-sm hover:underline hover:text-blue-400 transition duration-200"
          >
            Privacy Policy
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
