const renderTarjetas = require("./renderTarjetas");

$.get("https://students-api.2.us-1.fl0.io/movies" , (data) => {
    data.forEach((movie) => {
        renderTarjetas(movie);
    });
});
