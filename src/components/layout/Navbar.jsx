import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo/localfixlogo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-9xl mx-auto px-20 py-2 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            <img src={Logo} alt="LocalFix Logo" className="h-15 w-auto" />
          </Link>
          <h3 className="text-3xl font-bold text-[#1E4376]">
            Local<span className="text-[#F27024]">Fix</span>
          </h3>
        </div>

        <div className="hidden md:flex space-x-10 ">
          <Link
            to="/"
            className="text-gray-700 font-semibold hover:text-blue-600"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="text-gray-700 font-semibold  hover:text-blue-600"
          >
            Services
          </Link>
          <Link
            to="/login"
            className="text-gray-700 font-semibold hover:text-blue-600"
          >
            Login
          </Link>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-3xl text-gray-700"
        >
          ☰
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <Link
            to="/"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Services
          </Link>
          <Link
            to="/login"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
