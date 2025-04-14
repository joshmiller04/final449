import React, { useEffect, useState } from 'react';
import { supabase } from '../services/supabaseClient';

const MatchupSchedule = ({ team }) => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      const { data, error } = await supabase
        .from('22025-2026 Big Ten College Football Schedule') 
        .select('team, date, location, opponent')
        .ilike('team', `%${team}%`);  

      if (error) {
        console.error('Supabase error:', error.message);
      } else {
        setGames(data);
      }
    };

    if (team) fetchGames();
  }, [team]);

  return (
    <div className="p-3 bg-success text-white rounded">
      <h4>{team} 2025-2026 Schedule</h4>
      <ul className="list-unstyled">
        {games.map((game, i) => (
          <li key={i} className="mb-1">
            <strong>{game.date}</strong> — 
            {` ${game.location} vs. ${game.opponent}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MatchupSchedule;
