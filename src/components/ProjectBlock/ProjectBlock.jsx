import React from "react";
import styles from "./ProjectBlock.module.scss";
import projects from "../../data/projects";
import av from "../../data/av";
import { Link } from "react-router-dom";

const ProjectBlock = () => {
  const getProjectTitle = (project, index) => (
    <li key={project.idProject + "title" + index}>
      <Link to={"/projects/" + project.title} className={styles.link}>
        {project.title}
      </Link>
    </li>
  );

  const getAVTitle = (project, index) => (
    <li key={project.idProject + "title" + index}>
      <Link to={"/av/" + project.title} className={styles.av}>
        {project.title}
      </Link>
    </li>
  );

  // const getProjectTags = (project, index) => (
  //   <li key={project.idProject + "tag" + index}>{project.tags.join(", ")}</li>
  // );

  return (
    <div className={styles.projectBlock}>
      <p className={styles.title}>Projects</p>
      <div className={styles.textContainer}>
        <ul className={styles.left}>{projects.map(getProjectTitle)}</ul>
        <ul className={styles.right}>{av.map(getAVTitle)}</ul>
      </div>
    </div>
  );
};

export default ProjectBlock;
