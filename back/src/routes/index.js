const { Router } = require("express");
const { validateData } = require('./validateData');
const moviesController = require ("../controllers");
const router = Router();

router.get("/movies", moviesController.getMovies);

router.post("/movies", validateData, moviesController.createMovie);

module.exports = router;





