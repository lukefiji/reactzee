import React, { Component } from "react";
import { connect } from "react-redux";

import { freezeScore } from "../actions";

import ScoreRow from "../components/ScoreRow";

class ScoreTable extends Component {
  render() {
    const { scores, freezeScore } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <ScoreRow
            name="Aces"
            scoreItem="aces"
            value={scores.aces.value}
            frozen={scores.aces.frozen}
            onScoreClick={freezeScore}
          />
          <ScoreRow
            name="Twos"
            scoreItem="twos"
            value={scores.twos.value}
            frozen={scores.twos.frozen}
            onScoreClick={freezeScore}
          />
          <ScoreRow
            name="Threes"
            scoreItem="threes"
            value={scores.threes.value}
            frozen={scores.threes.frozen}
            onScoreClick={freezeScore}
          />
          <ScoreRow
            name="Fours"
            scoreItem="fours"
            value={scores.fours.value}
            frozen={scores.fours.frozen}
            onScoreClick={freezeScore}
          />
          <ScoreRow
            name="Fives"
            scoreItem="fives"
            value={scores.fives.value}
            frozen={scores.fives.frozen}
            onScoreClick={freezeScore}
          />
          <ScoreRow
            name="Sixes"
            scoreItem="sixes"
            value={scores.sixes.value}
            frozen={scores.sixes.frozen}
            onScoreClick={freezeScore}
          />
          <tr>
            <td>Upper Bonus</td>
            <td>{scores.upperBonus.value}</td>
          </tr>
          <ScoreRow
            name="Three of a Kind"
            scoreItem="threeOfAKind"
            value={scores.threeOfAKind.value}
            frozen={scores.threeOfAKind.frozen}
            onScoreClick={freezeScore}
          />
          <ScoreRow
            name="Four of a Kind"
            scoreItem="fourOfAKind"
            value={scores.fourOfAKind.value}
            frozen={scores.fourOfAKind.frozen}
            onScoreClick={freezeScore}
          />
          <ScoreRow
            name="Full House"
            scoreItem="fullHouse"
            value={scores.fullHouse.value}
            frozen={scores.fullHouse.frozen}
            onScoreClick={freezeScore}
          />
          <ScoreRow
            name="Small Straight"
            scoreItem="smallStraight"
            value={scores.smallStraight.value}
            frozen={scores.smallStraight.frozen}
            onScoreClick={freezeScore}
          />
          <ScoreRow
            name="Large Straight"
            scoreItem="largeStraight"
            value={scores.largeStraight.value}
            frozen={scores.largeStraight.frozen}
            onScoreClick={freezeScore}
          />
          <ScoreRow
            name="Yahtzee"
            scoreItem="yahtzee"
            value={scores.yahtzee.value}
            frozen={scores.yahtzee.frozen}
            onScoreClick={freezeScore}
          />
          <ScoreRow
            name="Chance"
            scoreItem="chance"
            value={scores.chance.value}
            frozen={scores.chance.frozen}
            onScoreClick={freezeScore}
          />
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

export default connect(mapStateToProps, { freezeScore })(ScoreTable);
