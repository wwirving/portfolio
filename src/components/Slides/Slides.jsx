import React from "react";
import styles from "./Slides.module.scss";
import projects from "../../data/projects";
import av from "../../data/av";
import SlideBlock from "../SlideBlock/SlideBlock";
import { Link } from "react-router-dom";

const Slides = () => {
  const getProjectImg = (project, index) => (
    <Link to={"/projects/" + project.title}>
      <SlideBlock
        project={project}
        key={project.idProject + "image" + index}
      ></SlideBlock>
    </Link>
  );

  const getAVImg = (project, index) => (
    <Link to={"/av/" + project.title}>
      <SlideBlock
        project={project}
        key={project.idProject + "image" + index}
      ></SlideBlock>
    </Link>
  );
  return (
    <div className={styles.slidesContainer}>
      {projects.map(getProjectImg)}
      {av.map(getAVImg)}
      {/* <SlideBlock project={projects[0]}></SlideBlock>
      <SlideBlock project={projects[1]}></SlideBlock> */}
    </div>
  );
};

export default Slides;
