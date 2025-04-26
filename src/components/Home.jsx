import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'

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

  const handleShowSchools = () => { setDisplaySchools(!displaySchools) };

  return (
    <main id="main">
      <h1 className="header">2025-2026 Big Ten Football Matchups</h1>

      <p>Select a Big Ten School</p>
      <select
        type="text"
        id="team-select"
        name="teams"
        title="Select the name of a Big Ten university"
        placeholder="Ex: Michigan State"
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
        <button onClick={handleButtonClick}>Go</button>
      </div>
    </main>
  );
}

export default Home;
