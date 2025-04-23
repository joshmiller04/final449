import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

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

      <button onClick={handleButtonClick} style={{ marginTop: '1rem' }}>
        Go
      </button>
    </main>
  );
}

export default Home;
