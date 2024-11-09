import withResults from '../responses/with-results.json'
import noResults from '../responses/no-results.json'

export function useMovies() {
    const movies = withResults.Search
    const mappedMovies = movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }))  
  
    return { movies: mappedMovies }
  }