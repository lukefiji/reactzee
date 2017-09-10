import { ROLL_DICE, FREEZE_SCORE } from "../actions/actionTypes";
import calculateScoreSheet from "../helpers/calculateScoreSheet";
import diffScores from "../helpers/diffScores";

function scoreSheet(state = {}, action) {
  switch (action.type) {
    case ROLL_DICE:
      const { rolledDice } = action;

      // Calculate all scores on table
      const scoreSheet = calculateScoreSheet(rolledDice);

      // Create new state object to diff
      const updatedScoreSheet = {
        ...state
      };

      // Diff scores to null out certain scores
      const diffedScores = diffScores(scoreSheet, updatedScoreSheet);

      Object.keys(scoreSheet).forEach(name => {
        // Update only if value isn't already frozen
        if (!updatedScoreSheet[name].frozen) {
          updatedScoreSheet[name] = {
            ...state[name],
            ...diffedScores[name]
          };
        }
      });

      return updatedScoreSheet;
    case FREEZE_SCORE:
      const { scoreItem } = action;
      const { aces, twos, threes, fours, fives, sixes } = state;

      // Calculate upper bonus score
      let upperBonus = { ...state[upperBonus] };
      const upperBonusScore = aces + twos + threes + fours + fives + sixes;
      if (upperBonusScore >= 63) upperBonus = { value: 35 };

      // Return new state with frozen die
      return {
        ...state,
        ...upperBonus,
        [scoreItem]: {
          ...state[scoreItem],
          frozen: true
        }
      };
    default:
      return state;
  }
}

export default scoreSheet;
