import { combineReducers } from "redux";
import allMovies from "./moviesReducers";
import inputReducer from "./inputReducer";
import selectedMovieReducer from "./selectedMovieReducer";
import movieDetailsReducer from "./movieDetailsReducer";
import simularMoviesIdReducer from "./simularMoviesIdReducer";
import simularMoviesReducer from "./simularMoviesReducer";

const allReducer = combineReducers({
    allMovies,
    inputText: inputReducer,
    selectedMovie: selectedMovieReducer,
    movieDetails: movieDetailsReducer,
    simularMoviesId: simularMoviesIdReducer,
    simularMovies: simularMoviesReducer
})
export default allReducer