const moviesServices = require("../services/moviesServices");

module.exports = {
    getMovies: async (req, res) => {
        try {
            // Esperar la respuesta de la función getMovies
            const movies = await moviesServices.getMovies();
            // Enviar las películas como respuesta al cliente
            res.status(200).json(movies);
        } catch (error) {
            // Manejar cualquier error que ocurra durante la obtención de las películas
            res.status(500).json({ error: "Hubo un error al obtener las películas." });
        }
    },

    createMovie: async (req, res) => {
        const { title, year, director, duration, genre, rate, poster } = req.body;
        try {
            const newMovie = await moviesServices.createMovie({ title, year, director, duration, genre, rate, poster });
            res.status(201).json(newMovie);
        } catch (error) {
            res.status(500).json({ error: "Hubo un error al crear la pelicula." });
        }
    },
};
