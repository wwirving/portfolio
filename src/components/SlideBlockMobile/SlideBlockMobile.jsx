import React from "react";
import styles from "./SlideBlockMobile.module.scss";
import { getID } from "../../assets/functions/functions";

const SlideBlockMobile = (props) => {
  const { mainImg } = props.project;

  return (
    <div className={styles.imgCont}>
      <img src={getID(mainImg)} alt="oh no"></img>
    </div>
  );
};

export default SlideBlockMobile;
