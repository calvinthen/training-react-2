import { useEffect, useState } from 'react'
import './App.css'
import Search from './components/Search'

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <main>
      <div className='pattern'></div>
      
      <div className='wrapper'>
        <header>
          <img src="./hero.png" alt="Hero Banner" />
          <h1>Find <span className='text-gradient'>Movies</span> You'll Enjoy Without the hassle</h1>
        </header>

        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <h2>{searchTerm}</h2>
      </div>
    </main>
  )
}

export default App
