// src/services/fetchMatchupsAPI.js

const API_KEY = 'jtpzZ6Nx6FCjfSBPYLuMDh8lc5NiIoyLDwEVkdoz21H5j/uLZP4CFCDNfLqIfnIk';
const BASE_URL = 'https://api.collegefootballdata.com';

export const fetchMatchupHistory = async (team) => {
  const currentYear = new Date().getFullYear() - 1; // Pull from last season

  const response = await fetch(
    `${BASE_URL}/games?year=${currentYear}&team=${encodeURIComponent(team)}`,
    {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch data from CollegeFootballData API');
  }

  const data = await response.json();

  return data.map((game) => ({
    date: game.start_date?.split('T')[0],
    opponent: game.home_team === team ? game.away_team : game.home_team,
    result:
      game.home_points > game.away_points
        ? game.home_team === team
          ? 'Win'
          : 'Loss'
        : game.away_team === team
        ? 'Win'
        : 'Loss',
    score: `${game.home_points} - ${game.away_points}`,
  }));
};
