import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import JobDetail from "../components/JobDetail";
import Mainpage from "../pages/MainPage";
import LoginForm from "../components/LoginForm";
import PostAdd from "../components/PostAdd";
import SignupForm from "../components/SignupForm";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />}>
          <Route path=":id" element={<JobDetail />} />
        </Route>
        <Route path="recruit" element={<PostAdd />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="signup" element={<SignupForm />} />

        <Route path="*" element={<div>404 Error</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
