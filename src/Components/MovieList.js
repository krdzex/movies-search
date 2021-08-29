import React from 'react';
import MovieCover from './MovieCover';


const MovieList = ({ movieArray, classNameInfo }) => {

    return (<div>
        {movieArray === false ? <div className="errorMessage">We dont have movies with that name. Please try another movie!</div> : <div className={"grid " + classNameInfo}>
            {movieArray.map((movie, index) => {
                return <MovieCover movieInfo={movie} key={index} classInfo={"underSimular"} />
            })}
        </div>}
    </div>
    );
};

export default MovieList;