function validateData(req, res, next) {
    const { titulo, director, año, genero, duracion, poster } = req.body;
    if (!titulo || !director || !año || !genero || !duracion || !poster) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }
    next();
}

module.exports = {
    validateData
};
