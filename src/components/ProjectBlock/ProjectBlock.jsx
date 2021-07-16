import React from "react";
import styles from "./ProjectBlock.module.scss";
import projects from "../../data/projects";
import { Link } from "react-router-dom";

const ProjectBlock = () => {
  const getProjectTitle = (project, index) => (
    <li key={project.idProject + "title" + index}>
      <Link to={"/projects/" + project.title} className={styles.link}>
        <div>{project.menu}</div>
      </Link>
    </li>
  );

  const getProjectTags = (project, index) => (
    <li key={project.idProject + "title" + index}>
      <Link to={"/projects/" + project.title} className={styles.link}>
        <div className={styles.tag}>
          {project.tags.map((tag) => {
            return <span>{tag} </span>;
          })}
        </div>
      </Link>
    </li>
  );

  return (
    <div className={styles.projectBlock}>
      <p className={styles.title}>Projects</p>
      <div className={styles.textContainer}>
        <ul className={styles.left}>{projects.map(getProjectTitle)}</ul>
        <ul className={styles.right}>{projects.map(getProjectTags)}</ul>
      </div>
    </div>
  );
};

export default ProjectBlock;
