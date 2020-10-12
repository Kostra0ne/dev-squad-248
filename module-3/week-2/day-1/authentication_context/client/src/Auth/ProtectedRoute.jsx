import React from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const ProtectedRoute = ({ component: ComponentToAllowAccessTo, ...rest }) => {
  return (
    <AuthContext.Consumer>
      {(authContext) => {
        if (authContext.isLoading) {
          return <div>Loading....</div>;
        } else if (authContext.user !== null) {
          return <Route {...rest} component={ComponentToAllowAccessTo} />;
        } else if (authContext.user === null) {
          return <Redirect to="/signin" />;
        }
      }}
    </AuthContext.Consumer>
  );
};

export default ProtectedRoute;
