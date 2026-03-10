import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo/logo1.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-10 py-3 flex justify-between items-center gap-8 ">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={Logo} alt="LocalFix Logo" className="h-10 w-auto" />
          <h3 className="text-xl font-[font1]  font-extrabold text-[#1B4FD8]">
           LocalFix
          </h3>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 items-center justify-center flex-1 shrink-0">
          <Link
            to="/"
            className="text-gray-500 font-medium hover:text-blue-600 transition"
          >
            Home
          </Link>
          <Link
            to="/bookings"
            className="text-gray-500 font-medium hover:text-blue-600 transition"
          >
            Bookings
          </Link>
          <Link
            to="/profile"
            className="text-gray-500 font-medium hover:text-blue-600 transition"
          >
            My Profile
          </Link>
          <Link
            to="/help"
            className="text-gray-500 font-medium hover:text-blue-600 transition"
          >
            Help
          </Link>
        </ul>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/login"
            className="text-gray-500 text-sm font-medium hover:text-blue-600 transition"
          >
            Sign In
          </Link>
          <Link
            to="/post-job"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Post a Job
          </Link>
          <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold cursor-pointer hover:bg-blue-700 transition">
            JH
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-3xl text-gray-700"
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <ul className="flex flex-col">
            <Link
              to="/"
              className="block px-4 py-3 text-gray-700 hover:bg-gray-100 font-medium border-b"
            >
              Home
            </Link>
            <Link
              to="/bookings"
              className="block px-4 py-3 text-gray-700 hover:bg-gray-100 font-medium border-b"
            >
              Bookings
            </Link>
            <Link
              to="/profile"
              className="block px-4 py-3 text-gray-700 hover:bg-gray-100 font-medium border-b"
            >
              My Profile
            </Link>
            <Link
              to="/help"
              className="block px-4 py-3 text-gray-700 hover:bg-gray-100 font-medium border-b"
            >
              Help
            </Link>
            <Link
              to="/login"
              className="block px-4 py-3 text-gray-700 hover:bg-gray-100 font-medium border-b"
            >
              Sign In
            </Link>
            <Link
              to="/post-job"
              className="block px-4 py-3 bg-blue-600 text-white font-medium hover:bg-blue-700"
            >
              Post a Job
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
