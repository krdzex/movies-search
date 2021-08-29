import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const MovieDetails = () => {
    const movieDetails = useSelector(state => state.movieDetails);

    const [shorterVersion, setShorterVersion] = useState(true);


    const extendDetails = () => {
        if (shorterVersion) {
            setShorterVersion(false);
        } else {
            setShorterVersion(true);
        }
    }

    return (

        <div className="detailsWrapper">
            <div className="details">DETAILS</div>
            <div className="detailsText">
                <p><b>Movie genres</b>: {movieDetails.ganres.toString()}</p>
                <p><b>Release in BiH</b>: {movieDetails.releases}</p>
                <p><b>Awards for this movie</b>: {movieDetails.awards}</p>
                <p className={shorterVersion ? "reviews" : ""}><b>Review</b>: {movieDetails.reviews ? movieDetails.reviews : "No reviews"}</p>
                <p className={shorterVersion ? "plot" : ""}><b>Plot</b>: {movieDetails.plot ? movieDetails.plot : "No plot"}</p>
                <button className="buttonForMore" onClick={extendDetails}>{shorterVersion ? "Press for more details" : "Press for less details"}</button>
            </div>
        </div>

    );
};

export default MovieDetails;