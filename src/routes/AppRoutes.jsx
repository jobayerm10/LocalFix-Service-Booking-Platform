import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

// Public Pages
import Home from '../pages/public/Home';
// import Services from '../pages/public/Services';
import ServiceDetails from '../pages/public/ServiceDetails';
import ProviderProfile from '../pages/public/ProviderProfile';

// Auth Pages
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';

// User Pages
import UserDashboard from '../pages/user/UserDashboard';
import MyBookings from '../pages/user/MyBookings';
import BookService from '../pages/user/BookService';

// Provider Pages
import ProviderDashboard from '../pages/provider/ProviderDashboard';
import JobRequests from '../pages/provider/JobRequests';
import ManageServices from '../pages/provider/ManageServices';

// Admin Pages
import AdminDashboard from '../pages/admin/AdminDashboard';
import AdminManageUsers from '../pages/admin/ManageUsers';
import AdminManageServices from '../pages/admin/ManageServices';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      {/* <Route path="/services" element={<Services />} /> */}
      <Route path="/service-details/:id" element={<ServiceDetails />} />
      <Route path="/provider-profile/:id" element={<ProviderProfile />} />
      
      {/* Auth Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* User Routes */}
      <Route 
        path="/dashboard" 
        element={
          <PrivateRoute requiredRole="user">
            <UserDashboard />
          </PrivateRoute>
        } 
      />
      <Route 
        path="/my-bookings" 
        element={
          <PrivateRoute requiredRole="user">
            <MyBookings />
          </PrivateRoute>
        } 
      />
      <Route 
        path="/book-service" 
        element={
          <PrivateRoute requiredRole="user">
            <BookService />
          </PrivateRoute>
        } 
      />

      {/* Provider Routes */}
      <Route 
        path="/provider-dashboard" 
        element={
          <PrivateRoute requiredRole="provider">
            <ProviderDashboard />
          </PrivateRoute>
        } 
      />
      <Route 
        path="/job-requests" 
        element={
          <PrivateRoute requiredRole="provider">
            <JobRequests />
          </PrivateRoute>
        } 
      />
      <Route 
        path="/manage-services" 
        element={
          <PrivateRoute requiredRole="provider">
            <ManageServices />
          </PrivateRoute>
        } 
      />

      {/* Admin Routes */}
      <Route 
        path="/admin-dashboard" 
        element={
          <PrivateRoute requiredRole="admin">
            <AdminDashboard />
          </PrivateRoute>
        } 
      />
      <Route 
        path="/admin/users" 
        element={
          <PrivateRoute requiredRole="admin">
            <AdminManageUsers />
          </PrivateRoute>
        } 
      />
      <Route 
        path="/admin/services" 
        element={
          <PrivateRoute requiredRole="admin">
            <AdminManageServices />
          </PrivateRoute>
        } 
      />

      {/* 404 Route */}
      <Route path="*" element={<div className="text-center py-12">Page not found</div>} />
    </Routes>
  );
};

export default AppRoutes;
