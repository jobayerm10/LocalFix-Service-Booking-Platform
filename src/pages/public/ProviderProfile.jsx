import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../components/ui/Button';
import RatingStars from '../../components/shared/RatingStars';

const ProviderProfile = () => {
  const { id } = useParams();
  const [provider, setProvider] = useState(null);
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Fetch provider profile
    // TODO: Replace with actual API call
  }, [id]);

  if (!provider) {
    return <div className="text-center py-12">Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Provider Header */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div className="flex flex-col md:flex-row gap-8">
          <img 
            src={provider.image || '/default-avatar.jpg'}
            alt={provider.name}
            className="w-40 h-40 rounded-lg object-cover"
          />
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-2">{provider.name}</h1>
            <div className="mb-4">
              <RatingStars rating={provider.rating || 0} />
            </div>
            <p className="text-gray-600 mb-4">{provider.bio}</p>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div>
                <p className="text-2xl font-bold text-blue-600">{provider.totalReviews || 0}</p>
                <p className="text-gray-600">Reviews</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-600">{provider.completedJobs || 0}</p>
                <p className="text-gray-600">Completed Jobs</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-600">{provider.responseRate || 0}%</p>
                <p className="text-gray-600">Response Rate</p>
              </div>
            </div>
            <Button variant="primary" size="lg">
              Contact Provider
            </Button>
          </div>
        </div>
      </div>

      {/* Services Offered */}
      <div>
        <h2 className="text-3xl font-bold mb-6">Services Offered</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.length > 0 ? (
            services.map(service => (
              <div key={service.id} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">${service.price}/hour</p>
                <Button variant="secondary" size="sm" className="w-full">
                  View Details
                </Button>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No services available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProviderProfile;
