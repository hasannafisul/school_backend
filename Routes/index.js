const express = require("express");
const router = express.Router();
const Controller = require("../Controllers")

router.get("/", Controller.home);
router.post("/getDummyData", Controller.getDummyData);
router.post("/addUser", Controller.createData);
router.post("/update", Controller.updateData);
router.post("/delete", Controller.destroyData);


module.exports = router;

