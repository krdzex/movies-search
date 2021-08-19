import { combineReducers } from "redux";
import allMovies from "./moviesReducers";
import inputReducer from "./inputReducer";
import selectedMovieReducer from "./selectedMovieReducer";
import movieDetailsReducer from "./movieDetailsReducer";
import simularMoviesReducer from "./simularMoviesReducer";
import loadingMoviesReducer from "./loadingMoviesReducer";

const allReducer = combineReducers({
    allMovies,
    inputText: inputReducer,
    selectedMovie: selectedMovieReducer,
    movieDetails: movieDetailsReducer,
    simularMovies: simularMoviesReducer,
    loadingMoviesReducer
})
export default allReducer