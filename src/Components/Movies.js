import React from 'react';
import { useSelector } from 'react-redux';
import MainScreen from './MainScreen';
import DetailsScreen from './DetailsScreen';
import Loader from './Loader';

const Movies = () => {
    const isMovieSelected = useSelector(state => state.selectedMovie)
    const loading = useSelector(state => state.loadingMoviesReducer)
    return (
        <div>
            {isMovieSelected === "" ? <MainScreen /> : (loading ? <Loader /> : <DetailsScreen />)}
        </div>
    );
};

export default Movies;