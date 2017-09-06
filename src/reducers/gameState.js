import { ROLL_DICE, FREEZE_SCORE } from "../actions/actionTypes";

function gameState(state = {}, action) {
  switch (action.type) {
    case ROLL_DICE:
      return { ...state, turnsRemaining: state.turnsRemaining - 1 };
    case FREEZE_SCORE:
      return { ...state, turnsRemaining: 3 };
    default:
      return state;
  }
}

export default gameState;
