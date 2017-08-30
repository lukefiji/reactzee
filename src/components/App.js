import React, { Component } from "react";

import PlayerDice from "../containers/PlayerDice";
import RollButton from "../containers/RollButton";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <PlayerDice />
          <RollButton />
        </div>
      </div>
    );
  }
}

export default App;
