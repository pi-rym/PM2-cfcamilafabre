const renderTarjetas = require("./renderTarjetas");
const axios = require("axios");

const getMovies = async () => {
    try {
        const { data } = await axios.get("https://students-api.up.railway.app/movies")
        data.forEach(renderTarjetas);
    } catch (error) {
        console.error(error);
    }
}

getMovies();
