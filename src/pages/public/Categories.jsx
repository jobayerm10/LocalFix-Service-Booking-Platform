import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const services = [
    { name: "Electrician", icon: "⚡", pros: 142, isActive: true },
    { name: "Plumber", icon: "🔧", pros: 98 },
    { name: "Tutor", icon: "📚", pros: 215 },
    { name: "Cleaning", icon: "🧹", pros: 76 },
    { name: "Carpenter", icon: "🔨", pros: 54 },
    { name: "Painter", icon: "🎨", pros: 61 },
  ];

  return (
    <div className="bg-gray-50 py-12 ">
      <div className="max-w-7xl mx-auto px-4 lg:px-10 mt-15">
        {/* Header */}
        <div className="flex justify-between items-center mb-7">
          <h2 className="text-2xl font-[font2] font-semibold text-[#0F172A]">
            Browse Categories
          </h2>
          <Link
            to="/services"
            className="text-blue-600 font-semibold hover:text-blue-700 transition"
          >
            View all categories →
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {services.map((service) => (
            <Link
              key={service.name}
              to={`/services?category=${service.name}`}
              className={`p-6 rounded-2xl text-center transition hover:shadow-lg group ${
                service.isActive
                  ? "bg-white border-3 border-blue-600 shadow-md"
                  : "bg-white border border-gray-200 hover:border-blue-300"
              }`}
            >
              {/* Icon */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                {service.name}
              </h3>

              {/* Pro Count */}
              <p className="text-sm text-gray-500">{service.pros} pros</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
