function validateData(req, res, next) {
    const { title, director, year, genre, duration, poster, rate} = req.body;
    if (!title || !director || !year || !genre || !duration || !poster || !rate) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }
    next();
}

module.exports = {
    validateData
};
