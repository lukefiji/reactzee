import React, { Component } from "react";
import { connect } from "react-redux";

import ScoreRow from "../components/ScoreRow";

class ScoreTable extends Component {
  render() {
    const { scores } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <ScoreRow name="Aces" value={scores.aces.value} />
          <ScoreRow name="Twos" value={scores.twos.value} />
          <ScoreRow name="Threes" value={scores.threes.value} />
          <ScoreRow name="Fours" value={scores.fours.value} />
          <ScoreRow name="Fives" value={scores.fives.value} />
          <ScoreRow name="Sixes" value={scores.sixes.value} />
          <ScoreRow name="Upper Bonus" value={scores.upperBonus.value} />
          <ScoreRow name="Three of a Kind" value={scores.threeOfAKind.value} />
          <ScoreRow name="Four of a Kind" value={scores.fourOfAKind.value} />
          <ScoreRow name="Full House" value={scores.fullHouse.value} />
          <ScoreRow name="Small Straight" value={scores.smallStraight.value} />
          <ScoreRow name="Large Straight" value={scores.largeStraight.value} />
          <ScoreRow name="Yahtzee" value={scores.yahtzee.value} />
          <ScoreRow name="Chance" value={scores.chance.value} />
        </tbody>
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
