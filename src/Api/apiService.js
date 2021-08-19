import axios from "axios";


const getSearchMovies = async (options, callback) => {
    await axios.request(options)
        .then(response => callback(response.data.d))
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
        .then(response =>
            callback(response.data.featuredUserReview.review.reviewText)

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
            callback(response.data.plots[0].text)
        })
        .catch(reason => {
            console.log(reason);
            callback(false);
        })
}





export { getSearchMovies, getSelectedMovieGanre, getSimularIds, getSimularMoviesDetails, getSelectedMovieReleases, getSelectedMovieAwards, getSelectedMovieReview, getSelectedMoviePlot }