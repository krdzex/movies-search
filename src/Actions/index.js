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

export const getSelectedMovie = (selectedMovie) => {
    return {
        type: "GET_SELECTED_MOVIE",
        payload: selectedMovie
    }
}

export const getGanres = (ganres) => {
    return {
        type: "GET_GANRES",
        payload: ganres
    }
}


export const getReleases = (releases) => {
    return {
        type: "GET_RELEASES",
        payload: releases
    }
}

export const getReviews = (reviews) => {
    return {
        type: "GET_REVIEWS",
        payload: reviews
    }
}

export const getAwards = (awards) => {
    return {
        type: "GET_AWARDS",
        payload: awards
    }
}

export const getSimularMoviesId = (simularMoviesId) => {
    return {
        type: "GET_SIMULAR_MOVIES_ID",
        payload: simularMoviesId
    }
}

export const getSimularMovies = (simularMovies) => {
    return {
        type: "GET_SIMULAR_MOVIES",
        payload: simularMovies
    }
}

