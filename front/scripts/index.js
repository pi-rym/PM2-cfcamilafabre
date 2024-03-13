const renderTarjetas = require("./renderTarjetas");
const axios = require("axios");

const getMovies = async () => {
    try {
        const { data } = await axios.get("http://localhost:3000/movies")
        data.forEach(renderTarjetas);
    } catch (error) {
        console.error(error);
    }
}

getMovies();
