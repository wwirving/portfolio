import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./containers/Routes";
import styles from "./App.module.scss";
import Background from "./components/Background";
import Menu from "./components/Menu/Menu";
import Slides from "./components/Slides/Slides";
import FramePlayer from "./components/FramePlayer/FramePlayer";
import VidPlayer from "./components/VidPlayer/VidPlayer";
import projects from "./data/projects";
import StartButton from "./components/StartButton/StartButton";

const App = () => {
  return (
    <Router>
      <Background></Background>
      <Routes />
    </Router>
    // <>
    //   <div className={styles.mainContainer}>
    //     <Menu className={styles.mainmenu}></Menu>
    //     <Slides className={styles.slides}></Slides>
    //   </div>
    //   <div className={styles.projectPlayer}>
    //     <FramePlayer
    //       className={styles.frame}
    //       project={projects[0]}
    //     ></FramePlayer>
    //   </div>
    //   <div className={styles.vidPlayer}>
    //     <VidPlayer className={styles.frame} project={projects[6]}></VidPlayer>
    //   </div>
    //   <Background className={styles.background} />
    // </>
  );
};

export default App;
