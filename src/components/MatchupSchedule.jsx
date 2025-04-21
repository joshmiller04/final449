import React, { useEffect, useState } from 'react';
import { supabase } from '../services/supabaseclient.js';
import { useParams } from 'react-router-dom';

const MatchupSchedule = () => {
  const { school } = useParams();

  const [games, setGames] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      const { data, error } = await supabase
        .from('big_ten_2025_schedule')
        .select('team, date, opponent, location') 
        .ilike('team', `%${school}%`); 

      if (error) {
        console.error('Supabase error:', error.message);
        setError(error.message);
      } else {
        setGames(data);
      }
    };

    if (school) {
      fetchGames();
    }
  }, [school]);

  return (
    <>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
        </ul>
      </nav>
      <div className="p-3 bg-success text-white rounded">
        <h4>{school} 2025-2026 Schedule</h4>
        {error && <p className="text-danger">Error: {error}</p>}
        <ul className="list-unstyled">
          {games.length > 0 ? (
            games.map((game, i) => (
              <li key={i} className="mb-2">
                <strong>{game.date}</strong> — {game.location} vs. {game.opponent}
              </li>
            ))
          ) : (
            <li>No upcoming games found.</li>
          )}
        </ul>
      </div>
    </>
  );
};

export default MatchupSchedule;
