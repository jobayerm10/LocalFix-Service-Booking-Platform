import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button';
import BookingCard from '../../components/shared/BookingCard';

const UserDashboard = () => {
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [stats, setStats] = useState({});

  useEffect(() => {
    // Fetch user data and bookings
    // TODO: Replace with actual API call
  }, []);

  if (!user) {
    return <div className="text-center py-12">Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Welcome, {user.firstName}!</h1>
        <p className="text-gray-600">Manage your bookings and account</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-blue-100 rounded-lg p-6">
          <p className="text-gray-600 text-sm">Total Bookings</p>
          <p className="text-3xl font-bold text-blue-600">{stats.totalBookings || 0}</p>
        </div>
        <div className="bg-green-100 rounded-lg p-6">
          <p className="text-gray-600 text-sm">Completed</p>
          <p className="text-3xl font-bold text-green-600">{stats.completedBookings || 0}</p>
        </div>
        <div className="bg-yellow-100 rounded-lg p-6">
          <p className="text-gray-600 text-sm">Pending</p>
          <p className="text-3xl font-bold text-yellow-600">{stats.pendingBookings || 0}</p>
        </div>
        <div className="bg-purple-100 rounded-lg p-6">
          <p className="text-gray-600 text-sm">Total Spent</p>
          <p className="text-3xl font-bold text-purple-600">${stats.totalSpent || 0}</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
        <div className="flex gap-4">
          <Link to="/services">
            <Button variant="primary">Browse Services</Button>
          </Link>
          <Link to="/my-bookings">
            <Button variant="secondary">View All Bookings</Button>
          </Link>
        </div>
      </div>

      {/* Recent Bookings */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Recent Bookings</h2>
        {bookings.length > 0 ? (
          <div>
            {bookings.slice(0, 3).map(booking => (
              <BookingCard key={booking.id} {...booking} />
            ))}
            <Link to="/my-bookings">
              <Button variant="secondary" className="mt-4">View All Bookings</Button>
            </Link>
          </div>
        ) : (
          <p className="text-gray-500 bg-white p-6 rounded-lg">No bookings yet</p>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
