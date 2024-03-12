const renderTarjetas = require("./renderTarjetas");
const axios = require("axios");

const getMovies = async () => {
    try {
        const response = await axios.get("https://students-api.up.railway.app/movies")
        const movies = response.data;
        movies.forEach((movie) => {
            renderTarjetas(movie);
        });
    } catch (err) {
        console.error(err);
    }
}

getMovies();
