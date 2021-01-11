import React from "react";
import ReactPageScroller from "react-page-scroller";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Skills from "./Skills";

const Combine = () => {
  return (
    <ReactPageScroller>
      <Home />
      <About />
      <Contact />
      <Portfolio />
      <Skills />
    </ReactPageScroller>
  );
};

export default Combine;
