const newGameState = {
  playerDice: [
    { frozen: false, value: 0 },
    { frozen: false, value: 0 },
    { frozen: false, value: 0 },
    { frozen: false, value: 0 },
    { frozen: false, value: 0 }
  ],
  gameState: {
    rollsRemaining: 3,
    scoresFrozen: false,
    gameFinished: false
  },
  scoreSheet: {
    aces: { value: null, frozen: false },
    twos: { value: null, frozen: false },
    threes: { value: null, frozen: false },
    fours: { value: null, frozen: false },
    fives: { value: null, frozen: false },
    sixes: { value: null, frozen: false },
    upperBonus: { value: null },
    threeOfAKind: { value: null, frozen: false },
    fourOfAKind: { value: null, frozen: false },
    fullHouse: { value: null, frozen: false },
    smallStraight: { value: null, frozen: false },
    largeStraight: { value: null, frozen: false },
    yahtzee: { value: null, frozen: false },
    chance: { value: null, frozen: false }
  }
};

export default newGameState;
