import React from 'react'
import { movieService } from '@/services/api.service'
import MovieComponent from '@/components/movie-components/MovieComponent'


const MoviesComponent = async ({page = '1', genre = ''}) => {
    const [movies, genres] = await Promise.all([
        movieService.getAllMovies(page, genre ),
        movieService.getAllGenres()
    ])

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {movies.map(movie => {
                const genreNames = movie.genre_ids.map(id => {
                    const found = genres.find(g => g.id === id)
                    return found ? found.name : 'Unknown'
                })

                return (
                    <MovieComponent key={movie.id} item={movie} genreNames={genreNames} />
                )
            })}
        </div>
    )
}

export default MoviesComponent