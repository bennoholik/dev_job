import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import JobDetail from "../components/JobDetail";
import Mainpage from "../pages/MainPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />}>
          <Route path=":id" element={<JobDetail />} />
        </Route>

        <Route path="*" element={<div>404 Error</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
