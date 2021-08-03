import { combineReducers } from "redux";
import allMovies from "./moviesReducers";
import inputReducer from "./inputReducer";

const allReducer = combineReducers({
    allMovies,
    inputText: inputReducer
})
export default allReducer