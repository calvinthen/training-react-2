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

  const [movieList, setMovieList] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const fecthMovies = async () => {
    setIsLoading(true);
    setErrorMessage('');

    try{
      const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

      const response = await fetch(endpoint, API_OPTIONS);

     

      if(!response.ok){
        throw new Error('Failed to fetch movies');
      }

      const data = await response.json();

      if(data.Response === 'False'){
        setErrorMessage(data.Error || 'Failed to fetch movies');
        setMovieList([]);
        return;
      }

      setMovieList(data.results || []);

    }catch(e)
    {
      console.e(`Error Fetching movies : ${e}`);
      setErrorMessage('Error Fetching movies. please try again later.');
    }
    finally{
      setIsLoading(false);
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
          { isLoading ? (
            <p className='text-white'> Loading...</p>
          ): errorMessage ? (
            <p className='text-red-500'>{errorMessage}</p>
          ) : (
            <ul>
              {movieList.map((movie)=>(
                <p className='text-white'>{movie.title}</p>
              ))}
            </ul>
          )
          }
        </section>

        
        {/* <h2>{searchTerm}</h2> */}
      </div>
    </main>
  )
}

export default App
