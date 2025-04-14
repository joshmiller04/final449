import { useState } from 'react'
import './App.css'
import { createClient } from '@supabase/supabase-js'

function App() {

  return (
    <>
      <h1 class="header">Big Ten Football Future Matchups</h1>

      <p>Input a Big Ten Team</p>
      <input type="text" id="team" name="team" title="Input the name of a Big Ten University" placeholder="Ex: Michigan State University" />
    </>
  )
}

export default App
