import { ROLL_DICE } from "../actions/actionTypes";

function gameState(state = {}, action) {
  switch (action.type) {
    case ROLL_DICE:
      // Subtract 1 from turnsRemaining
      return { ...state, turnsRemaining: state.turnsRemaining - 1 };
    default:
      return state;
  }
}

export default gameState;
