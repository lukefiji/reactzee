import React from "react";

// Importing dice images
import dice0 from "../assets/dice0.svg";
import dice1 from "../assets/dice1.svg";
import dice2 from "../assets/dice2.svg";
import dice3 from "../assets/dice3.svg";
import dice4 from "../assets/dice4.svg";
import dice5 from "../assets/dice5.svg";
import dice6 from "../assets/dice6.svg";

const Die = props => {
  const { number } = props;

  return (
    <div className="die__wrapper" onClick={props.onClick}>
      <img
        src={getImage(number)}
        className="die__image"
        alt={number}
        style={{
          border:
            props.frozen && props.rollsRemaining > 0
              ? "4px solid #aaaaaa"
              : "4px solid rgba(255, 255, 255, 0)",
          borderRadius: "16px"
        }}
      />
    </div>
  );
};

function getImage(value) {
  switch (value) {
    case 1:
      return dice1;
    case 2:
      return dice2;
    case 3:
      return dice3;
    case 4:
      return dice4;
    case 5:
      return dice5;
    case 6:
      return dice6;
    default:
      return dice0;
  }
}

export default Die;
