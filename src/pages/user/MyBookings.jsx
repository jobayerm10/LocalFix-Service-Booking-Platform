import React, { useState, useEffect } from 'react';
import BookingCard from '../../components/shared/BookingCard';
import Button from '../../components/ui/Button';

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    // Fetch user bookings
    // TODO: Replace with actual API call
  }, [filter]);

  const filteredBookings = bookings.filter(booking => {
    if (filter === 'all') return true;
    return booking.status === filter;
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">My Bookings</h1>

      {/* Filters */}
      <div className="flex gap-2 mb-8">
        {['all', 'pending', 'confirmed', 'completed', 'cancelled'].map(status => (
          <Button
            key={status}
            variant={filter === status ? 'primary' : 'secondary'}
            onClick={() => setFilter(status)}
            size="sm"
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Button>
        ))}
      </div>

      {/* Bookings List */}
      <div>
        {filteredBookings.length > 0 ? (
          filteredBookings.map(booking => (
            <BookingCard key={booking.id} {...booking} />
          ))
        ) : (
          <div className="bg-white rounded-lg p-8 text-center">
            <p className="text-gray-500 mb-4">No {filter !== 'all' ? filter : ''} bookings found</p>
            <Button variant="primary">Browse Services</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBookings;
