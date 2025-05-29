import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"></link>
import Login from './login';
import Home from './pages/Home';




function App(props) {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} /> */}
      </Routes>
    </Router>
  )
}

export default App
