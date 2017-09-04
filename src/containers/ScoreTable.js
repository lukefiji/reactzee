import React, { Component } from "react";
import { connect } from "react-redux";

import ScoreRow from "../components/ScoreRow";

class ScoreTable extends Component {
  render() {
    const { scores } = this.props;
    return (
      <table>
        <tr>
          <th>Name</th>
          <th>Value</th>
        </tr>
        <ScoreRow name="Aces" value={scores.aces} />
        <ScoreRow name="Twos" value={scores.twos} />
        <ScoreRow name="Threes" value={scores.threes} />
        <ScoreRow name="Fours" value={scores.fours} />
        <ScoreRow name="Fives" value={scores.fives} />
        <ScoreRow name="Sixes" value={scores.sixes} />
        <ScoreRow name="Upper Bonus" value={scores.upperBonus} />
        <ScoreRow name="Three of a Kind" value={scores.threeOfAKind} />
        <ScoreRow name="Four of a Kind" value={scores.fourOfAKind} />
        <ScoreRow name="Full House" value={scores.fullHouse} />
        <ScoreRow name="Small Straight" value={scores.smallStraight} />
        <ScoreRow name="Large Straight" value={scores.largeStraight} />
        <ScoreRow name="Yahtzee" value={scores.yahtzee} />
        <ScoreRow name="Chance" value={scores.chance} />
      </table>
    );
  }
}

function mapStateToProps(state) {
  return {
    scores: state.scoreSheet
  };
}

export default connect(mapStateToProps, null)(ScoreTable);
