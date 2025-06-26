// // lib/server/tmdbAPI.ts
// import axios from 'axios'
//
// export const tmdbAPI = axios.create({
//     baseURL: 'https://api.themoviedb.org/3',
//     headers: {
//         Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
//         'Content-Type': 'application/json'
//     }
// })
//
// // services/movieService.ts
// import { tmdbAPI } from '@/lib/server/tmdbAPI'
//
// export const movieService = {
//     async getMovies(page: number = 1, genreId?: string) {
//         const res = await tmdbAPI.get('/discover/movie', {
//             params: { page, with_genres: genreId }
//         })
//         return res.data.results
//     },
//
//     async searchMovies(query: string, page: number = 1) {
//         const res = await tmdbAPI.get('/search/movie', {
//             params: { query, page }
//         })
//         return res.data.results
//     },
//
//     async getMovieById(id: string) {
//         const res = await tmdbAPI.get(`/movie/${id}`)
//         return res.data
//     }
// }
//
// // services/genreService.ts
// import { tmdbAPI } from '@/lib/server/tmdbAPI'
//
// export const genreService = {
//     async getGenres() {
//         const res = await tmdbAPI.get('/genre/movie/list')
//         return res.data.genres
//     }
// }
//
// // app/page.tsx
// import { movieService } from '@/services/movieService'
// import { genreService } from '@/services/genreService'
// import { MoviesList } from '@/components/MoviesList'
// import GenreFilter from '@/components/GenreFilter'
//
// export default async function HomePage({ searchParams }: { searchParams?: { [key: string]: string } }) {
//     const query = searchParams?.query || ''
//     const genre = searchParams?.genre || ''
//     const page = parseInt(searchParams?.page || '1', 10)
//
//     const [movies, genres] = await Promise.all([
//         query ? movieService.searchMovies(query, page) : movieService.getMovies(page, genre),
//         genreService.getGenres()
//     ])
//
//     return (
//         <main className="p-4">
//             <h1 className="text-2xl font-bold mb-4">Фільми</h1>
//             <GenreFilter genres={genres} />
//             <MoviesList movies={movies} />
//         </main>
//     )
// }
//
// // components/GenreFilter.tsx
// 'use client'
//
// import { useSearchParams, useRouter } from 'next/navigation'
//
// export default function GenreFilter({ genres }: { genres: { id: number; name: string }[] }) {
//     const router = useRouter()
//     const searchParams = useSearchParams()
//
//     const handleClick = (genreId: number) => {
//         const params = new URLSearchParams(searchParams.toString())
//         params.set('genre', genreId.toString())
//         router.push(`/?${params.toString()}`)
//     }
//
//     return (
//         <div className="flex gap-2 mb-4 overflow-auto">
//             {genres.map(g => (
//                 <button
//                     key={g.id}
//                     onClick={() => handleClick(g.id)}
//                     className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
//                 >
//                     {g.name}
//                 </button>
//             ))}
//         </div>
//     )
// }
//
// // components/MoviesList.tsx
// 'use client'
//
// import { FC } from 'react'
// import { MovieCard } from './MovieCard'
//
// interface MoviesListProps {
//     movies: {
//         id: number
//         title: string
//         poster_path: string
//         vote_average: number
//     }[]
// }
//
// export const MoviesList: FC<MoviesListProps> = ({ movies }) => {
//     return (
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             {movies.map(movie => (
//                 <MovieCard key={movie.id} movie={movie} />
//             ))}
//         </div>
//     )
// }
//
// // components/MovieCard.tsx
// 'use client'
//
// import Image from 'next/image'
// import Link from 'next/link'
//
// export const MovieCard = ({ movie }: { movie: any }) => {
//     return (
//         <Link href={`/movie/${movie.id}`}>
//             <div className="bg-white shadow rounded p-2 hover:scale-105 transition">
//                 <Image
//                     src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//                     alt={movie.title}
//                     width={300}
//                     height={450}
//                     className="rounded"
//                 />
//                 <div className="mt-2">
//                     <p className="font-bold">{movie.title}</p>
//                     <p className="text-yellow-600">⭐ {movie.vote_average}</p>
//                 </div>
//             </div>
//         </Link>
//     )
// }
//
// // .env.local
// // TMDB_ACCESS_TOKEN=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
