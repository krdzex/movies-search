import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteSimularMovies, getAwards, getGanres, getPlot, getReleases, getReviews, getSelectedMovie, getSimularMovies, loading, stopLoading } from '../Actions';
import { getSelectedMovieAwards, getSelectedMovieGanre, getSelectedMoviePlot, getSelectedMovieReleases, getSelectedMovieReview, getSimularIds } from "../Api/apiService"
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
            'x-rapidapi-key': 'de4a4b3d96mshcb05eebdc8a5708p1c9a1fjsnf84f820f468d',
            'x-rapidapi-host': 'imdb8.p.rapidapi.com'
        }
    };

    let simularMoviesIdOptions = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-more-like-this',
        params: { tconst: movieInfo.id.split("/")[2].replace(/'/g, "") },
        headers: {
            'x-rapidapi-key': 'de4a4b3d96mshcb05eebdc8a5708p1c9a1fjsnf84f820f468d',
            'x-rapidapi-host': 'imdb8.p.rapidapi.com'
        }
    };

    var releasesOptions = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-releases',
        params: { tconst: movieInfo.id.split("/")[2].replace(/'/g, "") },
        headers: {
            'x-rapidapi-host': 'imdb8.p.rapidapi.com',
            'x-rapidapi-key': 'de4a4b3d96mshcb05eebdc8a5708p1c9a1fjsnf84f820f468d'
        }
    };


    var awardsOptions = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-awards',
        params: { tconst: movieInfo.id.split("/")[2].replace(/'/g, "") },
        headers: {
            'x-rapidapi-host': 'imdb8.p.rapidapi.com',
            'x-rapidapi-key': 'de4a4b3d96mshcb05eebdc8a5708p1c9a1fjsnf84f820f468d'
        }
    };

    var reviewOptions = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-reviews',
        params: { tconst: movieInfo.id.split("/")[2].replace(/'/g, ""), currentCountry: 'US', purchaseCountry: 'US' },
        headers: {
            'x-rapidapi-host': 'imdb8.p.rapidapi.com',
            'x-rapidapi-key': 'de4a4b3d96mshcb05eebdc8a5708p1c9a1fjsnf84f820f468d'
        }
    };

    var plotOptions = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-plots',
        params: { tconst: movieInfo.id.split("/")[2].replace(/'/g, "") },
        headers: {
            'x-rapidapi-host': 'imdb8.p.rapidapi.com',
            'x-rapidapi-key': 'de4a4b3d96mshcb05eebdc8a5708p1c9a1fjsnf84f820f468d'
        }
    };

    const onMovieClick = () => {
        dispatch(loading())
        dispatch(deleteSimularMovies())
        dispatch(getSelectedMovie(movieInfo))
        let simularMoviesId;
        getSelectedMovieGanre(genresOptions, data => {
            dispatch(getGanres(data))
        }).then(async() => {
            await getSelectedMovieReleases(releasesOptions, data => {
                dispatch(getReleases(data));
            })
        }).then(async() => {
            await getSelectedMovieAwards(awardsOptions, data => {
                dispatch(getAwards(data))
            })
        }).then(async () => {
            await getSelectedMovieReview(reviewOptions, data => {
                dispatch(getReviews(data))
            })
        }).then(async() => {
            await getSelectedMoviePlot(plotOptions, data => {
                dispatch(getPlot(data))
            })
        }).then(async () =>
            await getSimularIds(simularMoviesIdOptions, data => {
                simularMoviesId = data;
            })
        ).then(async () => {
            console.log(simularMoviesId)
            for (let i = 0; (simularMoviesId.lenght < 10 ? i < simularMoviesId.lenght : i < 10); i++) {
                let options = {
                    method: 'GET',
                    url: 'https://imdb8.p.rapidapi.com/title/get-details',
                    params: { tconst: simularMoviesId[i].replace(/'/g, "") },
                    headers: {
                        'x-rapidapi-key': 'de4a4b3d96mshcb05eebdc8a5708p1c9a1fjsnf84f820f468d',
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
        ).then(() => {
            dispatch(stopLoading())
        })
    }
    return (
        <div className={"movieCover " + classInfo} onClick={onMovieClick}>
            <img src={movieImageUrl} alt="movie tumbnail" style={{ width: "100%", height: "367px", borderRadius: "10px 10px 0px 0px", objectFit: "cover" }}></img>
            <p className="title">{movieTitle}</p>
        </div >
    );
};

export default MovieCover;