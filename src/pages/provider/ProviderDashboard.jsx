import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button';

const ProviderDashboard = () => {
  const [provider, setProvider] = useState(null);
  const [stats, setStats] = useState({});
  const [recentRequests, setRecentRequests] = useState([]);

  useEffect(() => {
    // Fetch provider data
    // TODO: Replace with actual API call
  }, []);

  if (!provider) {
    return <div className="text-center py-12">Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Welcome, {provider.firstName}!</h1>
        <p className="text-gray-600">Manage your services and job requests</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-blue-100 rounded-lg p-6">
          <p className="text-gray-600 text-sm">Active Services</p>
          <p className="text-3xl font-bold text-blue-600">{stats.activeServices || 0}</p>
        </div>
        <div className="bg-green-100 rounded-lg p-6">
          <p className="text-gray-600 text-sm">Total Bookings</p>
          <p className="text-3xl font-bold text-green-600">{stats.totalBookings || 0}</p>
        </div>
        <div className="bg-yellow-100 rounded-lg p-6">
          <p className="text-gray-600 text-sm">Pending Requests</p>
          <p className="text-3xl font-bold text-yellow-600">{stats.pendingRequests || 0}</p>
        </div>
        <div className="bg-purple-100 rounded-lg p-6">
          <p className="text-gray-600 text-sm">Total Earned</p>
          <p className="text-3xl font-bold text-purple-600">${stats.totalEarned || 0}</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
        <div className="flex gap-4 flex-wrap">
          <Link to="/manage-services">
            <Button variant="primary">Manage Services</Button>
          </Link>
          <Link to="/job-requests">
            <Button variant="secondary">View Job Requests</Button>
          </Link>
          <Button variant="secondary">View Reviews</Button>
        </div>
      </div>

      {/* Recent Job Requests */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Recent Job Requests</h2>
        {recentRequests.length > 0 ? (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left">Service</th>
                  <th className="px-6 py-3 text-left">Date</th>
                  <th className="px-6 py-3 text-left">Client</th>
                  <th className="px-6 py-3 text-left">Status</th>
                  <th className="px-6 py-3 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {recentRequests.slice(0, 5).map(request => (
                  <tr key={request.id} className="border-t">
                    <td className="px-6 py-3">{request.serviceName}</td>
                    <td className="px-6 py-3">{request.date}</td>
                    <td className="px-6 py-3">{request.clientName}</td>
                    <td className="px-6 py-3">
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                        {request.status}
                      </span>
                    </td>
                    <td className="px-6 py-3">
                      <Button variant="primary" size="sm">
                        Review
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-500 bg-white p-6 rounded-lg">No recent requests</p>
        )}
      </div>
    </div>
  );
};

export default ProviderDashboard;
