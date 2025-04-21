import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Schedule from './components/Schedule';
import Home from './components/Home';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule/:school" element={<Schedule />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
