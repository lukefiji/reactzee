import { combineReducers } from "redux";

import { NEW_GAME } from "../actions/actionTypes";

import newGameState from "../store/newGameState";

// Importing reducer slices
import playerDice from "./playerDice";
import gameState from "./gameState";
import scoreSheet from "./scoreSheet";

const appReducer = combineReducers({
  playerDice,
  gameState,
  scoreSheet
});

const rootReducer = (state, action) => {
  // Starting a new game
  if (action.type === NEW_GAME) {
    // Load new game state
    state = newGameState;
  }

  // Delegate state and actions to combined reducers
  return appReducer(state, action);
};

export default rootReducer;
