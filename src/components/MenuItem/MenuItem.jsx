import React from "react";
import styles from "./MenuItem.module.scss";

const MenuItem = (props) => {
  return (
    <div className={styles.textBox}>
      <p className={styles.title}>{props.title}</p>
      <a href={props.href}>
        <p className={styles.tags}>{props.content}</p>
      </a>
    </div>
  );
};

export default MenuItem;
