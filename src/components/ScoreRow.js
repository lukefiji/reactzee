import React from "react";

const ScoreRow = props => {
  const displayScore = !props.frozen && props.scoresFrozen ? "" : props.value;

  return (
    <tr>
      <td>{props.name}</td>
      <td
        onClick={() => props.onScoreClick(props.scoreItem)}
        style={{ color: props.frozen ? "black" : "#aaaaaa" }}
      >
        {displayScore}
      </td>
    </tr>
  );
};

export default ScoreRow;
