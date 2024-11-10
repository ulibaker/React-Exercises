import { useState, useRef, useMemo } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies({ query, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousQuery = useRef(query) 

  const getMovies = useMemo(() => {

    return async ({ query }) => {
      if(query === previousQuery.current) { 
        console.log('Change the query')
        return
      }
      try {
        setLoading(true)
        setError(null)
        previousQuery.current = query
        const newMovies = await searchMovies({ query })
        setMovies(newMovies)
      }
      catch(e) {
        setError(e.message)
      }
      finally {
        setLoading(false)
      }
    }
  }, [query])
    
  const sortedMovies = useMemo(() => {
    console.log('Memoized sorted movies.')

    return sort 
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
    }, [sort, movies])

    return { movies: sortedMovies, getMovies, loading }
  }