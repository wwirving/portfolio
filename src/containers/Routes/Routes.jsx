import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Home from "../Home";
import Projects from "../Projects";
import Github from "../../components/Github"
import projects from "../../data/projects"

const Routes = () => {
  let location = useLocation();

  const getExternalLink = (project) => {
    return <Route path={`/github/${project.title}`}>
      <Github id={project.links.github}/>
    </Route>
  }

  return (
    <Switch>
      <Route path="/projects">
        <Projects />
      </Route>
      {projects.map(getExternalLink)}
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
