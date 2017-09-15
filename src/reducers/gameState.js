import { ROLL_DICE, FREEZE_SCORE } from "../actions/actionTypes";

function gameState(state = {}, action) {
  switch (action.type) {
    case ROLL_DICE:
      return {
        ...state,
        rollsRemaining: state.rollsRemaining - 1,
        scoreFrozen: false
      };
    case FREEZE_SCORE:
      return { ...state, rollsRemaining: 3, scoreFrozen: true };
    default:
      return state;
  }
}

export default gameState;
