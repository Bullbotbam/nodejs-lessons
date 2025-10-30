import React from "react";

export const Playercards = ({ player }) => {
  return (
  <div className="card">
      <div className="card-inner">
        {/* Front of card */}
        <div className="card-front">
          <img src={player.image} alt={player.name} />
          <h2>{player.name}</h2>
        </div>

        {/* Back of card */}
        <div className="card-back">
          <h2>{player.name}</h2>
          <p>Jersey #: {player.jersey}</p>
          <p>Position: {player.position}</p>
          <p>PPG: {player.ppg}</p>
          <p>Years in NBA: {player.yearsInNBA}</p>
          
        </div>
      </div>
    </div>
  );
};
