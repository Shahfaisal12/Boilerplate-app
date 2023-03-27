import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Base from "../layout/Base";

const RoutesPage = () => {
  return (
    <div>
      <BrowserRouter>
        <Base>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Base>
      </BrowserRouter>
    </div>
  );
};

export default RoutesPage;
