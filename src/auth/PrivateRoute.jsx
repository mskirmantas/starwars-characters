import React from "react";
import { Route, Redirect } from "react-router-dom";

const hasJWTToken = () => {
  return localStorage.getItem("token") ? true : false;
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        hasJWTToken() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        )
      }
    />
  );
};

export default PrivateRoute;
