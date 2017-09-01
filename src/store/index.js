import { createStore } from "redux";

import rootReducer from "../reducers";

const initialState = {
  playerDice: [
    { frozen: false, value: 0 },
    { frozen: false, value: 0 },
    { frozen: false, value: 0 },
    { frozen: false, value: 0 },
    { frozen: false, value: 0 }
  ]
};

// Create a store from the root reducer
let store = createStore(rootReducer, initialState);

export default store;
