import { ROLL_DICE } from "../actions/actionTypes";

function scoreSheet(state = {}, action) {
  switch (action.type) {
    case ROLL_DICE:
      const { rolledDice } = action;
      console.log(rolledDice);
      return state;
    default:
      return state;
  }
}

export default scoreSheet;

