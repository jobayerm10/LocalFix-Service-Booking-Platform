import React, { createContext, useContext, useState, useCallback } from 'react';

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchBookings = useCallback(async (userId) => {
    setIsLoading(true);
    setError(null);
    try {
      // TODO: Replace with actual API call
      console.log('Fetching bookings for user:', userId);
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  }, []);

  const createBooking = useCallback(async (bookingData) => {
    setIsLoading(true);
    setError(null);
    try {
      // TODO: Replace with actual API call
      console.log('Creating booking:', bookingData);
      setIsLoading(false);
      return true;
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
      throw err;
    }
  }, []);

  const cancelBooking = useCallback(async (bookingId) => {
    setIsLoading(true);
    setError(null);
    try {
      // TODO: Replace with actual API call
      console.log('Cancelling booking:', bookingId);
      setBookings(prev => prev.filter(b => b.id !== bookingId));
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
      throw err;
    }
  }, []);

  const updateBooking = useCallback(async (bookingId, updateData) => {
    setIsLoading(true);
    setError(null);
    try {
      // TODO: Replace with actual API call
      console.log('Updating booking:', bookingId, updateData);
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
      throw err;
    }
  }, []);

  const value = {
    bookings,
    isLoading,
    error,
    fetchBookings,
    createBooking,
    cancelBooking,
    updateBooking,
  };

  return (
    <BookingContext.Provider value={value}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBookingContext = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBookingContext must be used within BookingProvider');
  }
  return context;
};
