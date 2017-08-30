import React from "react";

// Importing dice images
import dice0 from "../assets/dice1.svg";
import dice1 from "../assets/dice1.svg";
import dice2 from "../assets/dice2.svg";
import dice3 from "../assets/dice3.svg";
import dice4 from "../assets/dice4.svg";
import dice5 from "../assets/dice5.svg";
import dice6 from "../assets/dice6.svg";

const Die = props => {
  const { number } = props;

  return <img src={getImage(number)} alt={number} />;
};

const getImage = number => {
  switch (number) {
    case 1:
      return dice1;
      break;
    case 2:
      return dice2;
      break;
    case 3:
      return dice3;
      break;
    case 4:
      return dice4;
      break;
    case 5:
      return dice5;
      break;
    case 6:
      return dice6;
      break;
    default:
      return dice0;
      break;
  }
};

export default Die;
