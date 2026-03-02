import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../../components/shared/ServiceCard";

// Hero section background images for slider
const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=400&fit=crop",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=400&fit=crop",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=400&fit=crop",
  "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1200&h=400&fit=crop",
];

// Popular service categories with multiple images and styling
const Categories = [
  {
    name: "Plumbing",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK4p-UKxdcA_5DOb2sZN_AL2GnK4Q7pjoPhQ&s",
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=300&fit=crop",
    ],
    color: "from-blue-600",
  },
  {
    name: "Electrical",
    images: [
      "https://raviniaplumbing.com/wp-content/uploads/2024/07/benefits-of-becoming-an-electrician.jpg",
      "https://images.unsplash.com/photo-1621905167918-48416bd8575a?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1581092295755-911b10a4fb38?w=500&h=300&fit=crop",
    ],
    color: "from-yellow-600",
  },
  {
    name: "Cleaning",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlW9w63oVgIOQF9qZciQ2xaTCDxJsew55gWg&s",
      "https://images.unsplash.com/photo-1581578731548-c64695c952952?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&h=300&fit=crop",
    ],
    color: "from-green-600",
  },
  {
    name: "Carpentry",
    images: [
      "https://cdn.prod.website-files.com/6390e14cc734a931f8327343/679c741cfd2f81997c15fb20_Featured-image.jpg",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1452604154888-a942bee56ba2?w=500&h=300&fit=crop",
    ],
    color: "from-orange-600",
  },
];

const Home = () => {
  const [services, setServices] = useState([]);
  const [heroImageIndex, setHeroImageIndex] = useState(0);
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

  // Auto-slide hero images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero Section with Image Slider */}
      <section
        className="hero relative text-white py-50 overflow-hidden"
        style={{
          backgroundImage: `url(${HERO_IMAGES[heroImageIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 1s ease-in-out",
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 "></div>

        {/* Hero content */}
        <div className="relative max-w-7xl mx-auto px-4 text-center z-10">
          <h1 className="text-5xl font-bold mb-4">Welcome to LocalFix</h1>
          <p className="text-xl mb-8">
            Find trusted local services in your area
          </p>
          <Link
            to="/services"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Browse Services
          </Link>
        </div>

        {/* Slider indicators (dots) */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
          {HERO_IMAGES.map((_, index) => (
            <button
              key={index}
              onClick={() => setHeroImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === heroImageIndex
                  ? "bg-white w-8"
                  : "bg-white bg-opacity-50 hover:bg-opacity-75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
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
