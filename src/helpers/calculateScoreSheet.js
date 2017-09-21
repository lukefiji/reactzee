// Calculate score sheet inputs
// Returns { aces, twos, threes, ... }
export default function calculateScoreSheet(rolledDice) {
  // Convert rolledDice object into array
  const diceArr = rolledDice.map(die => die.value);

  // Upper Section
  const aces = calculateSingles(diceArr, 1);
  const twos = calculateSingles(diceArr, 2);
  const threes = calculateSingles(diceArr, 3);
  const fours = calculateSingles(diceArr, 4);
  const fives = calculateSingles(diceArr, 5);
  const sixes = calculateSingles(diceArr, 6);

  // Lower Section
  const threeOfAKind = calculateMultiples(diceArr, 3);
  const fourOfAKind = calculateMultiples(diceArr, 4);
  const fullHouse = calculateFullHouse(diceArr);
  const smallStraight = calculateSmallStraight(diceArr);
  const largeStraight = calculateLargeStraight(diceArr);
  const yahtzee = calculateYahtzee(diceArr);
  const chance = sumOfDice(diceArr);

  // Return scoreboard object
  return {
    aces: { value: aces },
    twos: { value: twos },
    threes: { value: threes },
    fours: { value: fours },
    fives: { value: fives },
    sixes: { value: sixes },
    threeOfAKind: { value: threeOfAKind },
    fourOfAKind: { value: fourOfAKind },
    fullHouse: { value: fullHouse },
    smallStraight: { value: smallStraight },
    largeStraight: { value: largeStraight },
    yahtzee: { value: yahtzee },
    chance: { value: chance }
  };
}

// Calculate the score for singles, from 1 - 6.
function calculateSingles(diceArr, diceVal) {
  return diceArr.reduce((sum, val) => {
    // If the value of the dice equals diceVal, add to sum
    if (val === diceVal) {
      return sum + val;
    }
    return sum;
  }, 0);
}

// Calculate dice that match three-of-a-kind or four-of-a-kind
function calculateMultiples(diceArr, numOfSameDice) {
  const areMultiples = findMultiples(diceArr, numOfSameDice);
  return areMultiples ? sumOfDice(diceArr) : 0;
}

// Detect if there is a number of same values in array
// exactMatch is to help with finding a full house
function findMultiples(diceArr, numOfSameDice, exactMatch = false) {
  // Initialize an array of values that match
  const matchingArr = [];

  // Loop through each dice
  diceArr.forEach(diceVal => {
    // Get the count of each die in the current roll
    const dieCount = diceArr.filter(function(x) {
      return x === diceVal;
    }).length;

    // If it is a triplet/four-of-a-kind and
    // the value isn't already in matchingArr
    if (
      !exactMatch &&
      dieCount >= numOfSameDice &&
      !matchingArr.includes(diceVal)
    ) {
      matchingArr.push(diceVal);
      // If exact match is true
    } else if (
      exactMatch &&
      dieCount === numOfSameDice &&
      !matchingArr.includes(diceVal)
    ) {
      matchingArr.push(diceVal);
    }
  });

  // Returns true if there is a match, false if there isn't
  return !!matchingArr.length;
}

// If elements in the second array are in the first
function arrContains(arr, contains) {
  // Return true if every value in
  // the containing function is true
  return contains.every(num => {
    // If num is in arr
    return arr.includes(num);
  });
}

function calculateSmallStraight(diceArr) {
  // List possible combinations
  const possibleCombos = [[1, 2, 3, 4], [2, 3, 4, 5], [3, 4, 5, 6]];

  // If any of the combos are in the dice array
  const hasSmallStraight = possibleCombos.some(combination =>
    arrContains(diceArr, combination)
  );

  return hasSmallStraight ? 30 : 0;
}

function calculateLargeStraight(diceArr) {
  const possibleCombos = [[1, 2, 3, 4, 5], [2, 3, 4, 5, 6]];

  const hasLargeStraight = possibleCombos.some(combination =>
    arrContains(diceArr, combination)
  );

  return hasLargeStraight ? 40 : 0;
}

function calculateYahtzee(diceArr) {
  // If every value equals the first
  const hasYahtzee = diceArr.every(val => {
    return val === diceArr[0];
  });

  return hasYahtzee ? 50 : 0;
}

function sumOfDice(diceArr) {
  // Sum all dice values
  return diceArr.reduce((sum, val) => {
    return sum + val;
  }, 0);
}

function calculateFullHouse(diceArr) {
  // If there is an exact double and exact triple found
  const isFullHouse =
    findMultiples(diceArr, 2, true) && findMultiples(diceArr, 3, true);
  return isFullHouse ? 25 : 0;
}
