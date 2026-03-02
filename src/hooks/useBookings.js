import { useBookingContext } from '../context/BookingContext';
import { useAuthContext } from '../context/AuthContext';
import { useEffect } from 'react';

export const useBookings = () => {
  const { user } = useAuthContext();
  const { bookings, fetchBookings, isLoading, error } = useBookingContext();

  useEffect(() => {
    if (user?.id) {
      fetchBookings(user.id);
    }
  }, [user?.id, fetchBookings]);

  return {
    bookings,
    isLoading,
    error,
  };
};

export default useBookings;
