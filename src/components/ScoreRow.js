import React from "react";

const ScoreRow = props => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.value}</td>
    </tr>
  );
};

export default ScoreRow;
