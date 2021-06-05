import React from "react";
import styles from "./SocialBlock.module.scss";

const SocialBlock = () => {
  return (
    <div className={styles.textContainer}>
      <p className={styles.title}>Social</p>
      <ul>
        <li>
          <a href="https://www.instagram.com/wwirving/">Instagram</a>
        </li>
        <li>
          <a href="https://github.com/wwirving">Github</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/will-irving/">Linkedin</a>
        </li>
      </ul>
    </div>
  );
};

export default SocialBlock;
