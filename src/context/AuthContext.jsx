import React, { createContext, useContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check if user is already logged in
    // TODO: Replace with actual authentication check
    setIsLoading(false);
  }, []);

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);
    try {
      // TODO: Replace with actual login API
      console.log('Logging in:', email);
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
      throw err;
    }
  };

  const register = async (userData) => {
    setIsLoading(true);
    setError(null);
    try {
      // TODO: Replace with actual registration API
      console.log('Registering:', userData);
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
      throw err;
    }
  };

  const logout = async () => {
    try {
      // TODO: Replace with actual logout API
      setUser(null);
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const value = {
    user,
    isLoading,
    error,
    login,
    register,
    logout,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within AuthProvider');
  }
  return context;
};
