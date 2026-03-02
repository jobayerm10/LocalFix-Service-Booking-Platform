import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../../components/shared/ServiceCard";
import HeroImage from "../../assets/images/heroImg.png";

// Hero section background image
const HERO_IMAGE = HeroImage;

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
  // Track current image index for each category
  const [categoryImageIndices, setCategoryImageIndices] = useState(
    Categories.reduce((acc, category, idx) => {
      acc[idx] = 0;
      return acc;
    }, {}),
  );

  useEffect(() => {
    // Fetch featured services
    // TODO: Replace with actual API call
    setServices([]);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section
        className="hero  relative text-white overflow-hidden flex flex-col justify-end min-h-screen group-hover:scale-105 transition-transform duration-500 "
        style={{
          backgroundImage: `url('${HERO_IMAGE}')`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Hero content positioned at bottom */}
        <div className="relative max-w-7xl mx-auto px-4 text-center z-10 pb-30">
          <h1 className="text-6xl font-bold mb-4 drop-shadow-lg">
            Welcome to LocalFix
          </h1>
          <p className="text-2xl mb-8 drop-shadow-md">
            Find trusted local services in your area
          </p>
          <Link
            to="/services"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Browse Services
          </Link>
        </div>
      </section>

      {/* Featured Services */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Featured Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.length > 0 ? (
            services.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))
          ) : (
            <p className="text-gray-500">No services available yet</p>
          )}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Popular Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Map through categories and display each as an image card */}
            {Categories.map((category, i) => (
              <Link
                key={i}
                to={`/services?category=${category.name}`}
                className="relative h-48 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
              >
                {/* Category background image with auto-rotation */}
                <img
                  src={category.images[categoryImageIndices[i]]}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Dark overlay with category name */}
                <div className="absolute bottom-0 bg-gray-500 hover:bg-blue-600 h-10 w-full transition-all flex items-center justify-center">
                  <h3 className="text-xl mt-3 font-bold text-white">
                    {category.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
