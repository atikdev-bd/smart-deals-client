import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router";

const PrivetRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <span className="loading loading-spinner text-secondary text-center"></span>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" replace />;
};

export default PrivetRoutes;
