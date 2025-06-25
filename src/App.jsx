import { useEffect, useState } from 'react'
import './App.css'
import Search from './components/Search'

const API_BASE_URL = 'https://api.themoviedb.org/3';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
}


function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const fecthMovies = async () => {
    try{
      const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

      const response = await fetch(endpoint, API_OPTIONS);

      alert(response);
    }catch(e)
    {
      console.e(`Error Fetching movies : ${e}`);
      setErrorMessage('Error Fetching movies. please try again later.');
    }
  }

  useEffect(()=> {
    fecthMovies();
  }, [])

  return (
    <main>
      <div className='pattern'></div>
      
      <div className='wrapper'>
        <header>
          <img src="./hero.png" alt="Hero Banner" />
          <h1>Find <span className='text-gradient'>Movies</span> You'll Enjoy Without the hassle</h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        </header>

        <section>
          <h2>All Movies</h2>
          {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
        </section>

        
        {/* <h2>{searchTerm}</h2> */}
      </div>
    </main>
  )
}

export default App
