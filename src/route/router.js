import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import JobDetail from "../components/JobDetail";
import Mainpage from "../pages/MainPage";
import LoginForm from '../components/PostAdd';
import PostAdd from '../components/PostAdd';
import SignupForm from '../components/SignupForm';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />}>
          <Route path=":id" element={<JobDetail />} />
          <Route path="loginForm" element={<LoginForm />}/>
          <Route path="signupForm" element={<SignupForm />}/>
          <Route path="postAdd" element={<PostAdd />}/>
        </Route>

        <Route path="*" element={<div>404 Error</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
