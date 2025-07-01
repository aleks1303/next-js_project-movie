import React from 'react';
import MovieDetailsComponent from "@/components/movie-details-components/MovieDetailsComponent";
type Props = {
    params: Promise<{id:string}>
}

const DetailsByIdPage = async ({params}:Props) => {


    return (
        <div>
            <MovieDetailsComponent params={params}/>
        </div>
    );
};

export default DetailsByIdPage;