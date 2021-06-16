import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./containers/Routes";
import styles from "./App.module.scss";
import Background from "./components/Background";


const App = () => {
  return (
    <Router>
      <Background></Background>
      <Routes />
    </Router>
  );
};

export default App;
