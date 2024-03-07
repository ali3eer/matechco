const express = require("express");
const auth = require("../middlewares/auth");
const router = express.Router();
const productController = require("../controllers/productController");

//get all
router.get("/", auth, productController.getAll);

//get by id
router.get("/:id", auth, productController.getById);

router.post("/",productController.feedAll)

module.exports = router;
