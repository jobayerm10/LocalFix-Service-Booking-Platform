import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            LocalFix
          </Link>
        </div>
        
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/services" className="text-gray-700 hover:text-blue-600">Services</Link>
          <Link to="/login" className="text-gray-700 hover:text-blue-600">Login</Link>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-700"
        >
          ☰
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Home</Link>
          <Link to="/services" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Services</Link>
          <Link to="/login" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Login</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
