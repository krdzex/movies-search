const allMovies = (state = [], action) => {
    switch (action.type) {
        case "ALL_MOVIES":
            return state = action.payload;
        default:
            return state;
    }
}

export default allMovies;
