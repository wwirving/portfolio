import React from "react";
import { useParams } from "react-router-dom";
import styles from "./Piece.module.scss";
import VidPlayer from "../../components/VidPlayer";
import av from "../../data/av.js";

const Piece = () => {
  let { pieceId } = useParams();

  let filteredPieces = av.filter((obj) => {
    return obj.title === pieceId;
  });

  return (
    <>
      <div className={styles.projectPlayer}>
        <VidPlayer className={styles.frame} project={filteredPieces[0]} />
      </div>
    </>
  );
};

export default Piece;
