// NOTE: This became a lot more complicated because I decided
// to store score data as an object - it would probably be
// easier if I used lodash but I felt like I've gone too deep in.

export default function diffScores(scores, updatedScores) {
  // Get a list of unfrozen score keys
  const unfrozenScoreKeys = Object.keys(updatedScores).filter(key => {
    return key !== "upperBonus" ? !updatedScores[key].frozen : "";
  });

  // Create an object of only unfrozen scores
  const unfrozenScores = {};
  unfrozenScoreKeys.forEach(key => {
    unfrozenScores[key] = {
      ...updatedScores[key],
      ...scores[key]
    };
  });

  // Create a duplicate object of unfrozen scores and nullify all values
  const nulledUnfrozenScores = {};
  unfrozenScoreKeys.forEach(key => {
    nulledUnfrozenScores[key] = {
      ...updatedScores[key],
      value: null
    };
  });

  // Create a list of keys where scores are not zero
  const nonZeroFrozenScoreKeys = Object.keys(unfrozenScores).filter(key => {
    return unfrozenScores[key].value !== 0;
  });

  if (nonZeroFrozenScoreKeys.length) {
    // If non-zero scores exist in the list
    const nonZeroUnfrozenScores = { ...nulledUnfrozenScores };
    nonZeroFrozenScoreKeys.forEach(key => {
      nonZeroUnfrozenScores[key] = {
        ...unfrozenScores[key]
      };
    });

    // Return an object of unfrozen scores with values,
    // and where zeros are set to null
    return nonZeroUnfrozenScores;
  } else {
    // If all scores are zero
    const zeroUnfrozenScores = { ...nulledUnfrozenScores };
    unfrozenScoreKeys.forEach(key => {
      zeroUnfrozenScores[key] = {
        ...unfrozenScores[key]
      };
    });

    // Return an object of unfrozen scores with value of 0
    return zeroUnfrozenScores;
  }
}
