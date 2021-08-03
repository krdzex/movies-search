import React from 'react';

const MovieCover = ({ movieInfo }) => {
    const movieImageUrl = movieInfo.i.imageUrl;
    const movieTitle = movieInfo.l;
    return (
        <div className="movieCover">
            <img src={movieImageUrl} alt="movie tumbnail" style={{ width: "100%", height: "367px", borderRadius: "10px 10px 0px 0px",objectFit:"cover"}}></img>
            <p className="title">{movieTitle}</p>
        </div >
    );
};

export default MovieCover;