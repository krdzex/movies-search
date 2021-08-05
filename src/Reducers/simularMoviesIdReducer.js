const simularMoviesIdReducer = (state = [], action) => {
    switch (action.type) {
        case "GET_SIMULAR_MOVIES_ID":
            return state = action.payload;
        default:
            return state;
    }
}

export default simularMoviesIdReducer;
