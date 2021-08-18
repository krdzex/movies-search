const allMovies = (state = [], action) => {
    switch (action.type) {
        case "ALL_MOVIES":
            return state = [...state, action.payload];
        case "DELETE_ALL_MOVIES":
            return state = [];
        default:
            return state;
    }
}

export default allMovies;
