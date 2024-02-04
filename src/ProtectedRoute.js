import React from 'react';
import { Routes, Route } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, isAdmin, ...rest }) => {
  return (
    <Routes>
      <Route
        {...rest}
        render={(props) => {
          if (!isAdmin) {
            return <h1>You are not authorized to access this page.</h1>;
          }
          return <Component {...props} />;
        }}
      />
    </Routes>
  );
};

export default ProtectedRoute;
