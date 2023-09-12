import PropTypes from "prop-types";
import React from 'react';
import {Navigate} from "react-router-dom";

import useAuth from "../hooks/useAuth";
import LoadingScreen from "../components/LoadingScreen";

GuestGuard.propTypes = {
  children: PropTypes.node,
};

export default function GuestGuard({children}) {
  const {isAuthenticated, isInitialized} = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/"/>;
  }

  if (!isInitialized) {
    return <LoadingScreen/>;
  }

  return <>{children}</>;
}
