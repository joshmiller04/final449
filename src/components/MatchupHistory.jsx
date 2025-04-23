import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MatchupSchedule from "./MatchupSchedule";
import { fetchMatchupHistory } from "./fetchMatchupsAPI";

function MatchupHistory() {
  const { school, opponent } = useParams();
  const navigate = useNavigate();
  const [history, setHistory] = useState([]);
  //console.log("School:", school);
  //console.log("Opponent:", opponent);
  
  

  useEffect(() => {
    fetchMatchupHistory(school, opponent)
      .then(setHistory)
      .catch((err) => console.error('API Error:', err));
  }, [school]);

  const Score = (game) => {
    const homeScore = game.homeTeam === school ? game.homeScore : game.awayScore;
    const awayScore = game.homeTeam === opponent ? game.homeScore : game.awayScore;
    return `${homeScore} - ${awayScore}`;
  }

  const Location = (loc) => {return loc === school ? "Home" : "Away"}

  const Winner = (winner) => { return winner === school ? "Win" : "Loss" }

  const Matchup = (game) => {
    return `${game.season} - ${game.season + 1} season: ${Score(game)} ${Location(game.homeTeam)} ${Winner(game.winner)}`
  }

  console.log("Matchup History:", history);

  return (
    <>
      <button
        onClick={() => navigate('/')}
        style={{
          marginBottom: "1rem",
          padding: "0.5rem 1rem",
          backgroundColor: "#0088CE",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer"
        }}
      >
        ← Back to Home
      </button>

      <h2>{school} VS. {opponent} <br /> 2015 - 2024  Match-ups History</h2>
      <ul>
        {
          history.length === 0 ? (
            <h4>No Match-ups History</h4>
          ) : (
            history.map((game, i) => (
              <li
                key={i}
                style={{
                  color: game.winner === school ? "green" : "red",
                }}>
                  <h4>{Matchup(game)}</h4>
              </li>
            ))
          )
        }
      </ul>

      {/* <div className="p-3 bg-dark text-white rounded mt-4">
        <h4>{school} Past Matchups</h4>
        {history.length === 0 ? (
          <p>No past matchups found.</p>
        ) : (
          <ul className="list-unstyled">
            {history.map((game, i) => (
              <li key={i}>
                {game.date} vs. {game.opponent} — {game.score} ({game.result})
              </li>
            ))}
          </ul>
        )}
      </div> */}
    </>
  );
}

export default MatchupHistory;
