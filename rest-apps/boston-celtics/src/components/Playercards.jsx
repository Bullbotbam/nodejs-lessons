import React from "react";

export const Playercards = ({ player }) => {
  return (
    <div className="card">
      <h2>{player.name}</h2>
      <p>
        <strong>Jersey#:</strong> {player.jersey}
      </p>
      <p>
        <strong>PPG:</strong> {player.ppg}
      </p>
      <p>
        <strong>Years in NBA:</strong> {player.yearsInNBA}
      </p>
    </div>
  );
};
