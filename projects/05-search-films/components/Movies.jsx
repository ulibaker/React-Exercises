/* eslint-disable react/prop-types */
export function ListOfMovies ({ movies }) {
    return (
        <ul>
            {
            movies.map(movie => (
                <li key={movie.id}>
                <h3>{movie.title}</h3>
                <p>{movie.year}</p>
                <img src={movie.poster} alt={movie.title} />
                </li>
            ))
            }
        </ul>
    )
}

export function NoMovies () {
    return (
        <p>Error 404. There was not found any movie.</p>
    )
}  

export function MoviesYN ({ movies }) {
    const hasMovies = movies?.length > 0

    return (
        hasMovies
        ? <ListOfMovies movies={movies} /> 
        : <NoMovies />
    )
}
