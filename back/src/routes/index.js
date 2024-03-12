// aca vamos a definir las rutas a traves de las cuales nos podemos comunicar

const { Router } = require("express");
const {testController} = require ("../controllers");
const router = Router();

router.get("/movies", testController);

module.exports = router;

