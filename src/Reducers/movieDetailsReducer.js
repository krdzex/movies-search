const movieDetailsReducer = (state = { ganres: [], releases: [], reviews: [],awards: [] }, action) => {
    switch (action.type) {
        case "GET_GANRES":
            return state = { ...state, ganres: action.payload };
        case "GET_RELEASES":
            return state = { ...state, releases: action.payload  };
        case "GET_REVIEWS":
            return state = { ...state, reviews: action.payload };
        case "GET_AWARDS":
            return state = { ...state, awards: action.payload };
        default:
            return state;
    }
}



export default movieDetailsReducer;