import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Schedule from './Schedule.jsx'
const opponent = ['Michigan', 'Ohio State', 'Penn State', 'Wisconsin', 'Iowa', 'Nebraska', 'Northwestern', 'Illinois', 'Purdue', 'Maryland', 'Rutgers']
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Schedule school="Michigan State" opponents={opponent}></Schedule>
  </StrictMode>,
)
