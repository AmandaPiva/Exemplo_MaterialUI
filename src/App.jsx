import { useState } from 'react'
import './App.css'
import { Box, Button } from '@mui/material'
import { TextField } from '@mui/material'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login/Login'
import Header from './Components/Header/Header';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/header" element={<Header />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
