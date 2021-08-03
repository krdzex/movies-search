const inputReducer = (state = "", action) => {
    switch (action.type) {
        case "CHANGE_INPUT":
            return state = action.payload;
        default:
            return state;
    }
}

export default inputReducer;
