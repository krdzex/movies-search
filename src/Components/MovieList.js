import React from 'react';
import { useSelector } from 'react-redux';
import MovieCover from './MovieCover';

const MovieList = () => {
    const movieArray = useSelector(state => state.allMovies);
    return (<div>


        <div className="grid">
            {movieArray.map((movie, index) => {
                return <MovieCover movieInfo={movie} key={index} />
            })}
        </div>
        <div className="overlay"></div>
    </div>
    );
};

export default MovieList;