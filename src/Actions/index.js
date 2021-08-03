export const getInputText = (text) => {
    return {
        type: "CHANGE_INPUT",
        payload: text
    }
}

export const getAllMovies = (movies) => {
    return {
        type: "ALL_MOVIES",
        payload: movies
    }
}

