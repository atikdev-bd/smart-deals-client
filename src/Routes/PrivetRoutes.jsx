import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivetRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  if (loading) {
    return (
      <span className="loading loading-spinner text-secondary text-center"></span>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate state={{ from: location }} replace to="/login" />;
};

export default PrivetRoutes;
