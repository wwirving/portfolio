import React from "react";
import styles from "./ArchiveBlock.module.scss";

const ArchiveBlock = () => {
  return (
    <div className={styles.textContainer}>
      <p className={styles.title}>Archive</p>
      <ul>
        <li>Live</li>
        <li>Patches</li>
      </ul>
    </div>
  );
};

export default ArchiveBlock;
