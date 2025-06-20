import { useEffect, useState } from 'react'
import './App.css'

function App() {
  

  return (
    <main>
      <div className='pattern'></div>
      
      <div className='wrapper'>
        <header>
          <img src="./hero.png" alt="Hero Banner" />
          <h1>
            Find <span className='text-gradient'>Movies</span> You'll Enjoy Without the hassle
          </h1>
        </header>

        <p>Search</p>
      </div>
    </main>
  )
}

export default App
