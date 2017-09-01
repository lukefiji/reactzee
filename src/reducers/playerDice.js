import { ROLL_DICE, TOGGLE_DIE } from "../actions/actionTypes";

function playerDice(state = [], action) {
  switch (action.type) {
    case ROLL_DICE:
      // Return an array of newly rolled dice
      return action.rolledDice;
    case TOGGLE_DIE:
      const { index } = action;
      // Toggle frozen state of selected die
      return [
        ...state.slice(0, index),
        { ...state[index], frozen: !state[index].frozen },
        ...state.slice(index + 1)
      ];
    default:
      return state;
  }
}

export default playerDice;
