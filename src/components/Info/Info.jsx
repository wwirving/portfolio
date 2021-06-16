import React from "react";
import styles from "./Info.module.scss";

const Info = (props) => {
  const { title, description, links} = props.project

  const showInfo = props.info ? styles.infoContainer : styles.invisible;

  return (
    <>
    <div className={showInfo}>
      <div className={styles.sticky}>
      <div className = {styles.header}>
        <p>{title}</p>
        <span onClick={props.toggle}>X</span>
      </div>
      <div className={styles.line}></div>
      </div>
      <div className={styles.textBlock}>
        {description}
      </div>
      <div className={styles.links}>
        <p>Links</p>
        <a href="www.google.com" target="_blank">Github
          </a>
          <a href={links[2]} target="_blank">
          Figma</a>
      </div>
    </div>
     
    </>
  );
};

export default Info;
