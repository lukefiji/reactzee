import React, { Component } from "react";
import { connect } from "react-redux";

import Die from "../components/Die";

import { toggleDie } from "../actions";

class PlayerDice extends Component {
  render() {
    const { playerDice } = this.props;

    return (
      <div>
        {playerDice.map((die, i) => {
          return (
            <div key={i} onClick={() => this.props.toggleDie(i)}>
              <Die number={die.value} frozen={die.frozen} />
            </div>
          );
        })}
      </div>
    );
    // return this.props.playerDice.map((dieValue, i) => {
    //   return (
    //     <div key="i">
    //       {dieValue}
    //     </div>
    //   );
    // });
  }
}

// Allow access to playerDice in state
const mapStateToProps = state => {
  return { playerDice: state.playerDice };
};

export default connect(mapStateToProps, { toggleDie })(PlayerDice);
