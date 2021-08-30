import axios from "axios";


const getSearchMovies = async (options, callback) => {
    await axios.request(options)
        .then(response => {
            let realMovies = [];
            if (response.data.results !== undefined) {
                for (let i = 0; i < response.data.results.length; i++) {
                    if (!('disambiguation' in response.data.results[i]) && !('akas' in response.data.results[i]) && !('knownFor' in response.data.results[i]) && !('episode' in response.data.results[i])) {
                        realMovies.push(response.data.results[i])
                    }
                }
                callback(realMovies)
            } else {
                callback(false)
            }
        })
        .catch(reason => {
            console.log(reason);
            callback(false);
        })
}
const getSelectedMovieGanre = async (options, callback) => {
    await axios.request(options)
        .then(response => callback(response.data))
        .catch(reason => {
            console.log(reason);
            callback(false);
        })
}

const getSelectedMovieReleases = async (options, callback) => {
    await axios.request(options)
        .then(response => {
            for (let i = 0; i < response.data.length; i++) {
                if (response.data[i].region === "BA") {
                    callback(response.data[i].date)
                    return;
                }
            }
            callback("No releases date for BiH")
        })
        .catch(reason => {
            console.log(reason);
            callback(false);
        })
}

const getSelectedMovieAwards = async (options, callback) => {
    await axios.request(options)
        .then(response => {
            if (response.data.resource.awards === undefined) {
                callback("This movie dont have any awards")
                return
            }
            callback(response.data.resource.awards.length)
        }
        )
        .catch(reason => {
            console.log(reason);
            callback(false);
        })
}

const getSelectedMovieReview = async (options, callback) => {
    await axios.request(options)
        .then(response => {
            if (response.data.featuredUserReview.review !== undefined) {
                callback(response.data.featuredUserReview.review.reviewText)
            } else {
                callback(false);
            }
        }
        )
        .catch(reason => {
            console.log(reason);
            callback(false);
        })
}




const getSimularIds = async (options, callback) => {
    await axios.request(options)
        .then(response => {
            let simularMovies = [];
            if (response.data.length > 10) {
                for (let i = 0; i < 10; i++) {
                    simularMovies.push(response.data[i].split("/")[2])
                }
            } else {
                for (let i = 0; i < response.data.length; i++) {
                    simularMovies.push(response.data[i].split("/")[2])
                }
            }
            callback(simularMovies)
        })
        .catch(reason => {
            console.log(reason);
            callback(false);
        })
}

const getSimularMoviesDetails = async (options, callback) => {
    await axios.request(options)
        .then(response => {
            let simularMovies = [];
            if (response.data.length > 10) {
                for (let i = 0; i < 10; i++) {
                    simularMovies.push(response.data[i].split("/")[2])
                }
            } else {
                for (let i = 0; i < response.data.length; i++) {
                    simularMovies.push(response.data[i].split("/")[2])
                }
            }
            callback(simularMovies)
        })
        .catch(reason => {
            console.log(reason);
            callback(false);
        })
}

const getSelectedMoviePlot = async (options, callback) => {
    await axios.request(options)
        .then(response => {
            if (response.data.plots.length !== 0) {
                callback(response.data.plots[0].text)
            } else {
                callback(false);
            }
        })
        .catch(reason => {
            console.log(reason);
            callback(false);
        })
}





export { getSearchMovies, getSelectedMovieGanre, getSimularIds, getSimularMoviesDetails, getSelectedMovieReleases, getSelectedMovieAwards, getSelectedMovieReview, getSelectedMoviePlot }