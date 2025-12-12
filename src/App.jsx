import React from "react";
import { Router, Routes, BrowserRouter, Route } from "react-router-dom";
import ParticleComponent from "./Components/particles";
import Home from "./pages/Home";
import BackgroundPricing from "./pages/BackgroundPricing";
import OverlayPricing from "./pages/OverlayPricing";
import ScriptPricing from "./pages/ScriptPricing";
import CodingPricing from "./pages/CodingPricing";
import { AnimatePresence } from "framer-motion";

const App = () => {
  return (
    <div>
      <ParticleComponent></ParticleComponent>
      <AnimatePresence mode="wait">
      <Routes>
         <Route path="/" element={<Home/>}></Route>
        <Route path="/backgroundpricing" element={<BackgroundPricing/>}></Route>
        <Route path="/overlaypricing" element={<OverlayPricing/>}></Route>
        <Route path="/scriptpricing" element={<ScriptPricing/>}></Route>
        <Route path="/codingpricing" element={<CodingPricing/>}></Route>
      </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
