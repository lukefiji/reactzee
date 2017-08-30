import React, { Component } from "react";
import { connect } from "react-redux";

import Die from "../components/Die";

class PlayerDice extends Component {
  render() {
    const { playerDice } = this.props;

    return (
      <div>
        {playerDice.map((dieNumber, i) => {
          return <Die number={dieNumber} key={i} />;
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

export default connect(mapStateToProps, null)(PlayerDice);
