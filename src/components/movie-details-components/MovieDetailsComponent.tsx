import React from 'react';
import {movieService} from "@/services/api.service";
import CountryProductComponent from "@/components/movie-details-components/CountryProductComponent";
import CompanyComponent from "@/components/movie-details-components/CompanyComponent";
import LanguageComponent from "@/components/movie-details-components/LanguageComponent";
import StarsRating from "@/components/renting-component/RentingComponent";
import Image from "next/image";
import MenuComponent from "@/components/menu-component/MenuComponent";
import BackComponent from "@/components/menu-component/BackComponent";

type Props = {
    params: Promise<{ id: string }>
}

const MovieDetailsComponent = async ({params}: Props) => {
    const paramsDetails = await params
    const movie = await movieService.getMovieById(paramsDetails.id)

    return (
        <div>
            <div className={"p-3 bg-gray-100 flex gap-6"}>
                <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className={'w-150'}
                       width={'900'} height={'100'}/>
                <div>
                    <h1 className={"text-4xl underline"}>{movie.title}</h1>
                    <p>{movie.tagline}</p>
                    <div className={"mt-2 flex gap-2 flex-wrap"}>
                        {movie.genres.map(g => (
                            <span key={g.id} className={"text-sm bg-gray-600 text-white px-2 py-1 rounded-full"}>
                            {g.name}
                        </span>
                        ))}
                    </div>
                    <div className={"mt-4 flex"}>
                        <StarsRating item={movie.vote_average}/>
                        <p className={'flex ml-4'}>
                            <Image src="/icons/icons8-like-24.png" alt="icon" width={'20'} height={'10'}/>
                            <span className={'text-sm ml-1'}>{movie.vote_count}</span>
                        </p>
                    </div>
                    <div className={"mt-4 bg-gray-300"}>Description:<p>{movie.overview}</p></div>
                    <p className={'mt-4'}>Budget: {movie.budget} $</p>
                    <p>Revenue: {movie.revenue} $</p>
                    <p className={'mt-4 bg-gray-300'}>Country: {movie.production_countries.map((country, index) =>
                        (<CountryProductComponent key={index} country={country}/>))}</p>
                    <p className={'mt-4'}>Product: {movie.production_companies.map(company =>
                        (<CompanyComponent key={company.id} item={company}/>))}</p>
                    <p className={'mt-4 bg-gray-300'}>Language: {movie.spoken_languages.map((language, index) =>
                        (<LanguageComponent key={index} language={language}/>))}</p>
                    <p className={'mt-4'}>Release date: {movie.release_date}</p>
                    <p className={'mt-4 bg-gray-300'}>Runtime: {movie.runtime} min</p>
                </div>
            </div>
            <BackComponent/>
        </div>

    );
};

export default MovieDetailsComponent;