import React from 'react';
import MovieCover from './MovieCover';


const MovieList = ({ movieArray, classNameInfo }) => {

    return (<div>
        {typeof (movieArray) === "string" ? <div className="errorMessage">{movieArray}</div> : <div className={"grid " + classNameInfo}>
            {movieArray.map((movie, index) => {
                return <MovieCover movieInfo={movie} key={index} classInfo={"underSimular"} />
            })}
        </div>}
    </div>
    );
};

export default MovieList;