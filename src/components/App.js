import React, { Component } from "react";

import PlayerDice from "../containers/PlayerDice";
import RollButton from "../containers/RollButton";
import ScoreTable from "../containers/ScoreTable";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Reactzee</h2>
        </div>
        <div className="App-intro">
          <PlayerDice />
          <RollButton />
          <ScoreTable />
        </div>
      </div>
    );
  }
}

export default App;
