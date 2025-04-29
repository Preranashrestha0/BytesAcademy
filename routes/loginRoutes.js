const express = require('express');
const { loginUser, addUser } = require("../controllers/loginController");
const router = express.Router();

// router.post("/register", registerUser);
router.post("/addUser", addUser);
router.post("/login", loginUser);

module.exports = router;