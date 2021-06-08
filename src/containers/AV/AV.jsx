import React from "react";
import styles from "./AV.module.scss";
import { useRouteMatch, Switch, Route } from "react-router-dom";
import Piece from "../Piece";

const AV = () => {
  let match = useRouteMatch();
  return (
    <>
      <Switch>
        <Route path={`${match.path}/:pieceId`}>
          <Piece />
        </Route>
      </Switch>
    </>
  );
};

export default AV;
