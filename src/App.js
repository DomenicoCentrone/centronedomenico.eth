
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link
} from "react-router-dom";

import Home from "./route/Home.js"
import Sample from "./route/Sample.js"
import Header from "./layouts/Header"
import Footer from "./layouts/Footer"

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sample" element={<Sample />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
