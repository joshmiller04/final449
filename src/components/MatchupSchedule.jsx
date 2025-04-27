import React, { useEffect, useState } from 'react';
import { supabase } from '../services/supabaseClient.js';
import { useParams, useNavigate } from 'react-router-dom';
import { LoadingOverlay } from "./LoadingOverlay.jsx"

const MatchupSchedule = () => {
  let { school } = useParams();
  const navigate = useNavigate();

  const [games, setGames] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchGames = async () => {
      if (school != "Michigan") {
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
      }
      else {
        const { data, error } = await supabase
          .from('big_ten_2025_schedule')
          .select('team, date, opponent, location')
          .ilike('team', `%${school}%`)
          .neq('team', 'Michigan State');

          if (error) {
            console.error('Supabase error:', error.message);
            setError(error.message);
          } else {
            setGames(data);
          }
      }
      setIsLoading(false);
    };

    if (school) {
      fetchGames();
    }
  }, [school]);
  console.log('Games:', games);

  const goToHistory = (school, opponent) => {
    navigate('/matchuphistory/' + encodeURIComponent(school) + "/" + encodeURIComponent(opponent));
  };

  return (
    <>
      {isLoading && <LoadingOverlay />}
      <div style={{ marginBottom: '1rem' }}>
        <button
          onClick={() => navigate('/')}
          className="px-10 py-2 bg-blue-400 text-lg text-white rounded hover:bg-blue-500 cursor-pointer mt-10"
        >
          ← Back to Home
        </button>
      </div>

      <div>
        <h4 className="text-5xl text-blue-400 mt-15 mb-30">{school} 2025-2026 Schedule</h4>
        {error && <p className="text-danger">Error: {error}</p>}
        {isLoading ? ( <h3 className="text-3xl text-blue-400 mt-30"> Loading ......</h3> ) : (
          <ul className="list-unstyled px-70">
            {games.map((game, i) => (
                <li
                  key={i}
                  className="text-3xl text-blue-400 mb-2 cursor-pointer hover:text-white"
                  onClick={() => goToHistory(school, game.opponent)}
                >
                  <strong>{game.date}</strong> — {game.location} vs. {game.opponent}
                </li>
              ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default MatchupSchedule;
