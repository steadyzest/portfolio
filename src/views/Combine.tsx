import React from "react";
import { Container, Grid, Box } from "@material-ui/core";
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
      <Box
        m={3}
        mt={0}
        mb={0}
        style={{
          height: "100vh",
          background: "rgba(245, 245, 245, 0.05)",
          backdropFilter: "blur(20px)",
        }}
      >
        <About />
      </Box>
      <Contact />
      <Portfolio />
      <Skills />
    </ReactPageScroller>
  );
};

export default Combine;
