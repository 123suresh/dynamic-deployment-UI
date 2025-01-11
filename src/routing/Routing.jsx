import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailPage from "../page/dashboard/detailPage";
import AwardPage from "../page/dashboard/awardsPage";
import HomePage from "../page/dashboard/homePage";
import PageNotFound from "../page/dashboard/PageNotFound";
import Login from "../page/login/Login";
import PrivateRoute from "./PrivateRouting";
import PressPage from "../page/dashboard/pressPage";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<HomePage />} />
          {/* <Route path="/movie/:movieId" element={<MovieDetail />} /> */}
          <Route path="/detail" element={<DetailPage />} />
          <Route path="/awards" element={<AwardPage />} />
          <Route path="/press" element={<PressPage />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default Routing;
