import {IGenres} from "@/models/IGenres";
import {IProduction_companies} from "@/models/IProduction_companies";
import {IProduction_countries} from "@/models/IProduction_countries";
import {ISpoken_language} from "@/models/ISpoken_language";
import {IMovie} from "@/models/IMovie";

export interface IMovies extends IMovie{
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection?: number;
    budget: number;
    genres: IGenres[];
    homepage: string;
    id: number;
    imdb_id: string;
    origin_country: string[];
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: IProduction_companies[];
    production_countries: IProduction_countries[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: ISpoken_language[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}