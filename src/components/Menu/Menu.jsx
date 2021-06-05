import React from "react";
import styles from "./Menu.module.scss";
import Header from "../Header/Header";
import ProjectBlock from "../ProjectBlock/ProjectBlock";
import StackBlock from "../StackBlock/StackBlock";
import MenuBlock from "../MenuBlock/MenuBlock";
import SocialBlock from "../SocialBlock/SocialBlock";
import ArchiveBlock from "../ArchiveBlock/ArchiveBlock";
import SlideBlockMobile from "../SlideBlockMobile/SlideBlockMobile";
import projects from "../../data/projects";

const Menu = () => {
  return (
    <div className={styles.menuContainer}>
      <Header></Header>
      <div className={styles.line}></div>
      <ProjectBlock></ProjectBlock>
      <div className={styles.line}></div>
      {/* <StackBlock></StackBlock>
      <div className={styles.line}></div> */}
      <MenuBlock title="About" content="Read More . . ." href=""></MenuBlock>
      <div className={styles.line}></div>
      <MenuBlock
        title="Contact"
        content="wjnirving@gmail.com"
        href="mailto:wjnirving@gmail.com"
      ></MenuBlock>
      <div className={styles.line}></div>
      <SocialBlock></SocialBlock>
      <div className={styles.line}></div>
      <ArchiveBlock></ArchiveBlock>
      <div className={styles.line}></div>
      <MenuBlock
        title="Newsletter"
        content="Click here"
        href="https://mailchi.mp/1395080e3111/will-irving-updates"
      ></MenuBlock>
      <SlideBlockMobile
        project={projects[0]}
        className={styles.hide}
      ></SlideBlockMobile>
      <SlideBlockMobile
        project={projects[3]}
        className={styles.hide}
      ></SlideBlockMobile>
      <SlideBlockMobile
        project={projects[6]}
        className={styles.hide}
      ></SlideBlockMobile>
    </div>
  );
};

export default Menu;
