import React, { useState, useEffect } from 'react';
import Button from '../../components/ui/Button';
import Modal from '../../components/ui/Modal';

const JobRequests = () => {
  const [requests, setRequests] = useState([]);
  const [filter, setFilter] = useState('pending');
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  useEffect(() => {
    // Fetch job requests
    // TODO: Replace with actual API call
  }, [filter]);

  const handleAcceptRequest = (requestId) => {
    // TODO: API call to accept request
    console.log('Accepted request:', requestId);
    setShowDetailsModal(false);
  };

  const handleDeclineRequest = (requestId) => {
    // TODO: API call to decline request
    console.log('Declined request:', requestId);
    setShowDetailsModal(false);
  };

  const filteredRequests = requests.filter(req => req.status === filter);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Job Requests</h1>

      {/* Filters */}
      <div className="flex gap-2 mb-8">
        {['pending', 'accepted', 'completed', 'declined'].map(status => (
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

      {/* Requests List */}
      <div className="grid gap-4">
        {filteredRequests.length > 0 ? (
          filteredRequests.map(request => (
            <div key={request.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{request.serviceName}</h3>
                  <p className="text-gray-600 mb-2">Client: {request.clientName}</p>
                  <p className="text-gray-600 mb-2">Date: {request.date} at {request.time}</p>
                  <p className="text-gray-600">Location: {request.location}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-blue-600 mb-4">${request.price}</p>
                  {request.status === 'pending' && (
                    <div className="flex gap-2">
                      <Button
                        variant="success"
                        size="sm"
                        onClick={() => {
                          setSelectedRequest(request);
                          setShowDetailsModal(true);
                        }}
                      >
                        View Details
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="bg-white rounded-lg p-8 text-center">
            <p className="text-gray-500">No {filter} requests</p>
          </div>
        )}
      </div>

      {/* Details Modal */}
      <Modal
        isOpen={showDetailsModal}
        onClose={() => setShowDetailsModal(false)}
        title="Job Request Details"
        size="md"
      >
        {selectedRequest && (
          <div>
            <div className="mb-4 space-y-2">
              <p><strong>Service:</strong> {selectedRequest.serviceName}</p>
              <p><strong>Client:</strong> {selectedRequest.clientName}</p>
              <p><strong>Date & Time:</strong> {selectedRequest.date} at {selectedRequest.time}</p>
              <p><strong>Location:</strong> {selectedRequest.location}</p>
              <p><strong>Price:</strong> ${selectedRequest.price}</p>
              <p><strong>Duration:</strong> {selectedRequest.duration} hours</p>
              <p><strong>Notes:</strong> {selectedRequest.notes || 'None'}</p>
            </div>
            <div className="flex gap-4">
              <Button
                variant="primary"
                onClick={() => handleAcceptRequest(selectedRequest.id)}
                className="flex-1"
              >
                Accept Request
              </Button>
              <Button
                variant="danger"
                onClick={() => handleDeclineRequest(selectedRequest.id)}
                className="flex-1"
              >
                Decline Request
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default JobRequests;
