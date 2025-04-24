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
        const team = event.target.value;
        if (team) {
          navigate('/schedule/' + encodeURIComponent(team));
        }
      }
    };

    input?.addEventListener('keydown', handleKey);
    return () => input?.removeEventListener('keydown', handleKey);
  }, [navigate]);

  const handleButtonClick = () => {
    const input = document.getElementById('team');
    const team = input?.value;
    if (team) {
      navigate('/schedule/' + encodeURIComponent(team));
    }
  };

  const handleShowSchools = () => { setDisplaySchools(!displaySchools) };

  return (
    <main id="main">
      <h1 className="header">2025-2026 Big Ten Football Matchups</h1>

      <p>Input a Big Ten Team</p>
      <input
        type="text"
        id="team"
        name="team"
        title="Input the name of a Big Ten University"
        placeholder="Ex: Michigan State"
      />

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        alignItems: 'center'
      }}>
        <button onClick={handleButtonClick}>Go</button>
        <button onClick={handleShowSchools}>Show School Names</button>
      </div>
      <div className={`popupBox ${displaySchools ? 'active' : ''}`}>
        <div className="schoolList">
          <button onClick={handleShowSchools} className="closeBox">
            X
          </button>
          <h2>Big Ten Schools</h2>
          <ul>
            <li>Illinois - University of Illinois</li>
            <li>Indiana - Indian University</li>
            <li>Iowa - University of Iowa</li>
            <li>Maryland - University of Maryland</li>
            <li>Michigan - University of Michigan</li>
            <li>Michigan State - Michigan State University</li>
            <li>Minnesota - University of Minnesota</li>
            <li>Nebraska - University of Nebraska-Lincoln</li>
            <li>Northwestern - Northwestern University</li>
            <li>Ohio State - Ohio State University</li>
            <li>Oregon - University of Oregon</li>
            <li>Penn State - Pennsylvania State University</li>
            <li>Purdue - Purdue University</li>
            <li>Rutgers - Rutgers University-New Brunswick</li>
            <li>UCLA - University of California Los Angeles</li>
            <li>USC - University of Southern California</li>
            <li>Wisconsin - University of Wisconsin-Madison</li>
            <li>Washington - University of Washington</li>
            <h4 style={{color: "blue"}}>Please input the left side school name</h4>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default Home;
