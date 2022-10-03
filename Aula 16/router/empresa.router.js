const router = require("express").Router();
const empresa = require("../controller/empresa.controller");

router.get("/", empresa.find);
router.get("/findAll", empresa.findAllEmpresas);
router.post("/create", empresa.createEmpresa);

module.exports = router;