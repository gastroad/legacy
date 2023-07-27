import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import { Main } from "./containers/Main";
import { Sub } from "./containers/Sub";
import Ranking from "./containers/Ranking";

import "./index.css";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div style={{ width: "100%", height: "100%" }}>
          <Switch>
            <Route exact path="/main" component={Main} />
            <Route exact path="/sub" component={Sub} />
            <Route exact path="/Ranking" component={Ranking} />
            <Redirect to="/main" />
          </Switch>
        </div>
      </Router>
    );
  }
}
