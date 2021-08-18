import axios from "axios";


const getSearchMovies = async (options, callback) => {
    await axios.request(options)
        .then(response => callback(response.data.d))
        .catch(reason => {
            console.log(reason);
            callback(false);
        })
}

const getSelectedMovieInfo = async (options, callback) => {
    await axios.request(options)
        .then(response => callback(response.data))
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





export { getSearchMovies, getSelectedMovieInfo, getSimularIds, getSimularMoviesDetails }