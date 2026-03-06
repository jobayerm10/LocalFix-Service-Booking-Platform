import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../../components/shared/ServiceCard";
import HeroVdo from "../../assets/images/Services.webm";
import HeroImg from "../../assets/images/heroImg.png";
// Hero section background image

// Popular service categories with multiple images and styling
const Categories = [
  {
    name: "Plumbing",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK4p-UKxdcA_5DOb2sZN_AL2GnK4Q7pjoPhQ&s",
    ],
    color: "from-blue-600",
  },
  {
    name: "Electrical",
    images: [
      "https://raviniaplumbing.com/wp-content/uploads/2024/07/benefits-of-becoming-an-electrician.jpg",
    ],
    color: "from-yellow-600",
  },
  {
    name: "Cleaning",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlW9w63oVgIOQF9qZciQ2xaTCDxJsew55gWg&s",
    ],
    color: "from-green-600",
  },
  {
    name: "Carpentry",
    images: [
      "https://cdn.prod.website-files.com/6390e14cc734a931f8327343/679c741cfd2f81997c15fb20_Featured-image.jpg",
    ],
    color: "from-orange-600",
  },
];

const Home = () => {
  const [services, setServices] = useState([]);
  const [categoryImageIndices, setCategoryImageIndices] = useState(
    Categories.reduce((acc, category, idx) => {
      acc[idx] = 0;
      return acc;
    }, {}),
  );

  useEffect(() => {
    // TODO: Replace with actual API call
    setServices([]);
  }, []);

  return (
    <div>
      <section className="hero relative text-white overflow-hidden flex flex-col justify-center h-screen bg-[#9da7af]">
        <section className="box  bg-[#a9b0ba] w-screen h-screen py-10 px-20 rounded-lg shadow-md flex flex-col justify-start items-start">
          <h1 className="text-3xl font-bold text-[#1E4376] mb-6">
            Find Local Services
          </h1>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <select
              className="px-4 py-3 rounded-md border border-gray-300 text-gray-700 bg-white w-full md:w-1/3"
              defaultValue=""
            >
              <option value="" disabled>
                Select Category
              </option>
              {Categories.map((cat, idx) => (
                <option key={cat.name} value={cat.name}>
                  {cat.name}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Enter Location"
              className="px-4 py-3 rounded-md border border-gray-300 text-gray-700 bg-white w-full md:w-1/3"
            />
            <button className="px-6 py-3 bg-blue-600 text-white rounded-md font-semibold shadow-md hover:bg-blue-700 transition">
              Search
            </button>
          </div>

          <div>
            <h2 className="text-3xl text-[#2a538e] font-bold mb-6">
              Available Categories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {Categories.map((category, i) => (
                <Link
                  key={i}
                  to={`/services?category=${category.name}`}
                  className="relative h-48 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
                >
                  <img
                    src={category.images[categoryImageIndices[i]]}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 bg-gray-500 hover:bg-blue-600 h-10 w-full transition-all flex items-center justify-center">
                    <h3 className="text-xl mt-3 font-bold text-white">
                      {category.name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-white mt-10 rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-[#1E4376]">
                Service Listings
              </h2>
              <input
                type="text"
                placeholder="Search"
                className="px-3 py-2 rounded-md border border-gray-300 text-gray-700 bg-white w-40"
              />
            </div>
            {/* Example service cards, replace with dynamic if needed */}
            <div className="flex items-center gap-4 border-b pb-4 mb-4">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Profile"
                className="rounded-lg w-16 h-16 object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-lg">Ahmed Rahman</span>
                  <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs">
                    Electrician
                  </span>
                </div>
                <div className="text-gray-500 text-sm">Dhaka, Bangladesh</div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-500 text-xl font-bold">★</span>
                <span className="font-semibold text-lg">4.8</span>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded font-semibold shadow hover:bg-blue-700">
                Book Now
              </button>
            </div>
            <div className="flex items-center gap-4">
              <img
                src="https://randomuser.me/api/portraits/men/33.jpg"
                alt="Profile"
                className="rounded-lg w-16 h-16 object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-lg">Samir Islam</span>
                  <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs">
                    Plumber
                  </span>
                </div>
                <div className="text-gray-500 text-sm">22 Mue Serec, Dhaka</div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-500 text-xl font-bold">★</span>
                <span className="font-semibold text-lg">4.6</span>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded font-semibold shadow hover:bg-blue-700">
                Book Now
              </button>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Home;
