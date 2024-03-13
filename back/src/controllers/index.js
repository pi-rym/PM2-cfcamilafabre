// en este modulo van a estar las funciones que establecen la logica de negocio de cada ruta.

// para esa ruta vamos a ir a la base de datos a pedir la informacion de los usuarios
// responder al cliente con la informacion obtenida
const getMovies = require("../services/moviesService");

const moviesController = async (req, res) => {
    try {
        // Esperar la respuesta de la función getMovies
        const movies = await getMovies();

        // Enviar las películas como respuesta al cliente
        res.status(200).json(movies);
    } catch (error) {
        // Manejar cualquier error que ocurra durante la obtención de las películas
        res.status(500).json({ error: "Hubo un error al obtener las películas." });
    }
};

module.exports = {
    moviesController,
};