import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link
} from "react-router-dom";

import Home from "./route/Home.js"
import About from "./route/About"
import Work from "./route/Work"
import Header from "./layouts/Header"
import Footer from "./layouts/Footer"

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Work" element={<Work />} />
          <Route path="/Resume" element={<Home />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
