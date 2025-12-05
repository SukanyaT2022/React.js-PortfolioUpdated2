import React from "react";
import "./App.css";
import Navigation from "./Component/Navigation";
import Footer from "./Component/Footer";
import Layout from "./Component/Layout";
import { Routes, Route } from "react-router-dom";
import Portfolio from "./Portfolio";
import ReactPortfolio from "./ReactPortfolio";
import Home from "./Home";
import SwiftPortfolio from "./SwiftPortfolio";
import Resume from "./Resume";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import ReactNative from "./ReactNative";
const App = () => {
  return (
    <>
      {/* make react router dom --install npm first */}
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="resume" element={<Resume />} />
          <Route path="aboutme" element={<AboutMe />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="reactportfolio" element={<ReactPortfolio />} />
          <Route path="reactnative" element={<ReactNative />} />
          <Route path="swiftportfolio" element={<SwiftPortfolio />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
