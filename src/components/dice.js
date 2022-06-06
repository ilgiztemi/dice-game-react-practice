import React from "react";
import { useContext } from "react";
import { playerContext } from "../context/playerProvider";

const Dice = () => {
  const {
    winner,
    setWinner,
    playerNameOne,
    setPlayerNameOne,
    playerNameTwo,
    setPlayerNameTwo,
    firstDice,
    setFirstDice,
    secondDice,
    setSecondDice,
  } = useContext(playerContext);

  const handleClick = () => {
    setPlayerNameOne(prompt("Please enter your name:", "Player 1"));
    setPlayerNameTwo(prompt("Please enter your name:", "Player 2"));
  };
  const handleRoll = () => {
    let oneRandom = Math.ceil(Math.random() * 6);
    let twoRandom = Math.ceil(Math.random() * 6);
    switch (oneRandom) {
        case 1:
          setFirstDice("one");
        break;
        case 2:
          setFirstDice("two");
        break;
        case 3:
          setFirstDice("three");
        break;
        case 4:
          setFirstDice("four");
        break;
        case 5:
          setFirstDice("five");
        break;
        default:
          setFirstDice("six");
        break;
      }
      switch (twoRandom) {
        case 1:
          setSecondDice("one");
        break;
        case 2:
          setSecondDice("two");
        break;
        case 3:
          setSecondDice("three");
        break;
        case 4:
          setSecondDice("four");
        break;
        case 5:
          setSecondDice("five");
        break;
        default:
          setSecondDice("six");
        break;
      }
      if(oneRandom > twoRandom) {
          setWinner(playerNameOne);
      }
      else {
          setWinner(playerNameTwo);
      }

  };
  return (
    <div className="container">
      <h1>{winner ? winner + ' wins!' : "Let's Play"}</h1>
      <div className="grid">
        <h3>{playerNameOne ? playerNameOne : "Player 1"}</h3>
        <h3>{playerNameTwo ? playerNameTwo : "Player 2"}</h3>
        <i class={firstDice ? (`fa-solid fa-dice-${firstDice}`) : 'fa-solid fa-dice-six'}></i>
        <i class={secondDice ? (`fa-solid fa-dice-${secondDice}`) : 'fa-solid fa-dice-six'}></i>
      </div>
      <button onClick={handleRoll}>Roll the Dice</button>
      <button onClick={handleClick}>Edit Names</button>
    </div>
  );
};

export default Dice;
