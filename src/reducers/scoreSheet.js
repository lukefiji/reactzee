import { ROLL_DICE, FREEZE_SCORE } from "../actions/actionTypes";
import calculateScoreSheet from "../helpers/calculateScoreSheet";

function scoreSheet(state = {}, action) {
  switch (action.type) {
    case ROLL_DICE:
      const { rolledDice } = action;
      const scoreSheet = calculateScoreSheet(rolledDice);
      // Create new state object to diff
      const updatedScoreSheet = { ...state };
      Object.keys(scoreSheet).forEach(name => {
        // Update only if value isn't already frozen
        if (!updatedScoreSheet[name].frozen) {
          updatedScoreSheet[name] = { ...state[name], ...scoreSheet[name] };
        }
      });
      return updatedScoreSheet;
    case FREEZE_SCORE:
      const { scoreItem } = action;
      // Return new state with frozen die
      return {
        ...state,
        [scoreItem]: { ...state[scoreItem], frozen: true }
      };
    default:
      return state;
  }
}

export default scoreSheet;
