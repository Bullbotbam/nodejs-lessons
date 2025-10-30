import { useState, useEffect } from "react";
// import celticData from "./data/celtic.json";
import { Playercards } from "./components/Playercards";
import "./App.css";

function App() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [maxPPG, setMaxPPG] = useState("");
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
    .filter((player) =>  maxPPG === '' ? true : player.ppg >= parseFloat(maxPPG))
    .filter(
      (player) =>
        position === "All" ||
        player.position.toLowerCase() === position.toLowerCase()
    )
    .filter(player => (player.name || "").toLowerCase().includes(nameFilter.toLowerCase()));

  return (
    <div className="App">
      <h1>Boston Celtics Player Cards</h1>
      <div className="controls">
  <h2>Filter Players</h2>
  <div className="search-row">
    <div className="form-group">
      <label htmlFor="name">Search Name</label>
      <input
        id="name"
        type="text"
        value={nameFilter}
        placeholder="Type a name..."
        onChange={(e) => setNameFilter(e.target.value)}
      />
    </div>

    <div className="form-group">
      <label htmlFor="position">Position</label>
      <select
        id="position"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Guard">Guard</option>
        <option value="Forward">Forward</option>
        <option value="Center">Center</option>
      </select>
    </div>

    <div className="form-group">
      <label htmlFor="ppg">Max PPG</label>
      <input
        id="ppg"
        type="number"
        value={maxPPG}
        placeholder="e.g. 25"
        onChange={(e) => setMaxPPG(e.target.value)}
      />
    </div>
  </div>
</div>

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
