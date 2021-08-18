
const simularMoviesReducer = (state = [], action) => {
    switch (action.type) {
        case "GET_SIMULAR_MOVIES":
            return state = [...state, action.payload];
        case "DELETE_SIMULAR_MOVIES":
            return state = [];
        default:
            return state;
    }
}

export default simularMoviesReducer;
