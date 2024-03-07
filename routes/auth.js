const express = require("express");
const auth = require("../middlewares/auth");
const authController = require("../controllers/authController");
const router = express.Router();

//test
router.get("/test", (req, res) => res.json({ msg: "Welcome to TEST page" }));

//register
router.post("/register", authController.register);

//update
router.patch("/update", auth, authController.update);

//login
router.post("/login", authController.login);

//logout
router.post("/logout", auth, authController.logout);

//refresh for JWT tokens
router.get("/refresh", authController.refresh);

module.exports = router;
