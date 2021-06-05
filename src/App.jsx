import React from "react";
import styles from "./App.module.scss";
import Background from "./components/Background";
import Menu from "./components/Menu/Menu";
import Slides from "./components/Slides/Slides";
import FramePlayer from "./components/FramePlayer/FramePlayer";
import projects from "./data/projects";

const App = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <Menu className={styles.mainmenu}></Menu>
        <Slides className={styles.slides}></Slides>
      </div>
      <div className={styles.projectPlayer}>
        <FramePlayer
          className={styles.frame}
          project={projects[0]}
        ></FramePlayer>
      </div>
      <Background className={styles.background} />
    </>
  );
};

export default App;
