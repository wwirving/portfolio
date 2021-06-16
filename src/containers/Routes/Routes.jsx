import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Home from "../Home";
import Projects from "../Projects";

const Routes = () => {
  let location = useLocation();

  return (
    <Switch>
      <Route path="/projects">
        <Projects />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
