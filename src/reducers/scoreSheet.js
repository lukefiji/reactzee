import { ROLL_DICE } from "../actions/actionTypes";
import calculateScoreSheet from "../helpers/calculateScoreSheet";

function scoreSheet(state = {}, action) {
  switch (action.type) {
    case ROLL_DICE:
      const { rolledDice } = action;
      const scores = calculateScoreSheet(rolledDice);
      console.log(scores);
      return { ...state, ...scores };
    default:
      return state;
  }
}

export default scoreSheet;
