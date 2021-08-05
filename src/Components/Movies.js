import React from 'react';
import { useSelector } from 'react-redux';
import MainScreen from './MainScreen';
import DetailsScreen from './DetailsScreen';

const Movies = () => {
    const isMovieSelected = useSelector(state => state.selectedMovie)
    return (
        <div>
            {isMovieSelected === "" ? <MainScreen /> : <DetailsScreen />}
        </div>
    );
};

export default Movies;