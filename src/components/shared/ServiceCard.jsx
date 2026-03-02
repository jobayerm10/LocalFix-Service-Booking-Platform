import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ 
  id,
  title = 'Service Title',
  description = 'Service description',
  price = '$0',
  rating = 0,
  image = '/default-image.jpg',
  providerName = 'Provider Name'
}) => {
  return (
    <Link to={`/service-details/${id}`}>
      <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden cursor-pointer">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm mb-2 line-clamp-2">{description}</p>
          <div className="flex justify-between items-center mb-2">
            <span className="text-blue-600 font-bold">{price}/hr</span>
            <span className="text-yellow-500">★ {rating.toFixed(1)}</span>
          </div>
          <p className="text-gray-500 text-sm">By {providerName}</p>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
