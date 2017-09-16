import React, { Component } from "react";
import { connect } from "react-redux";

import { startNewGame } from "../actions";

class RollButton extends Component {
  render() {
    return (
      <button
        className="button button__new-game"
        onClick={this.props.startNewGame}
      >
        New Game
      </button>
    );
  }
}

export default connect(undefined, { startNewGame })(RollButton);
