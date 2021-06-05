import React from "react";
import styles from "./Slides.module.scss";
import projects from "../../data/projects";
import SlideBlock from "../SlideBlock/SlideBlock";

const Slides = () => {
  return (
    <div className={styles.slidesContainer}>
      <SlideBlock project={projects[0]}></SlideBlock>
      <SlideBlock project={projects[1]}></SlideBlock>
      <SlideBlock project={projects[2]}></SlideBlock>
      <SlideBlock project={projects[3]}></SlideBlock>
      <SlideBlock project={projects[6]}></SlideBlock>
    </div>
  );
};

export default Slides;
