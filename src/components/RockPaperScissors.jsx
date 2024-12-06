import React, { useState } from "react";

const choices = ["Rock", "Paper", "Scissors"];

const getWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) return "It's a Tie!";
  if (
    (userChoice === "Rock" && computerChoice === "Scissors") ||
    (userChoice === "Scissors" && computerChoice === "Paper") ||
    (userChoice === "Paper" && computerChoice === "Rock")
  ) {
    return "You Win!";
  }
  return "You Lose!";
};

const RockPaperScissors = () => {
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");

  const playGame = (choice) => {
    const computerRandomChoice = choices[Math.floor(Math.random() * choices.length)];
    setUserChoice(choice);
    setComputerChoice(computerRandomChoice);
    setResult(getWinner(choice, computerRandomChoice));
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Rock-Paper-Scissors</h1>
      <div>
        {choices.map((choice) => (
          <button
            key={choice}
            onClick={() => playGame(choice)}
            style={{
              margin: "10px",
              padding: "10px 20px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            {choice}
          </button>
        ))}
      </div>
      {userChoice && (
        <div>
          <h2>You Chose: {userChoice}</h2>
          <h2>Computer Chose: {computerChoice}</h2>
          <h2>{result}</h2>
        </div>
      )}
    </div>
  );
};

export default RockPaperScissors;
