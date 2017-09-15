import React, { Component } from "react";
import { connect } from "react-redux";

import Die from "../components/Die";

import { toggleDie } from "../actions";

class PlayerDice extends Component {
  render() {
    const { playerDice, toggleDie, rollsRemaining } = this.props;

    return (
      <div className="dice">
        {playerDice.map((die, i) => {
          return (
            <Die
              key={i}
              onClick={() => toggleDie(i)}
              rollsRemaining={rollsRemaining}
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
    rollsRemaining: state.gameState.rollsRemaining
  };
};

export default connect(mapStateToProps, { toggleDie })(PlayerDice);
