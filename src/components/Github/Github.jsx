import React, { useEffect } from "react";
import styles from "./Github.module.scss";

const Github = (props) => {

  useEffect(() => {
    window.location.href = `${props.id}`
  }, []);
 
  return (
    <div>
      <p>Link Here</p>
    </div>
  );
};

export default Github;
