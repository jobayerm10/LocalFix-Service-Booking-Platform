import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Button from '../../components/ui/Button';

const AdminDashboard = () => {
  const [stats, setStats] = useState({});
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Fetch admin dashboard data
    // TODO: Replace with actual API call
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-blue-100 rounded-lg p-6">
          <p className="text-gray-600 text-sm">Total Users</p>
          <p className="text-3xl font-bold text-blue-600">{stats.totalUsers || 0}</p>
        </div>
        <div className="bg-green-100 rounded-lg p-6">
          <p className="text-gray-600 text-sm">Total Services</p>
          <p className="text-3xl font-bold text-green-600">{stats.totalServices || 0}</p>
        </div>
        <div className="bg-yellow-100 rounded-lg p-6">
          <p className="text-gray-600 text-sm">Total Bookings</p>
          <p className="text-3xl font-bold text-yellow-600">{stats.totalBookings || 0}</p>
        </div>
        <div className="bg-purple-100 rounded-lg p-6">
          <p className="text-gray-600 text-sm">Total Revenue</p>
          <p className="text-3xl font-bold text-purple-600">${stats.totalRevenue || 0}</p>
        </div>
      </div>

      {/* Chart */}
      {chartData.length > 0 && (
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Bookings Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="bookings" stroke="#3b82f6" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
        <div className="flex gap-4 flex-wrap">
          <Button variant="primary">Manage Users</Button>
          <Button variant="secondary">Manage Services</Button>
          <Button variant="secondary">View Reports</Button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
