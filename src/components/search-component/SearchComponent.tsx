import {movieService} from '@/services/api.service'
import MovieComponent from '@/components/movie-components/MovieComponent'
import {IMovies} from '@/models/IMovies'
import React from 'react'
import MenuComponent from "@/components/menu-component/MenuComponent";
import BackComponent from "@/components/menu-component/BackComponent";
import FormComponent from "@/components/search-component/FormComponent";

type Props = {
    query: string
}

const SearchComponent = async ({ query }: Props) => {
    let movies: IMovies[] = []
    if (query.trim()) {
        movies = await movieService.searchMoviesByQuery(query)
    }

    return (
        <>
            <div className="p-2 bg-gray-100">
                <div className="flex justify-between align-center">
                    <MenuComponent/>
                    <FormComponent query={query}/>
                </div>

                {query && (
                    <>
                        {movies.length === 0 ? (
                            <p>Нічого не знайдено</p>
                        ) : (
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                                {movies.map((movie) => (
                                    <MovieComponent key={movie.id} item={movie} genreNames={[]}/>
                                ))}

                            </div>
                        )}
                        <div className={'flex justify-center'}><BackComponent/></div>
                    </>
                )}
            </div>
            <hr/>
        </>

    )
}

export default SearchComponent

