import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import CashGames from "./CashGames";
import SpringSeries from "./SpringSeries";
import FinalStage from "./FinalStage";
import Nav from "./Nav";

export default function Body() {
  return (
    <HashRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<CashGames />} />
        <Route path="springseries" element={<SpringSeries />} />
        <Route path="finalstage" element={<FinalStage />} />
      </Routes>
    </HashRouter>
  );
}
