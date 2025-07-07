import {IMovies} from "@/models/IMovies";
import {moviesApi} from "@/server/server.api";
import {IGenres} from "@/models/IGenres";


export const movieService = {
    getAllMovies: async (page: string, genreId?: string): Promise<IMovies[]> => {
        const url = genreId
            ? `/discover/movie?page=${page}&with_genres=${genreId}`
            : `/discover/movie?page=${page}`;

        const {data: {results}} = await moviesApi.get(url);
        return results;
    },
    getAllGenres: async (): Promise<IGenres[]> => {
        const { data } = await moviesApi.get('/genre/movie/list')
        return data.genres
    },
    getMovieById: async (id: string): Promise<IMovies> => {
        const {data} = await moviesApi.get(`/movie/${id}`)
        return data
    },
    searchMoviesByQuery: async (query: string): Promise<IMovies[]> => {
        const { data } = await moviesApi.get('/search/movie', {
            params: {
                query,
                page: 1,
            },
        })
        return data.results
    },
}

