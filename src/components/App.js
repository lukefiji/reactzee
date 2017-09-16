import React, { Component } from "react";

import PlayerDice from "../containers/PlayerDice";
import GameStatus from "../containers/GameStatus";
import RollButton from "../containers/RollButton";
import NewGameButton from "../containers/NewGameButton";
import ScoreTable from "../containers/ScoreTable";

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app__header">
          <h2>Reactzee</h2>
        </div>
        <div className="app_body">
          <PlayerDice />
          <GameStatus />
          <RollButton />
          <NewGameButton />
          <ScoreTable />
        </div>
      </div>
    );
  }
}

export default App;
