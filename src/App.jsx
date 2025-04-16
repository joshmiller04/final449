import './App.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Schedule from './Schedule';

function App() {
  useEffect(() => {
    const input = document.getElementById('team');

    const handleKey = (event) => {
      if (event.key === 'Enter') {
        const team = event.target.value;
        if (team) {
          window.location.href = '/schedule/' + encodeURIComponent(team);
        }
      }
    };

    input?.addEventListener('keydown', handleKey);

    // Clean up event listener when component unmounts
    return () => input?.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <>
      <h1 className="header">Big Ten Football Future Matchups</h1>

      <p>Input a Big Ten Team</p>
      <input
        type="text"
        id="team"
        name="team"
        title="Input the name of a Big Ten University"
        placeholder="Ex: Michigan State University"
      />

      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/schedule/:school" element={<Schedule />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
