import { ROLL_DICE, FREEZE_SCORE, END_GAME } from "../actions/actionTypes";

function gameState(state = {}, action) {
  switch (action.type) {
    case ROLL_DICE:
      return {
        ...state,
        rollsRemaining: state.rollsRemaining - 1,
        scoresFrozen: false
      };
    case FREEZE_SCORE:
      return { ...state, rollsRemaining: 3, scoresFrozen: true };
    case END_GAME:
      return {
        ...state,
        rollsRemaining: 0,
        scoresFrozen: true,
        gameFinished: true,
        totalScore: action.totalScore
      };
    default:
      return state;
  }
}

export default gameState;
