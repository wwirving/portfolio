import React from "react";
import styles from "./Routes.module.scss";
import { Switch, Route, useLocation } from "react-router-dom";

import Home from "../Home";
import Projects from "../Projects";
import AV from "../AV";

const Routes = () => {
  let location = useLocation();

  return (
    <Switch>
      <Route path="/projects">
        <Projects />
      </Route>
      <Route path="/av">
        <AV />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
