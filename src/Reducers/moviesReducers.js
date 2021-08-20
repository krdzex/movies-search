const allMovies = (state = [], action) => {
    switch (action.type) {
        case "ALL_MOVIES":
            return state = [...state, action.payload];
        case "DELETE_ALL_MOVIES":
            return state = [];
        case "NO_MOVIES":
            return state = "We dont have movies with that name. Please try another movie!";

        default:
            return state;
    }
}

export default allMovies;
