import React, { useState }from "react";
import styles from "./Project.module.scss";
import { useParams, useLocation } from "react-router-dom";
import FramePlayer from "../../components/FramePlayer";
import Info from "../../components/Info"
import projects from "../../data/projects.js";

const Project = () => {
  let { projectId } = useParams();

  let filteredProjects = projects.filter((obj) => {
    return obj.title === projectId;
  });

  const [ info, setInfo] = useState(false);

  const toggleInfo = () => {
    setInfo(!info);
  }

  return (
    <>
      <div className={info}>
        <Info project={filteredProjects[0]} toggle={toggleInfo} info={info}/>
        <FramePlayer className={styles.frame} project={filteredProjects[0]} toggle={toggleInfo} />
      </div>
    </>
  );
};

export default Project;
