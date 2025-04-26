import React, { useEffect, useState } from 'react';
import { supabase } from '../services/supabaseclient.js';
import { useParams, useNavigate } from 'react-router-dom';
import { LoadingOverlay } from "./LoadingOverlay.jsx"

const MatchupSchedule = () => {
  let { school } = useParams();
  const navigate = useNavigate();

  school = school.trim().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  const [games, setGames] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchGames = async () => {
      const { data, error } = await supabase
        .from('big_ten_2025_schedule')
        .select('team, date, opponent, location')
        .eq('team', school);

      if (error) {
        console.error('Supabase error:', error.message);
        setError(error.message);
      } else {
        setGames(data);
      }
      setIsLoading(false);
    };

    if (school) {
      fetchGames();
    }
  }, [school]);
  console.log('Games:', games);

  const goToHistory = () => {
    navigate('/matchuphistory/' + encodeURIComponent(school));
  };

  return (
    <>
      {isLoading && <LoadingOverlay />}
      <div style={{ marginBottom: '1rem' }}>
        <button
          onClick={() => navigate('/')}
          style={{
            marginRight: '1rem',
            padding: '0.5rem 1rem',
            backgroundColor: '#0088CE',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          ← Back to Home
        </button>

      </div>

      <div className="p-3 bg-success text-white rounded">
        <h2>{school} 2025-2026 Schedule</h2>
        {error && <p className="text-danger">Error: {error}</p>}
        {isLoading ? ( <h3> Loading ......</h3> ) : (
          <ul className="list-unstyled">
            {games.length > 12 ? (
              <li>Multiple schools detected! Please enter a complete school name.</li>
            ) : games.length > 0 ? (
              
              games.map((game, i) => (
                <li
                  key={i}
                  className="mb-2"
                  onClick={() => navigate(`/matchuphistory/${encodeURIComponent(school)}/${encodeURIComponent(game.opponent)}`)}
                  style={{ cursor: 'pointer', textDecoration: 'underline' }}
                >
                  <strong>{game.date}</strong> — {game.location} vs. {game.opponent}
                </li>
              ))
            ) : (
              <li>No upcoming games found.</li>
            )}
          </ul>
        )}
      </div>
    </>
  );
};

export default MatchupSchedule;
