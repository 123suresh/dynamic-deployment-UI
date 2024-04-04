import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import MovieDetail from "../dashboard/MovieDetail";
import MovieList from "../page/dashboard/MovieList";
import PageNotFound from "../page/dashboard/PageNotFound";
// import WatchList from "../dashboard/WatchList";
import Login from "../page/login/Login";
import PrivateRoute from "./PrivateRouting";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/movieList" element={<MovieList />} />
          {/* <Route path="/movie/:movieId" element={<MovieDetail />} />
          <Route path="/watchList" element={<WatchList />} /> */}
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default Routing;
