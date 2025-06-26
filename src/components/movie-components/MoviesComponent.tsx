import React from 'react'
import { movieService } from '@/services/api.service'

import MovieComponent from '@/components/movie-components/MovieComponent'

const MoviesComponent = async () => {
    const [movies, genres] = await Promise.all([
        movieService.getAllMovies(),
        movieService.getGenres()
    ])

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2.5">
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