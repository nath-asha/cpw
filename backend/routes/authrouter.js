const express = require('express');
const { registerUser, loginUser} = require('../controllers/authcontroller');

const router = express.Router();

router.post('/register', registerUser);

router.post('/login', loginUser); //do not change to /logino
// router.get("/verify/:token", verifyEmail); // Added route for email verification
module.exports = router;