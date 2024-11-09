import './App.css'
import { MoviesYN } from '../components/Movies'
import { useMovies } from '../hooks/useMovies'
import { useSearch } from '../hooks/useSearch'

function App() {
  const { query, setQuery, error } = useSearch()
  const { movies, getMovies } = useMovies({ query })

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies()
  }

  const handleChange = (event) => {
    const newQuery = event.target.value
    if (newQuery.startsWith(' ')) return
    setQuery(newQuery)
  }

  return (
    <>
      <h1>Cuevana 2024</h1>
      <header>
        <form className='form' onSubmit={handleSubmit}>
          <label>
            <p>Put the movie name:</p>
            <br/>
            <input
              style={{ 
                border: '1px solid transparent', 
                borderColor: error ? 'red' : 'transparent' 
              }} 
              onChange={handleChange} 
              value={query} 
              name='query' 
              placeholder='The Lord Of The Rings' />
            <button type='submit'>Search!</button>
          </label>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        <MoviesYN movies={movies} />
      </main>
    </>
  )
}

export default App
