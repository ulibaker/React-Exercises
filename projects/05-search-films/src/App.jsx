import './App.css'
import { MoviesYN } from '../components/Movies'
import { useMovies } from '../hooks/useMovies'
import { useSearch } from '../hooks/useSearch'
import { useState } from 'react'

function App() {
  const [ sort, setSort ] = useState(false)
  const { query, setQuery, error } = useSearch()
  const { movies, loading, getMovies } = useMovies({ query, sort })

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ query })
  }

  const handleSort = () => {
    setSort(!sort)
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
            <p className='moviename'>Put the movie name:</p>
            <br/>
            <input className='textfield'
              style={{ 
                border: '1px solid transparent', 
                borderColor: error ? 'red' : 'transparent' 
              }} 
              onChange={handleChange} 
              value={query} 
              name='query' 
              placeholder='The Lord Of The Rings' />
            <input className='box' type='checkbox' onChange={handleSort} checked={sort} />
            <button type='submit'>Search!</button>
          </label>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        {
          loading 
            ? <p>Loading . . .</p> 
            : <MoviesYN movies={movies} />
        }
      </main>
    </>
  )
}

export default App
