function validateForm({title, year, director, duration, genre, rate, poster}) {
    if (!title || !year || !director || !duration || !genre.length || !rate || !poster)
        return "Debes completar todos los campos";
}

module.exports = validateForm;