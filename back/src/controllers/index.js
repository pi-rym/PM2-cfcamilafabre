// en este modulo van a estar las funciones que establecen la logica de negocio de cada ruta.

// para esa ruta vamos a ir a la base de datos a pedir la informacion de los usuarios
// responder al cliente con la informacion obtenida

const testController = (req, res) => {
    res.status(200).send("Proximamente estarán disponibles los datos de peliculas");
};

module.exports = {
    testController,
};