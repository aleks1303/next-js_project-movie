'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {IMovies} from '@/models/IMovies'
import StarsRating from '@/components/renting-component/RentingComponent'

interface Props {
    item: IMovies
    genreNames: string[]
}

const MovieComponent = ({ item, genreNames }: Props) => {
    return (
        <Link href={`/movie/details/${item.id}`}>
            <div className="bg-black text-white p-2 rounded h-135">
                <Image
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    alt={item.title}
                    width={270}
                    height={450}
                    className="rounded"
                />
                <p className="text-lg mt-2">{item.title}</p>
                <p className="text-sm">{genreNames.join(', ')}</p>
                <StarsRating item={item.vote_average}/>
                <div className="flex items-center gap-1 mt-2 text-sm">
                    <Image src="/icons/icons8-white-like-24.png" alt="like" width={16} height={16}/>
                    <span>{item.vote_count}</span>
                </div>
            </div>
        </Link>
    )
}

export default MovieComponent