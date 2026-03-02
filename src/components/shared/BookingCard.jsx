import React from 'react';
import { Link } from 'react-router-dom';

const BookingCard = ({
  id,
  serviceName = 'Service Name',
  providerName = 'Provider Name',
  date = 'Date',
  time = 'Time',
  status = 'pending',
  price = '$0',
  image = '/default-image.jpg'
}) => {
  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800',
    confirmed: 'bg-green-100 text-green-800',
    completed: 'bg-blue-100 text-blue-800',
    cancelled: 'bg-red-100 text-red-800',
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 mb-4 hover:shadow-xl transition-shadow">
      <div className="flex gap-4">
        <img src={image} alt={serviceName} className="w-24 h-24 object-cover rounded" />
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800 mb-1">{serviceName}</h3>
          <p className="text-gray-600 text-sm mb-2">Provider: {providerName}</p>
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-500">
              <p>{date} at {time}</p>
              <p className="font-semibold text-gray-800 mt-1">{price}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${statusColors[status]}`}>
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
