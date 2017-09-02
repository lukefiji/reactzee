import { combineReducers } from "redux";

// Importing reducer slices
import playerDice from "./playerDice";
import gameState from "./gameState";
import scoreSheet from "./scoreSheet";

const rootReducer = combineReducers({
  playerDice,
  gameState,
  scoreSheet
});

export default rootReducer;
