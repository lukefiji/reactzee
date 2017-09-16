import { combineReducers } from "redux";

import { NEW_GAME } from "../actions/actionTypes";

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
  if (action.type === NEW_GAME) {
    console.log("Starting new game...");
    // state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
