import React, { Component } from "react";
import { connect } from "react-redux";
import { rollDice } from "../actions";

class RollButton extends Component {
  render() {
    return (
      <div>
        <div>Rolls remaining: {this.props.rollsRemaining}</div>
        <button onClick={() => this.props.rollDice(this.props.currentDice)}>
          Roll
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentDice: state.playerDice,
    rollsRemaining: state.gameState.turnsRemaining
  };
}

export default connect(mapStateToProps, { rollDice })(RollButton);
