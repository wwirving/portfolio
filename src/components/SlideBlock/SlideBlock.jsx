import React from "react";
import styles from "./SlideBlock.module.scss";
import { getID } from "../../assets/functions/functions";

const SlideBlock = (props) => {
  const { mainImg } = props.project;

  return (
    <div className={styles.imgCont}>
      <img src={getID(mainImg)} alt="oh no"></img>
    </div>
  );
};

export default SlideBlock;
