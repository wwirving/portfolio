import React from "react";
import styles from "./FramePlayer.module.scss";

const FramePlayer = (props) => {
  const { title, links } = props.project;

  return (
    <div className={styles.mainCont}>
      <div className={styles.header}>
        <p>{title.toUpperCase()}</p>
        <span>X</span>
      </div>
      <div className={styles.frameContainer}>
        <iframe
          src={links.online}
          frameborder="0"
          title="objectCloud"
          allow="autoplay"
        ></iframe>
      </div>
      <div className={styles.footer}>
        <p>INFO</p>
      </div>
    </div>
  );
};

export default FramePlayer;
