import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import routePath from 'src/configs/routePath';
import localStorageKeys from 'src/configs/localStorage';

interface RequireAuthProps {
  children: React.ReactNode;
  role?: string[];
}
const RequireAuth = ({ children, role }: RequireAuthProps) => {
  const isAuthenticated = !!localStorage.getItem(localStorageKeys.ACCESS_TOKEN);
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to={routePath.LOGIN} state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
