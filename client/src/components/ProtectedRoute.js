import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "./auth.context";

function ProtectedRoute({ component: Component, ...restOfProps }) {
    const {userToken} = useAuth();
  return (

    <Route
      {...restOfProps}
      render={(props) =>
        userToken ? <Component {...props}  />:{}
        // : <Redirect to="/CodeReview" />
      }
    />
  );
}

export default ProtectedRoute;