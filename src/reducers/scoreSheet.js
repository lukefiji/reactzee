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

      // Calculate upper bonus score
      let upperBonus = { ...state.upperBonus };

      const upperBonusScoreItems = [
        "aces",
        "twos",
        "threes",
        "fours",
        "fives",
        "sixes"
      ];

      // If current action is freezing an upper
      // bonus score, include that in the total
      const currentVal = upperBonusScoreItems.includes(scoreItem)
        ? state[scoreItem].value
        : 0;

      // Get total core of all upper bonus items
      const upperBonusScore =
        currentVal +
        upperBonusScoreItems
          .filter(key => state[key].frozen === true)
          .reduce((sum, key) => {
            return sum + state[key].value;
          }, 0);

      // Activate score if upper bonus total is >= 63
      if (upperBonusScore >= 63) {
        upperBonus = { upperBonus: { value: 35 } };
      }

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
