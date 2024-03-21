const validateForm = require("./validateForm");
const resetForm = require("./resetForm");
const axios = require("axios");

function createMovie(event){
    event.preventDefault();

    const title = document.getElementById("titleInput").value;
    const year = document.getElementById("yearInput").value;
    const director = document.getElementById("directorInput").value;
    const duration = document.getElementById("durationInput").value;
    const genre = document.getElementById("genreInput").value.split(" ");
    const rate = document.getElementById("rateInput").value;
    const poster = document.getElementById("posterInput").value;

    const newMovie = {title, year, director, duration, genre, rate, poster};
    
    const error = validateForm ({title, year, director, duration, genre, rate, poster});
    if(error) return alert(error);

    axios
    .post("http://localhost:3000/movies", newMovie)
    .then(() => {alert('Pelicula creada!')
        resetForm();    
})
    .catch((error) => alert('Error al crear la peli'));
}

module.exports = createMovie;

