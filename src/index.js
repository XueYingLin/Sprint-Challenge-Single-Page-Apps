import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import WelcomePage from "./components/WelcomePage";

ReactDOM.render(
  <Router>
    <Route exact path="/characters">
      <App />
    </Route>
    <Route exact path="/">
      <WelcomePage></WelcomePage>
    </Route>
  </Router>,
  document.getElementById("root")
);
