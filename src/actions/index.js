import {
  ROLL_DICE,
  TOGGLE_DIE,
  FREEZE_SCORE,
  END_GAME,
  NEW_GAME
} from "./actionTypes";

// Roll a new dice
export function rollDice(currentDice) {
  // Utilizing Redux Thunk to get state
  return (dispatch, getState) => {
    // Get gameState.rollsRemaining slice of state
    const { gameState: { rollsRemaining } } = getState();

    // Only dispatch if player has turns left
    if (rollsRemaining > 0) {
      // Generate a new array with 5 rolled dice
      const rolledDice = currentDice.map(die => {
        if (die.frozen) {
          return die;
        }
        // Generate a random value for die
        return { ...die, value: Math.floor(Math.random() * 6) + 1 };
      });

      // Conditional dispatch
      dispatch({
        type: ROLL_DICE,
        rolledDice
      });
    }
  };
}

// Toggle a die's frozen state
export function toggleDie(index) {
  return {
    type: TOGGLE_DIE,
    index
  };
}

// Freeze a score
export function freezeScore(scoreItem) {
  return (dispatch, getState) => {
    // Get gameState.scoreSheet slice of state
    const { scoreSheet, gameState: { scoresFrozen } } = getState();

    // Single out score item
    const item = scoreSheet[scoreItem];

    // Dispatch only if a value exists and it isn't frozen
    if (item.value !== null && !item.frozen && !scoresFrozen) {
      dispatch({
        type: FREEZE_SCORE,
        scoreItem
      });

      if (allValuesFrozen(scoreSheet, scoreItem)) {
        const totalScore = Object.keys(scoreSheet).reduce((sum, key) => {
          return sum + scoreSheet[key].value;
        }, 0);
        dispatch({
          type: END_GAME,
          totalScore
        });
      }
    }

    // End game if all values are fozen
  };
}

export function startNewGame() {
  return {
    type: NEW_GAME
  };
}

function allValuesFrozen(scoreSheet, scoreItem) {
  // Add current item to scoreSheet state (because it represents the state before freeze)
  let newScoreSheet = {
    ...scoreSheet,
    [scoreItem]: { ...scoreSheet[scoreItem], frozen: true }
  };

  // Retun true if all scores are frozen
  return Object.keys(newScoreSheet)
    .filter(scoreItem => scoreItem !== "upperBonus")
    .every(scoreItem => newScoreSheet[scoreItem].frozen === true);
}
