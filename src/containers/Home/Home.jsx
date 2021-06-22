import React, { useState, useEffect } from "react";
import Menu from "../../components/Menu";
import Slides from "../../components/Slides";
import styles from "./Home.module.scss";

const Home = () => {
const [ animate, setAnimate ] = useState(true);

const didMount = () => {
  if (window.sessionStorage.getItem('firstLoadDone') === null){
    setAnimate(true);
    window.sessionStorage.setItem("firstLoadDone", 1);
  } else {
    setAnimate(false);
  }
}

useEffect(() => {
  console.log(window.sessionStorage.getItem('firstLoadDone'));
  didMount();
},[])
  return (
    <div className={animate ? styles.mainContainerFade : styles.mainContainer}>
      <Menu className={styles.mainmenu}></Menu>
      <Slides className={styles.slides}></Slides>
    </div>
  );
};

export default Home;
