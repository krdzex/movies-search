import React from 'react';
import { useDispatch } from 'react-redux';
import { getGanres, getSelectedMovie, getSimularMovies, getSimularMoviesId } from '../Actions';
import axios from 'axios';

const MovieCover = ({ movieInfo, classInfo }) => {
    const dispatch = useDispatch();
    const movieImageUrl = movieInfo.i.imageUrl;
    const movieTitle = movieInfo.l;

    const onMovieClick = async () => {
        dispatch(getSelectedMovie(movieInfo))

        let options = {
            method: 'GET',
            url: 'https://imdb8.p.rapidapi.com/title/get-genres',
            params: { tconst: movieInfo.id },
            headers: {
                'x-rapidapi-key': '56580db411mshaeb26ec4a5b81f0p15ec1ejsn36e21f2f65f9',
                'x-rapidapi-host': 'imdb8.p.rapidapi.com'
            }
        };

        await axios.request(options).then(response =>
            dispatch(getGanres(response.data))
        ).catch(error =>
            console.error(error)
        );

        let options2 = {
            method: 'GET',
            url: 'https://imdb8.p.rapidapi.com/title/get-more-like-this',
            params: { tconst: movieInfo.id },
            headers: {
                'x-rapidapi-key': '56580db411mshaeb26ec4a5b81f0p15ec1ejsn36e21f2f65f9',
                'x-rapidapi-host': 'imdb8.p.rapidapi.com'
            }
        };
        axios.request(options2).then(response => {
            let simularMovies = []
            let simularMovies2 = []
            if (response.data.length > 10) {
                for (let i = 0; i < 10; i++) {
                    simularMovies.push(response.data[i].split("/")[2])
                }
            } else {
                for (let i = 0; i < response.data.length; i++) {
                    simularMovies.push(response.data[i].split("/")[2])
                }
            }
            for (let i = 0; i < 4; i++) {
                let options = {
                    method: 'GET',
                    url: 'https://imdb8.p.rapidapi.com/title/get-details',
                    params: { tconst: simularMovies[i].replace(/'/g, "") },
                    headers: {
                        'x-rapidapi-key': '56580db411mshaeb26ec4a5b81f0p15ec1ejsn36e21f2f65f9',
                        'x-rapidapi-host': 'imdb8.p.rapidapi.com'
                    }
                };

                axios.request(options).then(response =>
                    dispatch(getSimularMovies(response.data))
                ).catch(reason =>
                    console.error(reason)
                );
            }
            dispatch(getSimularMoviesId(simularMovies))
        }
        ).catch(error =>
            console.error(error)
        );


    }
    return (
        <div className={"movieCover " + classInfo} onClick={onMovieClick}>
            <img src={movieImageUrl} alt="movie tumbnail" style={{ width: "100%", height: "367px", borderRadius: "10px 10px 0px 0px", objectFit: "cover" }}></img>
            <p className="title">{movieTitle}</p>
        </div >
    );
};

export default MovieCover;