import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../views/Home";
import Portfolio from "../views/Portfolio";
import Skills from "../views/Skills";
import About from "../views/About";
import Contact from "../views/Contact";

const SiteRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>
        <Route exact path="/skills">
          <Skills />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default SiteRouter;
