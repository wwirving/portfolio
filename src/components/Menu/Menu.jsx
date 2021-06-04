import React from "react";
import styles from "./Menu.module.scss";
import Header from "../Header/Header";
import ProjectBlock from "../ProjectBlock/ProjectBlock";
import StackBlock from "../StackBlock/StackBlock";
import MenuItem from "../MenuItem/MenuItem";

const Menu = () => {
  return (
    <div className={styles.menuContainer}>
      <Header></Header>
      <div className={styles.line}></div>
      <ProjectBlock></ProjectBlock>
      <div className={styles.line}></div>
      <StackBlock></StackBlock>
      <div className={styles.line}></div>
      <MenuItem title="ABOUT" content="Read More . . ." href=""></MenuItem>
      <div className={styles.line}></div>
      <MenuItem
        title="CONTACT"
        content="wjnirving@gmail.com"
        href="mailto:wjnirving@gmail.com"
      ></MenuItem>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.menuitem}></div>
      <div className={styles.line}></div>
      <MenuItem
        title="NEWSLETTER"
        content="Click here"
        href="https://mailchi.mp/1395080e3111/will-irving-updates"
      ></MenuItem>
    </div>
  );
};

export default Menu;
