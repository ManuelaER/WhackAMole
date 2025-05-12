import React from "react";

function GameInfo({ score, timeLeft, onRestart }) {
    return (
        <div className="scoreboard">
            <p>Score: {score}</p>
            <p>Time Left: {timeLeft}s</p>
            <button onClick={onRestart}>Restart</button>
        </div>
    )
}

export default GameInfo;