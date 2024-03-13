// aca vamos a definir las rutas a traves de las cuales nos podemos comunicar

const { Router } = require("express");
const {moviesController} = require ("../controllers");
const router = Router();

router.get("/movies", moviesController);

module.exports = router;

