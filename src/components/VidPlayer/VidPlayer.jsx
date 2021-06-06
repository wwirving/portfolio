import React from "react";
import ReactPlayer from "react-player";
import styles from "./VidPlayer.module.scss";

const VidPlayer = (props) => {
  const { title, links } = props.project;

  return (
    <div className={styles.mainCont}>
      <div className={styles.header}>
        <p>{title}</p>
        <span id="close">X</span>
      </div>
      <div className={styles.frameContainer}>
        <ReactPlayer
          url="https://player.vimeo.com/video/507461364"
          width="95%"
          height="95%"
          controls={false}
          playing={true}
          volume={1}
          muted={true}
        />
      </div>
      <div className={styles.footer}>
        <p>Info</p>
      </div>
    </div>
  );
};

export default VidPlayer;
