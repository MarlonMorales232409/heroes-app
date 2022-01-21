import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Components/login/Login";
import DhashboardRouter from "./DhashboardRouter";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<DhashboardRouter />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
