import React from 'react';
import MovieDetailsComponent from "@/components/movie-details-components/MovieDetailsComponent";
type Props = {
    params: {id:string}
}

const DetailsByIdPage = ({params}:Props) => {


    return (
        <div>
            <MovieDetailsComponent params={params}/>
        </div>
    );
};

export default DetailsByIdPage;