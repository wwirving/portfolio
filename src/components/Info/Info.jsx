import React from "react";
import styles from "./Info.module.scss";
import { Link } from "react-router-dom";

const Info = (props) => {
  const { title, description, links} = props.project

  const link = "/github"

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
        <Link to={`/github/${title}`}>
          Github
        </Link>
      </div>
    </div>
     
    </>
  );
};

export default Info;
