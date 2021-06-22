import React from "react";
import styles from "./ProjectBlock.module.scss";
import projects from "../../data/projects";
import { Link } from "react-router-dom";

const ProjectBlock = () => {
  const getProjectTitle = (project, index) => (
    <li key={project.idProject + "title" + index}>
      <Link to={"/projects/" + project.title} className={styles.link}>
        {project.menu}
      </Link>
    </li>
  );

  return (
    <div className={styles.projectBlock}>
      <p className={styles.title}>Projects</p>
      <div className={styles.textContainer}>
        <ul className={styles.left}>{projects.map(getProjectTitle)}</ul>
      </div>
    </div>
  );
};

export default ProjectBlock;
