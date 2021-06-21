import React from "react";
import styles from "./Menu.module.scss";
import Header from "../Header/Header";
import ProjectBlock from "../ProjectBlock/ProjectBlock";
import { Link } from "react-router-dom";
import StackBlock from "../StackBlock/StackBlock";
import MenuBlock from "../MenuBlock/MenuBlock";
import SocialBlock from "../SocialBlock/SocialBlock";
import ArchiveBlock from "../ArchiveBlock/ArchiveBlock";
import SlideBlockMobile from "../SlideBlockMobile/SlideBlockMobile";
import About from "../About/About"
import projects from "../../data/projects";

const Menu = () => {

  const getProjectImg = (project, index) => (
    <Link to={"/projects/" + project.title}>
      <SlideBlockMobile
        project={project}
        key={project.idProject + "image" + index}
      ></SlideBlockMobile>
    </Link>
  );

  return (
    <div className={styles.menuContainer}>
      <Header></Header>
      <ProjectBlock></ProjectBlock>
      <div className={styles.line}></div>
      {/* <StackBlock></StackBlock>
      <div className={styles.line}></div> */}
      <About/>
      <div className={styles.line}></div>
      <MenuBlock
        title="Contact"
        content="wjnirving@gmail.com"
        href="mailto:wjnirving@gmail.com"
      ></MenuBlock>
      <div className={styles.line}></div>
      <SocialBlock></SocialBlock>
      <div className={styles.line}></div>
      {/* <ArchiveBlock></ArchiveBlock>
      <div className={styles.line}></div> */}
      {/* <MenuBlock
        title="Newsletter"
        content="Click here"
        href="https://mailchi.mp/1395080e3111/will-irving-updates"
      ></MenuBlock> */}
      {projects.map(getProjectImg)}
    </div>
  );
};

export default Menu;
