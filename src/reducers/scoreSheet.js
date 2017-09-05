import { ROLL_DICE } from "../actions/actionTypes";
import calculateScoreSheet from "../helpers/calculateScoreSheet";

function scoreSheet(state = {}, action) {
  switch (action.type) {
    case ROLL_DICE:
      const { rolledDice } = action;
      const scoreSheet = calculateScoreSheet(rolledDice);
      // Create new state object to diff
      const updatedScoreSheet = { ...state };
      Object.keys(scoreSheet).forEach(name => {
        updatedScoreSheet[name] = { ...state[name], ...scoreSheet[name] };
      });
      return updatedScoreSheet;
    default:
      return state;
  }
}

export default scoreSheet;
