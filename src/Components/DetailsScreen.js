import React from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';
import MovieCover from './MovieCover';
import MovieDetails from './MovieDetails';
import MovieList from './MovieList';

const DetailsScreen = () => {
    const selectedMovie = useSelector(state => state.selectedMovie)
    const movieArray = useSelector(state => state.simularMovies)
    return (
        <div>
            <Header />
            <div className="detailsScreenWrapper">
                <MovieCover movieInfo={selectedMovie} classInfo={"selectedCover"} />
                <MovieDetails />
            </div>
            <div className="titleSimular">
                Movies like this:
            </div>
            {movieArray.length !== 0 ? <MovieList movieArray={movieArray} classNameInfo="simularMovies" /> : <h2 style={{ color: "white" }}>No simular movies</h2>}
        </div>
    );
};

export default DetailsScreen;