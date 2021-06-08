import React from "react";
import styles from "./Projects.module.scss";
import { useRouteMatch, Switch, Route, useLocation } from "react-router-dom";
import Project from "../Project";

const Projects = () => {
  let match = useRouteMatch();

  return (
    <>
      <Switch>
        <Route path={`${match.path}/:projectId`}>
          <Project />
        </Route>
      </Switch>
    </>
  );
};

export default Projects;
