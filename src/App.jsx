import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Home from "./components/Home.jsx"
import NotFound from "./components/NotFound.jsx"
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";


function App() {


  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/Home" replace />} />
        <Route path="/Home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>  
    </>
  )
}

export default App
