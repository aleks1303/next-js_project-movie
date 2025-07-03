import React from 'react';
import MoviesComponent from "@/components/movie-components/MoviesComponent";
import GenresComponent from "@/components/genres-components/genresComponent";
import PaginationComponent from "@/components/pagination-component/PaginationComponent";
import SearchComponent from "@/components/search-component/SearchComponent";
import MenuComponent from "@/components/menu-component/MenuComponent";

type Props = {
    searchParams: Promise<{
        page?: string,
        genre?: string,
        [key: string]: string | string[] | undefined,
        query?: string
    }>
}

const HomePage = async ({searchParams}: Props) => {
    const params = await searchParams
    const page = typeof params.page === 'string' ? params.page : '1';
    const genre = typeof params.genre === 'string' ? params.genre : '';
    const query = typeof params.query === 'string' ? params.query : '';
    return (
        <div>
            <header>

                <MenuComponent/>
                <SearchComponent query={query}/>
            </header>
            <div>
                <PaginationComponent/>
            </div>
            <div className={"flex min-h-screen"}>
                <aside className={"w-64 sticky top-0 h-screen overflow-y-auto border-r border-gray-700"}>
                    <GenresComponent selectedGenreId={genre}/></aside>
                <main className={"flex-1 p-6 overflow-y-auto"}><MoviesComponent genre={genre} page={page}/></main>
            </div>

        </div>
    );
};

export default HomePage;