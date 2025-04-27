import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const [displaySchools, setDisplaySchools] = useState(false);

  useEffect(() => {
    const input = document.getElementById('team');

    const handleKey = (event) => {
      if (event.key === 'Enter') {
        const team = document.getElementById('team-select').value
        if (team) {
          navigate('/schedule/' + encodeURIComponent(team));
        }
      }
    };

    document.addEventListener('keydown', handleKey);
    return () => input?.removeEventListener('keydown', handleKey);
  }, [navigate]);

  const handleButtonClick = () => {
    const team = document.getElementById('team-select').value
    if (team) {
      navigate('/schedule/' + encodeURIComponent(team));
    }
  };

  return (
    <main>
      <h1 className="text-5xl text-blue-400 m-auto mt-10 mb-90">2025-2026 Big Ten Football Matchups</h1>

      <p className="text-3xl text-blue-400 mb-5">Select a Big Ten School</p>
      <select
        type="text"
        className="py-2 bg-gray-300 text-center text-lg mb-5 rounded cursor-pointer"
        id="team-select"
        name="teams"
        title="Select the name of a Big Ten university"
      >
        <option value='Illinois'>University of Illinois</option>
        <option value='Indiana'>Indiana University</option>
        <option value='Iowa'>University of Iowa</option>
        <option value='Maryland'>University of Maryland</option>
        <option value='Michigan'>University of Michigan</option>
        <option value='Michigan State'>Michigan State University</option>
        <option value='Minnesota'>University of Minnesota</option>
        <option value='Nebraska'>University of Nebraska</option>
        <option value='Northwestern'>Northwestern University</option>
        <option value='Ohio State'>Ohio State University</option>
        <option value='Oregon'>University of Oregon</option>
        <option value='Penn State'>Pennsylvania State University</option>
        <option value='Purdue'>Purdue University</option>
        <option value='Rutgers'>Rutgers University</option>
        <option value='UCLA'>University of California, Los Angeles</option>
        <option value='USC'>University of Southern California</option>
        <option value='Wisconsin'>University of Wisconsin</option>
        <option value='Washington'>University of Washington</option>
      </select>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        alignItems: 'center'
      }}>
        <button className="px-19.5 py-4 bg-blue-400 text-lg text-white rounded hover:bg-blue-500 cursor-pointer" onClick={handleButtonClick}>Get 2025 Schedule</button>
      </div>
    </main>
  );
}

export default Home;
