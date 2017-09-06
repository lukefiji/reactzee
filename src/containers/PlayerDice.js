import React, { Component } from "react";
import { connect } from "react-redux";

import Die from "../components/Die";

import { toggleDie } from "../actions";

class PlayerDice extends Component {
  render() {
    const { playerDice, toggleDie, turnsRemaining } = this.props;

    return (
      <div>
        {playerDice.map((die, i) => {
          return (
            <Die
              key={i}
              onClick={() => toggleDie(i)}
              turnsRemaining={turnsRemaining}
              number={die.value}
              frozen={die.frozen}
            />
          );
        })}
      </div>
    );
  }
}

// Allow access to playerDice in state
const mapStateToProps = state => {
  return {
    playerDice: state.playerDice,
    turnsRemaining: state.gameState.turnsRemaining
  };
};

export default connect(mapStateToProps, { toggleDie })(PlayerDice);
