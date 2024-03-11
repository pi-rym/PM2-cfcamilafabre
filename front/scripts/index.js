const renderTarjetas = require("./renderTarjetas");
const axios = require("axios");

// $.get("https://students-api.2.us-1.fl0.io/movies" , (data) => {
//     data.forEach((movie) => {
//         renderTarjetas(movie);
//     });
// });


const fetchMovies = async () => {
    try {
        const response = await axios.get("https://students-api.2.us-1.fl0.io/movies");
        const movies = response.data;
        movies.forEach((movie) => {
            renderTarjetas(movie);
        });
    } catch (err) {
        return err;
    }
}

