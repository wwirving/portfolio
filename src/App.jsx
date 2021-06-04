import React from "react";
import styles from "./App.module.scss";
import Background from "./components/Background";
import Menu from "./components/Menu/Menu";

const App = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <Menu className={styles.mainmenu}></Menu>
        <Background className={styles.background} />
      </div>
    </>
  );
};

export default App;
