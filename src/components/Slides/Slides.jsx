import React from "react";
import styles from "./Slides.module.scss";
import projects from "../../data/projects";
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


  return (
    <div className={styles.slidesContainer}>
      {projects.map(getProjectImg)}
    </div>
  );
};

export default Slides;
