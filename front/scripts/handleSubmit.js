const renderTarjetas = require ("./renderTarjetas");


// Función que maneja el envío del formulario
function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const movieData = {
        title: formData.get('title'),
        director: formData.get('director'),
        year: formData.get('year'),
        genre: formData.get('genre'),
        duration: formData.get('duration'),
        poster: formData.get('poster')
    };

    axios.post('http://localhost:3000/movies', movieData)
        .then(response => {
            renderTarjetas(movieData);
        })
        .catch(error => {
            console.error(error);
        });
}

module.exports = handleSubmit;