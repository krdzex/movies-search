const loadingMoviesReducer = (state = false, action) => {
    switch (action.type) {
        case "LOADING":
            return !state;
        case "STOP_LOADING":
            return state = false;
        default:
            return state;
    }
}



export default loadingMoviesReducer;