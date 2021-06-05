import React from "react";
import styles from "./MenuBlock.module.scss";

const MenuBlock = (props) => {
  return (
    <div className={styles.textBox}>
      <p className={styles.title}>{props.title}</p>
      <a href={props.href}>
        <p className={styles.tags}>{props.content}</p>
      </a>
    </div>
  );
};

export default MenuBlock;
