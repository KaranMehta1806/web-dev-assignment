import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter,HashRouter, Routes, Route } from "react-router-dom";
import LandingScreen from './components/LandingScreen';
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<LandingScreen />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login />} />
    <Route path="/profile" element={<Profile />} />
  </Routes>
</BrowserRouter>
    </>
  )
}

export default App
