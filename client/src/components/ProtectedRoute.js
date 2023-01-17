import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "./auth.context";

function ProtectedRoute({ component: Component, ...restOfProps }) {
    const {userToken} = useAuth();
    // if (!userToken || userToken === "") {
    //     return <Navigate to="/login" />;
    // } else {
    //     if (authSuccess === false) return <Navigate to="/login" />;
    //     else return children;
    // }
  return (
    
    <Route
      {...restOfProps}
      render={(props) =>
        userToken ? <Component {...props}  /> : <Redirect to="/CodeReview" />
      }
    />
  );
}

export default ProtectedRoute;