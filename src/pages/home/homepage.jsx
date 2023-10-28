import React from 'react'
import Hero from './components/hero'
import About from './components/about'

const Homepage = () => {
  return (
    <>
      <main className='homepage'>
        <Hero />
        <About />
      </main>
    </>
  )
}

export default Homepage