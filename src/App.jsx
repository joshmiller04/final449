import './App.css'
import { createClient } from '@supabase/supabase-js'
import Schedule from './Schedule';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {

  return (
    <>
      <h1 class="header">Big Ten Football Future Matchups</h1>

      <p>Input a Big Ten Team</p>
      <input type="text" id="team" name="team" title="Input the name of a Big Ten University" placeholder="Ex: Michigan State University" />
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="schedule/:school" element={<Schedule />} />
        </Routes>
      </Router>
    </>
  )
}

// document.getElementById('team').addEventListener('keydown', function(event) {
//   if (event.key === 'Enter') {
    
//   }
// });

// function getSchool() {
//   team = document.getElementById('team').val();
//   if (team !== '') {
//     window.location.href = '/schedule/' + team;
//   }
// }

export default App
