import React from "react";
import "./gameBoard.css";


function Mole({ isMoleVisible, onWhack, gameRunning }) {
    const handleClick = () => {
        if (isMoleVisible && gameRunning) {
            onWhack();
        }
    };
    return (
        <div className="hole" onClick={handleClick}>
            <img src={isMoleVisible ? "/mole.png" : "/hole.png"} alt="mole or hole" />
        </div>
    );
}

export default Mole;