import React from 'react';
import MoviesComponent from "@/components/movie-components/MoviesComponent";
import GenresComponent from "@/components/genres-components/genresComponent";

const HomePage = () => {
    return (
        <div>
            <div className={"flex min-h-screen"}>
                <aside className={"w-64 sticky top-0 h-screen overflow-y-auto border-r border-gray-700"}><GenresComponent/></aside>
                <main className={"flex-1 p-6 overflow-y-auto"}><MoviesComponent/></main>
            </div>

        </div>
    );
};

export default HomePage;