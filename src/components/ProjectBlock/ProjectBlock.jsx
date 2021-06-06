import React from "react";
import styles from "./ProjectBlock.module.scss";
import projects from "../../data/projects";

const ProjectBlock = () => {
  const getProjectTitle = (project, index) => (
    <li key={project.idProject + "title" + index}>~ {project.title}</li>
  );

  // const getProjectTags = (project, index) => (
  //   <li key={project.idProject + "tag" + index}>{project.tags.join(", ")}</li>
  // );

  return (
    <div className={styles.projectBlock}>
      <p className={styles.title}>Projects</p>
      <div className={styles.textContainer}>
        <ul>{projects.map(getProjectTitle)}</ul>
      </div>
    </div>
  );
};

export default ProjectBlock;
