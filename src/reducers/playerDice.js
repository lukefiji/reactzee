import { ROLL_DICE } from "../actions/actionTypes";

const initialState = [0, 0, 0, 0, 0];

function playerDice(state = initialState, action) {
  switch (action.type) {
    case ROLL_DICE:
      // Return an array of newly rolled dice
      return action.rolledDice;
    default:
      return state;
  }
}

export default playerDice;
