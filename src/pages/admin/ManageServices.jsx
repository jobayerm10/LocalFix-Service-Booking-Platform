import React, { useState, useEffect } from 'react';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';

const ManageServices = () => {
  const [services, setServices] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    // Fetch services
    // TODO: Replace with actual API call
  }, [filter, searchTerm]);

  const handleApproveService = (serviceId) => {
    // TODO: API call to approve service
    console.log('Approve service:', serviceId);
  };

  const handleRejectService = (serviceId) => {
    // TODO: API call to reject service
    console.log('Reject service:', serviceId);
  };

  const handleDeleteService = (serviceId) => {
    // TODO: API call to delete service
    console.log('Delete service:', serviceId);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Manage Services</h1>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            placeholder="Search services..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Services</option>
            <option value="active">Active</option>
            <option value="pending">Pending Review</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>

      {/* Services Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left">Service Name</th>
              <th className="px-6 py-3 text-left">Provider</th>
              <th className="px-6 py-3 text-left">Category</th>
              <th className="px-6 py-3 text-left">Price</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {services.length > 0 ? (
              services.map(service => (
                <tr key={service.id} className="border-t hover:bg-gray-50">
                  <td className="px-6 py-3">{service.name}</td>
                  <td className="px-6 py-3">{service.provider}</td>
                  <td className="px-6 py-3 capitalize">{service.category}</td>
                  <td className="px-6 py-3">${service.price}/hr</td>
                  <td className="px-6 py-3">
                    <span className={`px-2 py-1 rounded text-sm ${
                      service.status === 'active'
                        ? 'bg-green-100 text-green-800'
                        : service.status === 'pending'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {service.status}
                    </span>
                  </td>
                  <td className="px-6 py-3 flex gap-2">
                    {service.status === 'pending' && (
                      <>
                        <Button
                          variant="success"
                          size="sm"
                          onClick={() => handleApproveService(service.id)}
                        >
                          Approve
                        </Button>
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => handleRejectService(service.id)}
                        >
                          Reject
                        </Button>
                      </>
                    )}
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleDeleteService(service.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="px-6 py-8 text-center text-gray-500">
                  No services found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageServices;
