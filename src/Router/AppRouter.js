import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroesScreen from "../Components/heroes/HeroesScreen";
import Login from "../Components/login/Login";
import { Navbar } from "../Components/ui/Navbar";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<HeroesScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
