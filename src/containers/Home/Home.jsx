import React from "react";
import Menu from "../../components/Menu";
import Slides from "../../components/Slides";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.mainContainer}>
      <Menu className={styles.mainmenu}></Menu>
      <Slides className={styles.slides}></Slides>
    </div>
  );
};

export default Home;
