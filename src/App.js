import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './pages/homepage'
import SignUp from './pages/signup'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact element={ <Homepage /> } path='/' />
        <Route exact element={ <SignUp /> } path='/signup' />
      </Routes>
    </Router>
  )
}

export default App