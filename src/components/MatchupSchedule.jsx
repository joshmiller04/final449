import React, { useEffect, useState } from 'react';
import { supabase } from '../services/supabaseclient.js';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const goToHistory = (school) => {
  
  useEffect(() => {
    navigate()
  })
}

const MatchupSchedule = () => {
  // Get school passed in path, trim whitespace at each end of input, and capitalize first letter of each word for display purposes
  let { school } = useParams();
  school = school.trim().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  const navigate = useNavigate();

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

  const goToHistory = (school) => {
    navigate('/matchuphistory/' + encodeURIComponent(school));
  }

  return (
    <>
      <a href="/">Home</a>
      <div className="p-3 bg-success text-white rounded">
        <h4>{school} 2025-2026 Schedule</h4>
        {error && <p className="text-danger">Error: {error}</p>}
        <ul className="list-unstyled">
          {games.length > 12 ? (
            <li>Multiple schools detected! Please enter complete school name.</li>
          ) : games.length > 0 ? (
            games.map((game, i) => (
              <li
                key={i}
                className="mb-2"
                onClick={() => goToHistory(school)}
                style={{ cursor: 'pointer' }}>
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
