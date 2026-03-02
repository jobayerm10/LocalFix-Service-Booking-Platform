import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen = true }) => {
  return (
    <aside className={`bg-gray-800 text-white h-screen fixed left-0 top-0 pt-16 ${isOpen ? 'w-64' : 'w-0'} transition-all duration-300 overflow-hidden`}>
      <div className="p-4 space-y-4">
        <Link to="/dashboard" className="block px-4 py-2 hover:bg-gray-700 rounded">
          Dashboard
        </Link>
        <Link to="/my-bookings" className="block px-4 py-2 hover:bg-gray-700 rounded">
          My Bookings
        </Link>
        <Link to="/profile" className="block px-4 py-2 hover:bg-gray-700 rounded">
          Profile
        </Link>
        <Link to="/settings" className="block px-4 py-2 hover:bg-gray-700 rounded">
          Settings
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
