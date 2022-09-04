import React from "react";
import ReactDOM from "react-dom/client";
import "./dist/output.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Client from "./components/Client";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <About />
    <Portfolio />
    <Client />
    <Footer />
  </React.StrictMode>
);
