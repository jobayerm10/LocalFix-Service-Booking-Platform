import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { useRole } from '../hooks/useRole';
import Spinner from '../components/ui/Spinner';

const PrivateRoute = ({ children, requiredRole = null }) => {
  const { isAuthenticated, isLoading } = useAuthContext();
  const { role } = useRole();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (requiredRole && role !== requiredRole) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PrivateRoute;
