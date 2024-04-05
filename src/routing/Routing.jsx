import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailPage from "../page/dashboard/detailPage";
import HomePage from "../page/dashboard/homePage";
import PageNotFound from "../page/dashboard/PageNotFound";
import Login from "../page/login/Login";
import PrivateRoute from "./PrivateRouting";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<HomePage />} />
          {/* <Route path="/movie/:movieId" element={<MovieDetail />} /> */}
          <Route path="/detail" element={<DetailPage />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default Routing;
