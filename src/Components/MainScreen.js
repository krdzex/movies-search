import React from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';
import MovieList from './MovieList';

const MainScreen = () => {
    const movieArray = useSelector(state => state.allMovies);

    return (
        <div>
            <Header />
            <MovieList movieArray={movieArray} />
        </div>
    );
};

export default MainScreen;