import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import rootReducer from "../reducers";

import { loadState, saveState } from "./localStorage";
import newGameState from "./newGameState";

// Load saved state
const savedState = loadState();

const initialState = savedState ? savedState : newGameState;

// Create a store from the root reducer

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

// Subscribe saveState to score
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
