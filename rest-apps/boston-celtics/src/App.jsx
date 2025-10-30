import { useState, useEffect } from "react";
import celticData from "./data/celtic.json";
import { Playercards } from "./components/Playercards";
import "./App.css";

function App() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [maxPPG, setMaxPPG] = useState(0);
  const [position, setPosition] = useState("All");
  const [nameFilter, setNameFilter] = useState("");

  useEffect(() => {
    // Simulate an async call to our data
    fetch("/data/celtic.json")
      .then((res) => res.json())
      .then((data) => {
        setPlayers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load player data:", err);
        setLoading(false);
      });
  }, []);

  const filteredPlayerData = players
    .filter((player) => player.ppg >= maxPPG)
    .filter(
      (player) =>
        position === "All" ||
        player.position.toLowerCase() === position.toLowerCase()
    )
    .filter((player) =>
      player.name.toLowerCase().includes(nameFilter.toLowerCase())
    );

  return (
    <div className="App">
      <h1>Boston Celtics Player Cards</h1>
      <div className="controls">
        <label>
          Search Name:
          <input
            type="text"
            value={nameFilter}
            onChange={(e) => setNameFilter(e.target.value)}
          />
        </label>
        <label>
          Position
          <select 
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Guard">Guard</option>
            <option value="Forward">Forward</option>
            <option value="Center">Center</option>
          </select>
        </label>
      </div>

      <input
        type="number"
        value={maxPPG}
        onChange={(e) => setMaxPPG(Number(e.target.value))}
      />

      {loading ? (
        <p>Loading the players....</p>
      ) : (
        <div className="card-container">
          {filteredPlayerData.map((player, index) => (
            <Playercards key={index} player={player} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
