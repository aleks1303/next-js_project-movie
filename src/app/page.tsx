import React from 'react';
import MoviesComponent from "@/components/movie-components/MoviesComponent";
import GenresComponent from "@/components/genres-components/genresComponent";
import PaginationComponent from "@/components/pagination-component/PaginationComponent";

type Props = {
    searchParams: { [key: string]: string | string[] | undefined }
}

const HomePage = ( {searchParams}:Props) => {

    const page = typeof searchParams.page === 'string' ? searchParams.page : '1';
    const genre = typeof searchParams.genre === 'string' ? searchParams.genre : '';
    return (
        <div>
            <header>

            </header>
            <div>
                <PaginationComponent/>
            </div>
            <div className={"flex min-h-screen"}>
                <aside className={"w-64 sticky top-0 h-screen overflow-y-auto border-r border-gray-700"}><GenresComponent selectedGenreId={genre}/></aside>
                <main className={"flex-1 p-6 overflow-y-auto"}><MoviesComponent genre={genre} page={page}/></main>
            </div>

        </div>
    );
};

export default HomePage;