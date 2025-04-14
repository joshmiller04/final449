import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createClient } from '@supabase/supabase-js'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Big Ten Football Future Matchups</h1>

      <p>Input a Big Ten Team</p>
      <input type="text" id="team" name="team" title="Input the name of a Big Ten University" placeholder="Ex: Michigan State University" />
    </>
  )
}

export default App
