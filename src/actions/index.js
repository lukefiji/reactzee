import { ROLL_DICE, TOGGLE_DIE } from "./actionTypes";

// Roll a new dice
export function rollDice(currentDice) {
  // Generate a new array with 5 rolled dice
  const rolledDice = currentDice.map(die => {
    if (die.frozen) {
      return die;
    }
    return { ...die, value: Math.floor(Math.random() * 6) + 1 };
  });

  return {
    type: ROLL_DICE,
    rolledDice
  };
}

// Toggle a die's frozen state
export function toggleDie(index) {
  return {
    type: TOGGLE_DIE,
    index
  };
}
