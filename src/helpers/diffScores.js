export default function diffScores(scores, updatedScores) {
  // Get a list of unfrozen score keys
  const unfrozenScoreKeys = Object.keys(updatedScores).filter(key => {
    if (key !== "upperBonus") return !updatedScores[key].frozen;
  });

  // Create an object of only unfrozen scores
  const unfrozenScores = {};
  unfrozenScoreKeys.forEach(key => {
    unfrozenScores[key] = {
      ...updatedScores[key],
      ...scores[key]
    };
  });

  console.log(scores);
  console.log(updatedScores);
  console.log(unfrozenScores);
}
