import { useState, useEffect } from "react";
import GameInfo from "./GameInfo";
import GameBoard from "./GameBoard";
import "./gameBoard.css"

function App() {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [gameRunning, setGameRunning] = useState(false);
  const [activeHoleIndex, setActiveHoleIndex] = useState(null);
  const [resetGame, setResetGame] = useState(false);

  useEffect(() => {
    let timer;
    if (gameRunning && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    } else if (timeLeft === 0) {
      setGameRunning(false);
    }
    return () => clearInterval(timer);
  }, [gameRunning, timeLeft]);

  const startGame = () => {
    setScore(0);
    setTimeLeft(15);
    setGameRunning(true);
    setResetGame(prev => !prev);
  };
  
  return (
    <div className="app">
      <h1>Whack-A-Mole</h1>
      <GameInfo 
      score={score} 
      timeLeft={timeLeft} 
      onRestart={startGame} 
      />
      <GameBoard 
      score={score} 
      setScore={setScore} 
      gameRunning={gameRunning}
      resetGame={resetGame}
      /> 
    </div>
  );
}

export default App;
