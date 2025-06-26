

import {IMovies} from "@/models/IMovies";
import {moviesApi} from "@/server/server.api";
import {IGenres} from "@/models/IGenres";



export const movieService = {
    getAllMovies: async (page = 1):Promise<IMovies[]> => {
        const {data: {results}} = await moviesApi.get(`/discover/movie`, {params: {page}})
        return  results
    },
    getGenres: async (): Promise<IGenres[]> => {
        const { data } = await moviesApi.get('/genre/movie/list')
        return data.genres
    }
}

