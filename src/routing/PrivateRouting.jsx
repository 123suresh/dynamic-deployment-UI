import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import ResponsiveAppBar from "../page/header/header";

function PrivateRoute() {
  const token = useSelector((state)=> state.Auth.token)

  return (
    <div>
      {token ? (
        <>
          <ResponsiveAppBar />
          <Outlet />
        </>
      ) : (
        <Navigate to="/" />
      )}
    </div>
  );
}

export default PrivateRoute;
