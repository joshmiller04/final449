import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Schedule from './components/MatchupHistory';
import Home from './components/Home';
import MatchupSchedule from './components/MatchupSchedule';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule/:school" element={<MatchupSchedule />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
