import React from "react";
import { Navbar } from "../Components/ui/Navbar";
import { Routes, Route } from "react-router-dom";
import MarvelScreen from "../Components/marvel/MarvelScreen";
import DcScreen from "../Components/dc/DcScreen";
import SearchScreen from "../Components/search/SearchScreen";
import HeroesScreen from "../Components/heroes/HeroesScreen";

const DhashboardRouter = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <Routes>
          <Route path="marvel" element={<MarvelScreen />} />
          <Route path="dc" element={<DcScreen />} />
          <Route path="search" element={<SearchScreen />} />
          <Route path="hero/:heroId" element={<HeroesScreen />} />
          <Route path="/" element={<MarvelScreen />} />
        </Routes>
      </div>
    </>
  );
};

export default DhashboardRouter;
