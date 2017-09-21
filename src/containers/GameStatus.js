import React, { Component } from "react";
import { connect } from "react-redux";

class GameStatus extends Component {
  render() {
    return !this.props.gameFinished ? (
      <div>Rolls Remaining: {this.props.rollsRemaining}</div>
    ) : (
      <div>Game Over! Your Score: {this.props.totalScore}</div>
    );
  }
}

function mapStateToProps(state) {
  return {
    rollsRemaining: state.gameState.rollsRemaining,
    gameFinished: state.gameState.gameFinished,
    totalScore: state.gameState.totalScore
  };
}

export default connect(mapStateToProps, undefined)(GameStatus);
