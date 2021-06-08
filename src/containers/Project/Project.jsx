import React from "react";
import styles from "./Project.module.scss";
import { useParams, useLocation } from "react-router-dom";
import FramePlayer from "../../components/FramePlayer";
import projects from "../../data/projects.js";

const Project = () => {
  let { projectId } = useParams();

  let filteredProjects = projects.filter((obj) => {
    return obj.title === projectId;
  });

  return (
    <>
      <div className={styles.projectPlayer}>
        <FramePlayer className={styles.frame} project={filteredProjects[0]} />
      </div>
    </>
  );
};

export default Project;
