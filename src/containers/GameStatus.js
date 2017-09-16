import React, { Component } from "react";
import { connect } from "react-redux";

class GameStatus extends Component {
  render() {
    return <div>Rolls Remaining: {this.props.rollsRemaining}</div>;
  }
}

function mapStateToProps(state) {
  return {
    rollsRemaining: state.gameState.rollsRemaining
  };
}

export default connect(mapStateToProps, undefined)(GameStatus);
