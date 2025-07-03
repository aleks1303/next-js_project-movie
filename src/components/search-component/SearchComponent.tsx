
import { movieService } from '@/services/api.service'
import MovieComponent from '@/components/movie-components/MovieComponent'
import { IMovies } from '@/models/IMovies'
import React from 'react'
import Form from "next/form";

type Props = {
    query: string
}

const SearchComponent = async ({ query }: Props) => {
    let movies: IMovies[] = []

    if (query.trim()) {
        movies = await movieService.searchMoviesByQuery(query)
    }

    return (
        <div className="p-4">
            <div className="flex justify-end">
                <Form action="/search" className="flex items-center gap-2 mb-4">
                    <input
                        type="text"
                        name="query"
                        defaultValue={query}
                        placeholder="Пошук фільмів..."
                        className="border bg-white rounded p-2 w-64"
                    />
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                        Шукати
                    </button>
                </Form>
            </div>
            {query && (
                <>
                    {movies.length === 0 ? (
                        <p>Нічого не знайдено</p>
                    ) : (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                            {movies.map((movie) => (
                                <MovieComponent key={movie.id} item={movie} genreNames={[]} />
                            ))}
                        </div>
                    )}
                </>
            )}
        </div>
    )
}

export default SearchComponent