import React from "react";

const ScoreRow = props => {
  return (
    <tr>
      <td>{props.name}</td>
      <td
        onClick={() => props.onScoreClick(props.scoreItem)}
        style={{ color: props.frozen ? "black" : "#aaaaaa" }}
      >
        {props.value}
      </td>
    </tr>
  );
};

export default ScoreRow;
