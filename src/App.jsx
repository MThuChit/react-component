import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greetings from './components/Greetings.jsx'
import User from './components/User.jsx'

function App() {
  return (
    <>
    <div className = "card">
      <Greetings />
      <User />
    </div>
    </>
  );  
}

export default App
