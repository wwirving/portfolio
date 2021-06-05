import React from "react";
import styles from "./ArchiveBlock.module.scss";

const ArchiveBlock = () => {
  return (
    <div className={styles.textContainer}>
      <p className={styles.title}>ARCHIVE</p>
      <ul>
        <li>Yuki Ame</li>
        <li>Live</li>
      </ul>
    </div>
  );
};

export default ArchiveBlock;