const selectedMovieReducer = (state = "", action) => {
    switch (action.type) {
        case "GET_SELECTED_MOVIE":
            return state = action.payload;
        default:
            return state;
    }
}

export default selectedMovieReducer;
