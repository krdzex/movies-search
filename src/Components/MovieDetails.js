import React from 'react';
import { useSelector } from 'react-redux';

const MovieDetails = () => {
    const movieDetails = useSelector(state => state.movieDetails);
    return (
     
            <div className="detailsWrapper">
                <div className="details">DETAILS</div>
                <div className="detailsText">
                    <p><b>Movie genres</b>: {movieDetails.ganres.toString()}</p>
                </div>
            </div>

    );
};

export default MovieDetails;