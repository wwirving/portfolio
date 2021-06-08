import React from "react";
import ReactPlayer from "react-player";
import styles from "./VidPlayer.module.scss";
import StartButton from "../StartButton/StartButton";
import { Link } from "react-router-dom";

const VidPlayer = (props) => {
  const { title, links } = props.project;

  return (
    <div className={styles.mainCont}>
      <div className={styles.header}>
        <p>{title}</p>
        <span id="close">
          <Link to="/">X</Link>
        </span>
      </div>
      <div className={styles.frameContainer}>
        <StartButton></StartButton>
        <div className={styles.vidContainer}>
          <ReactPlayer
            url={links.online}
            width="95%"
            height="95%"
            controls={false}
            playing={false}
            volume={1}
            muted={true}
          />
        </div>
      </div>
      <div className={styles.footer}>
        <p>Info</p>
      </div>
    </div>
  );
};

export default VidPlayer;
