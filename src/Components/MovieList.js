import React from 'react';
import MovieCover from './MovieCover';

const MovieList = ({ movieArray }) => {
    return (<div>
        <div className="grid">
            {movieArray.map((movie, index) => {
                return <MovieCover movieInfo={movie} key={index} />
            })}
        </div>
    </div>
    );
};

export default MovieList;