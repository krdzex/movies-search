import React from 'react';
import { useSelector } from 'react-redux';

const MovieDetails = () => {
    const movieDetails = useSelector(state => state.movieDetails);

    return (

        <div className="detailsWrapper">
            <div className="details">DETAILS</div>
            <div className="detailsText">
                <p><b>Movie genres</b>: {movieDetails.ganres.toString()}</p>
                <p><b>Release in BiH</b>: {movieDetails.releases}</p>
                <p><b>Awards for this movie</b>: {movieDetails.awards}</p>
                <p><b>Review</b>: {movieDetails.reviews}</p>
                <p><b>Plot</b>: {movieDetails.plot}</p>
            </div>
        </div>

    );
};

export default MovieDetails;