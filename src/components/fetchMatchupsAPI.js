// src/services/fetchMatchupsAPI.js
export const fetchMatchupHistory = async (team, opponent) => {
    const API_KEY = 'jtpzZ6Nx6FCjfSBPYLuMDh8lc5NiIoyLDwEVkdoz21H5j/uLZP4CFCDNfLqIfnIk';
    const BASE_URL = 'https://apinext.collegefootballdata.com';
    const currentYear = new Date().getFullYear() - 1;
  
    const response = await fetch(
      `${BASE_URL}/teams/matchup?team1=${encodeURIComponent(team)}&team2=${encodeURIComponent(opponent)}&minYear=2015&maxYear=2024`,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
  
    if (!response.ok) {
      throw new Error('Failed to fetch matchup history');
    }
  
    const data = await response.json();
    return data.games;
  };
  