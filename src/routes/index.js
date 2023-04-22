const express = require("express");
const router = express.Router();

// File_Appending
const userRoute = require('./../routes/user.route');

// Routes_Appending
router.use('/user', userRoute);

module.exports = router;
