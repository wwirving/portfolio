import React from "react";
import styles from "./SlideBlock.module.scss";
import { getID } from "../../assets/functions/functions";

const SlideBlock = (props) => {
  const { mainImg, hoverImg, alt } = props.project;

  return (
    <div className={styles.imgCont}>
      <img src={getID(mainImg)} alt="fuck"></img>
    </div>
  );
};

export default SlideBlock;
