import React, { Component } from "react";
import { connect } from "react-redux";

class PlayerDice extends Component {
  render() {
    return (
      <div>
        {this.props.playerDice}
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
