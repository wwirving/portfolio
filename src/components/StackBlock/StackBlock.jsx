import React from "react";
import styles from "./StackBlock.module.scss";
import stacks from "../../data/stacks";

const StackBlock = () => {
  const getLang = (lang, index) => <li key={"lang" + index}>{lang}</li>;

  const getSoft = (soft, index) => <li key={"soft" + index}>{soft}</li>;

  const getFram = (fram, index) => <li key={"fram" + index}>{fram}</li>;

  const getSkill = (skills, index) => <li key={"skill" + index}>{skills}</li>;

  return (
    <div className={styles.stackBlock}>
      <p className={styles.title}>STACK</p>
      <div className={styles.textContainer}>
        <ul>
          {stacks[0].languages.map(getLang)}
          {stacks[0].software.map(getSoft)}
        </ul>
        <ul className={styles.tags}>
          {stacks[0].frameworks.map(getFram)}
          {stacks[0].skills.map(getSkill)}
        </ul>
      </div>
    </div>
  );
};

export default StackBlock;
