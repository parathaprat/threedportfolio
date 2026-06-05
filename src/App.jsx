import React from "react";
import "./index.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Background from "./components/Background";
import MusicToggle from "./components/MusicToggle";

import { Home, About, Projects, Contact } from "./pages";

const App = () => {
  return (
    <main className="relative min-h-screen">
      {/* Global animated starfield + nebula that sits behind every page */}
      <Background />

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>

      {/* Persistent ambient-music control (survives route changes) */}
      <MusicToggle />
    </main>
  );
};

export default App;
