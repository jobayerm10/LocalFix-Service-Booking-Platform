import { useAuthContext } from '../context/AuthContext';

export const useRole = () => {
  const { user } = useAuthContext();
  
  return {
    role: user?.role || null,
    isUser: user?.role === 'user',
    isProvider: user?.role === 'provider',
    isAdmin: user?.role === 'admin',
  };
};

export default useRole;
