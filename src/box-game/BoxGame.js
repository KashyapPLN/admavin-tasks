import React, { useState, useEffect } from "react";


const BoxGame = () => {
  const [boxes, setBoxes] = useState(Array(9).fill(""));
  const [keyword, setKeyword] = useState("");
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (timeLeft === 0) {
      setGameOver(true);
    } else {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  useEffect(() => {
    if (!gameOver) {
      const randomIndex = Math.floor(Math.random() * 9);
      const newBoxes = [...boxes];
      newBoxes[randomIndex] = keyword;
      setBoxes(newBoxes);
      setTimeout(() => {
        newBoxes[randomIndex] = "";
        setBoxes(newBoxes);
        setKeyword(Math.random().toString(36).substring(7));
       // setKeyword(("HIT" + Math.random().toString(36).substring(7)).substring(1,3));
      }, 1000);
    }
  }, [keyword, gameOver]);

  const handleClick = (index) => {
    if (boxes[index] === keyword) {
      setScore(score + 5);
    } else {
      setScore(score - 2.5);
    }
  };

  return (
    <div>
      {!gameOver ? (
        <div>
          <div className="time-left">Time Left: {timeLeft}</div>
          <div className="boxes-container">
            {boxes.map((box, index) => (
              <div
                key={index}
                className="box"
                onClick={() => handleClick(index)}
              >
             {box}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="final-score">Final Score: {score}</div>
      )}
    </div>
  );
};

export default BoxGame;
