import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "../reducers";

const initialState = {
  playerDice: [
    { frozen: false, value: 0 },
    { frozen: false, value: 0 },
    { frozen: false, value: 0 },
    { frozen: false, value: 0 },
    { frozen: false, value: 0 }
  ],
  gameState: { turnsRemaining: 3 },
  scoreSheet: {
    aces: null,
    twos: null,
    threes: null,
    fours: null,
    fives: null,
    sixes: null,
    upperBonus: null,
    threeOfAKind: null,
    fourOfAKind: null,
    fullHouse: null,
    smallStraight: null,
    largeStraight: null,
    yahtzee: null,
    chance: null
  }
};

// Create a store from the root reducer
let store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
