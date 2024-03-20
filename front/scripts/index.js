const renderTarjetas = require("./renderTarjetas");
const handleSubmit = require("./handleSubmit");
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


const resetButton = document.getElementById('resetButton');

//Esta funcion se puede reemplazar utilizando el type="reset" en el button.
resetButton.addEventListener('click', function() {
    const inputs = document.querySelectorAll('.seccion-form input')
    inputs.forEach(function(input) {
        input.value = '';
    })
});


const sendButton = document.getElementById('sendButton');

const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

sendButton.addEventListener('click', function() {
    const inputs = document.querySelectorAll('.seccion-form input')
    let formIsValid = true;

    inputs.forEach(function(input) {
        if (input.value.trim() === '') {
            formIsValid = false;
            input.classList.add('invalid');
        } else {
            input.classList.remove('invalid');
        }
    });
    if (formIsValid) {
        handleSubmit();
    } else {
        alert('Por favor complete todos los campos.');
    }
});