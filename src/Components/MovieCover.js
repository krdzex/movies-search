import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteSimularMovies, getGanres, getSelectedMovie, getSimularMovies } from '../Actions';
import { getSelectedMovieInfo, getSimularIds } from "../Api/apiService"
import axios from 'axios';

const MovieCover = ({ movieInfo, classInfo }) => {
    const dispatch = useDispatch();
    const movieImageUrl = movieInfo.image.url;
    const movieTitle = movieInfo.title;

    let genresOptions = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-genres',
        params: { tconst: movieInfo.id.split("/")[2].replace(/'/g, "") },
        headers: {
            'x-rapidapi-key': 'ff4e74efc9msh8c41308b3ec305dp1c2665jsn956ffd5c2b8f',
            'x-rapidapi-host': 'imdb8.p.rapidapi.com'
        }
    };

    let simularMoviesIdOptions = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-more-like-this',
        params: { tconst: movieInfo.id.split("/")[2].replace(/'/g, "") },
        headers: {
            'x-rapidapi-key': 'ff4e74efc9msh8c41308b3ec305dp1c2665jsn956ffd5c2b8f',
            'x-rapidapi-host': 'imdb8.p.rapidapi.com'
        }
    };

    const onMovieClick = () => {
        dispatch(deleteSimularMovies())
        dispatch(getSelectedMovie(movieInfo))
        let simularMoviesId;
        getSelectedMovieInfo(genresOptions, data => {
            dispatch(getGanres(data))
        }).then(() =>
            getSimularIds(simularMoviesIdOptions, data => {
                simularMoviesId = data;
            })
        ).then(async () => {
            for (let i = 0; (simularMoviesId.lenght < 10 ? i < simularMoviesId.lenght : i < 10); i++) {
                let options = {
                    method: 'GET',
                    url: 'https://imdb8.p.rapidapi.com/title/get-details',
                    params: { tconst: simularMoviesId[i].replace(/'/g, "") },
                    headers: {
                        'x-rapidapi-key': 'ff4e74efc9msh8c41308b3ec305dp1c2665jsn956ffd5c2b8f',
                        'x-rapidapi-host': 'imdb8.p.rapidapi.com'
                    }
                };
                await axios.request(options).then(response =>
                    dispatch(getSimularMovies(response.data))
                ).catch(reason =>
                    console.error(reason)
                );
            }
        }
        )
    }
    return (
        <div className={"movieCover " + classInfo} onClick={onMovieClick}>
            <img src={movieImageUrl} alt="movie tumbnail" style={{ width: "100%", height: "367px", borderRadius: "10px 10px 0px 0px", objectFit: "cover" }}></img>
            <p className="title">{movieTitle}</p>
        </div >
    );
};

export default MovieCover;