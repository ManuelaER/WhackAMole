import { useState, useEffect } from "react";
import Mole from "./Mole";
import "./gameBoard.css";

function GameBoard({ score, setScore, gameRunning }) {
  const [molePosition, setMolePosition] = useState(null);

  useEffect(() => {
    if (gameRunning) {
      spawnMole();
    } else {
      setMolePosition(null);
    }
  }, [gameRunning]);

  const spawnMole = () => {
    const randomPop = Math.floor(Math.random() * 9);
    setMolePosition(randomPop);
  };

  const handleWhack = () => {
    setScore((prev) => prev + 1);
    spawnMole(); // only move mole after it's been whacked
  };

  return (
    <div className="grid">
      {Array.from({ length: 9 }, (_, index) => (
        <Mole
          key={index}
          isMoleVisible={index === molePosition}
          gameRunning={gameRunning}
          onWhack={() => handleWhack(index)}
        />
      ))}
    </div>
  );
}

export default GameBoard;
