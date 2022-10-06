const router = require("express").Router();
const empresa = require("../controller/empresa.controller");

router.get("/find/:id", empresa.find);
router.get("/findAll", empresa.findAllEmpresas);
router.post("/create", empresa.createEmpresa);

router.put("/update/:id", empresa.updateEmpresa);

router.delete("/delete/:id", empresa.deleteEmpresa);
module.exports = router;