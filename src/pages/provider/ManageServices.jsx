import React, { useState, useEffect } from 'react';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import Modal from '../../components/ui/Modal';

const ManageServices = () => {
  const [services, setServices] = useState([]);
  const [showAddServiceModal, setShowAddServiceModal] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    availability: '',
  });

  useEffect(() => {
    // Fetch provider services
    // TODO: Replace with actual API call
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddService = async (e) => {
    e.preventDefault();
    // TODO: API call to add service
    console.log('New service:', formData);
    setShowAddServiceModal(false);
    setFormData({ title: '', description: '', price: '', category: '', availability: '' });
  };

  const handleDeleteService = (serviceId) => {
    // TODO: API call to delete service
    console.log('Delete service:', serviceId);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Manage Services</h1>
        <Button
          variant="primary"
          onClick={() => setShowAddServiceModal(true)}
        >
          + Add New Service
        </Button>
      </div>

      {/* Services List */}
      <div className="grid gap-6">
        {services.length > 0 ? (
          services.map(service => (
            <div key={service.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Category</p>
                      <p className="font-semibold">{service.category}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Price</p>
                      <p className="font-semibold">${service.price}/hour</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Status</p>
                      <p className="font-semibold text-green-600">Active</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="secondary" size="sm">Edit</Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDeleteService(service.id)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="bg-white rounded-lg p-8 text-center">
            <p className="text-gray-500 mb-4">No services added yet</p>
            <Button
              variant="primary"
              onClick={() => setShowAddServiceModal(true)}
            >
              Add Your First Service
            </Button>
          </div>
        )}
      </div>

      {/* Add Service Modal */}
      <Modal
        isOpen={showAddServiceModal}
        onClose={() => setShowAddServiceModal(false)}
        title="Add New Service"
        size="md"
      >
        <form onSubmit={handleAddService} className="space-y-4">
          <Input
            label="Service Title"
            type="text"
            name="title"
            placeholder="e.g., Plumbing Repair"
            value={formData.title}
            onChange={handleChange}
            required
          />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              name="description"
              placeholder="Describe your service..."
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <Input
            label="Price (per hour)"
            type="number"
            name="price"
            placeholder="0.00"
            value={formData.price}
            onChange={handleChange}
            required
          />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select a category</option>
              <option value="plumbing">Plumbing</option>
              <option value="electrical">Electrical</option>
              <option value="cleaning">Cleaning</option>
              <option value="carpentry">Carpentry</option>
            </select>
          </div>

          <div className="flex gap-4">
            <Button
              type="submit"
              variant="primary"
              className="flex-1"
            >
              Add Service
            </Button>
            <Button
              type="button"
              variant="secondary"
              className="flex-1"
              onClick={() => setShowAddServiceModal(false)}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default ManageServices;
