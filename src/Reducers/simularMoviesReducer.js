const simularMoviesReducer = (state = [], action) => {
    switch (action.type) {
        case "GET_SIMULAR_MOVIES":
            return state = action.payload;
        default:
            return state;
    }
}

export default simularMoviesReducer;
