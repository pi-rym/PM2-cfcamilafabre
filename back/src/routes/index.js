const { Router } = require("express");
const {moviesController} = require ("../controllers");
const router = Router();

router.get("/movies", moviesController);

module.exports = router;





