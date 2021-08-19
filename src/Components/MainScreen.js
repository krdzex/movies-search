import React from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';
import Loader from './Loader';
import MovieList from './MovieList';

const MainScreen = () => {
    const movieArray = useSelector(state => state.allMovies);
    const loading = useSelector(state => state.loadingMoviesReducer)

    return (
        <div>
            <Header />
            {loading ? <Loader /> : <MovieList movieArray={movieArray} />}
        </div>
    );
};

export default MainScreen;