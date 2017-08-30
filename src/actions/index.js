import { ROLL_DICE } from "./actionTypes";

// Roll a new dice
export function rollDice() {
  // Generate a new array with 5 rolled dice
  const rolledDice = new Array(5).fill(0).map(die => {
    return Math.floor(Math.random() * 6) + 1;
  });
  return {
    type: ROLL_DICE,
    rolledDice
  };
}
