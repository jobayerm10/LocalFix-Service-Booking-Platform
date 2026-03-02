import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';
import Modal from '../../components/ui/Modal';
import ReviewCard from '../../components/shared/ReviewCard';
import RatingStars from '../../components/shared/RatingStars';

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetch service details
    // TODO: Replace with actual API call
  }, [id]);

  const handleBooking = () => {
    // Handle booking logic
    navigate('/book-service', { state: { serviceId: id } });
  };

  if (!service) {
    return <div className="text-center py-12">Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <img 
            src={service.image || '/default-image.jpg'} 
            alt={service.title}
            className="w-full h-80 object-cover rounded-lg mb-6"
          />
          
          <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
          
          <div className="mb-6">
            <RatingStars rating={service.rating || 0} />
          </div>

          <p className="text-gray-600 text-lg mb-6">{service.description}</p>

          {/* Provider Info */}
          <div className="bg-gray-100 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold mb-4">Service Provider</h3>
            <div className="flex items-center gap-4">
              <img 
                src={service.providerImage || '/default-avatar.jpg'}
                alt={service.providerName}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">{service.providerName}</p>
                <p className="text-gray-600">Total reviews: {service.totalReviews || 0}</p>
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Reviews</h3>
            {reviews.length > 0 ? (
              reviews.map(review => (
                <ReviewCard key={review.id} {...review} />
              ))
            ) : (
              <p className="text-gray-500">No reviews yet</p>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div>
          <div className="bg-white rounded-lg shadow-lg p-6 sticky top-20">
            <div className="mb-6">
              <p className="text-gray-600 text-sm mb-2">Price</p>
              <p className="text-4xl font-bold text-blue-600">${service.price || 0}</p>
              <p className="text-gray-600 text-sm">/hour</p>
            </div>

            <Button 
              onClick={() => setIsBookingModalOpen(true)}
              variant="primary"
              size="lg"
              className="w-full mb-4"
            >
              Book Now
            </Button>

            <Button 
              variant="secondary"
              size="lg"
              className="w-full"
            >
              Contact Provider
            </Button>

            {/* Booking Details */}
            <div className="mt-6 pt-6 border-t">
              <h4 className="font-semibold mb-4">Details</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p><span className="font-semibold">Response time:</span> {service.responseTime || 'N/A'}</p>
                <p><span className="font-semibold">Availability:</span> {service.availability || 'N/A'}</p>
                <p><span className="font-semibold">Location:</span> {service.location || 'N/A'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal 
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        title="Book This Service"
        size="md"
      >
        <p className="text-gray-600 mb-4">You will be redirected to the booking form</p>
        <div className="flex gap-4">
          <Button 
            onClick={handleBooking}
            variant="primary"
            className="flex-1"
          >
            Continue
          </Button>
          <Button 
            onClick={() => setIsBookingModalOpen(false)}
            variant="secondary"
            className="flex-1"
          >
            Cancel
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default ServiceDetails;
