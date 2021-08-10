import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSimularMovies } from '../Actions';
import Header from './Header';
import MovieCover from './MovieCover';
import MovieDetails from './MovieDetails';
import axios from 'axios';

const DetailsScreen = () => {
    const selectedMovie = useSelector(state => state.selectedMovie)
    const simularMoviesId = useSelector(state => state.simularMoviesId)
    const dispatch = useDispatch()
    /*useEffect(() => {
        console.log(simularMoviesId)
        let simularMovies = [];
        for (let i = 0; i < 5; i++) {
            let options = {
                method: 'GET',
                url: 'https://imdb8.p.rapidapi.com/title/get-details',
                params: { tconst: simularMoviesId[i].replace(/'/g, "") },
                headers: {
                    'x-rapidapi-key': 'a9bcced616mshe183b5391a313c5p14211djsnaeb040e4b0ec',
                    'x-rapidapi-host': 'imdb8.p.rapidapi.com'
                }
            };

            axios.request(options).then(response =>
                simularMovies.push(response.data)
            ).catch(reason =>
                console.error(reason)
            );
        }

        console.log(simularMovies)
        //dispatch(getSimularMovies(simularMovies))

    }, [simularMoviesId])*/
    return (
        <div>
            <Header />
            <div className="detailsScreenWrapper">
                <MovieCover movieInfo={selectedMovie} classInfo={"selectedCover"} />
                <MovieDetails />
            </div>
            <div className="">
                Movies like this
            </div>
        </div>
    );
};

export default DetailsScreen;