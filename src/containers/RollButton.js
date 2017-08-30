import React, { Component } from "react";
import { connect } from "react-redux";
import { rollDice } from "../actions";

class RollButton extends Component {
  render() {
    return <button onClick={this.props.rollDice}>Roll</button>;
  }
}

export default connect(null, { rollDice })(RollButton);
