import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MatchupSchedule from "./MatchupSchedule";
import { fetchMatchupHistory } from "./fetchMatchupsAPI";

function MatchupHistory() {
  const { school } = useParams();
  const navigate = useNavigate();
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetchMatchupHistory(school)
      .then(setHistory)
      .catch((err) => console.error('API Error:', err));
  }, [school]);

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

      <div className="p-3 bg-dark text-white rounded mt-4">
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
      </div>
    </>
  );
}

export default MatchupHistory;
