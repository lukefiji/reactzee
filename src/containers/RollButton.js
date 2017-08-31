import React, { Component } from "react";
import { connect } from "react-redux";
import { rollDice } from "../actions";

class RollButton extends Component {
  render() {
    return (
      <button onClick={() => this.props.rollDice(this.props.currentDice)}>
        Roll
      </button>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentDice: state.playerDice
  };
}

export default connect(mapStateToProps, { rollDice })(RollButton);
