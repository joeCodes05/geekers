import React, { createContext, useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './pages/home/homepage'
import SignUp from './pages/signup'
import Navbar from './components/navbar';
import './assets/sass/custome.scss'
import Footer from './components/footer';
import LogIn from './pages/login';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const ContextProvider = createContext();

const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [darkMode, setDarkMode] = useState(false);
  return (
    <ContextProvider.Provider value={[darkMode, setDarkMode]}>
      <Router>
        <Navbar />
        <Routes>
          <Route exact element={ <Homepage /> } path='/' />
          <Route exact element={ <SignUp theme={darkMode} /> } path='/signup' />
          <Route exact element={ <LogIn theme={darkMode} /> } path='/login' />
        </Routes>
        <Footer />
      </Router>
    </ContextProvider.Provider>
  )
}

export default App