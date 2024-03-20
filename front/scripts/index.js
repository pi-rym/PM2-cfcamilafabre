const renderTarjetas = require("./renderTarjetas");
const createMovie = require("./createMovie");
const axios = require("axios");

const getMovies = async () => {
    try {
        const { data } = await axios.get("http://localhost:3000/movies")
        data.forEach(renderTarjetas);
    } catch (error) {
        console.error(error);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    getMovies();
    const submit = document.getElementById("movieForm");
    submit?.addEventListener("submit", createMovie);
});

//Esta funcion se puede reemplazar utilizando el type="reset" en el button.
const resetButton = document.getElementById('resetButton');

resetButton.addEventListener('click', function () {
    const inputs = document.querySelectorAll('.seccion-form input')
    inputs.forEach(function (input) {
        input.value = '';
    })
});

