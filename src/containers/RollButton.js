import React, { Component } from "react";
import { connect } from "react-redux";
import { rollDice } from "../actions";

class RollButton extends Component {
  render() {
    return (
      <button
        className="button button__roll"
        onClick={() => this.props.rollDice(this.props.currentDice)}
      >
        Roll
      </button>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentDice: state.playerDice,
    rollsRemaining: state.gameState.rollsRemaining
  };
}

export default connect(mapStateToProps, { rollDice })(RollButton);
