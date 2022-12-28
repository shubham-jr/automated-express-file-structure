const express = require("express");
const router = express.Router();

// File_Appending
const trialRoute = require('./../routes/trial.route');

// Routes_Appending
router.use('/trial', trialRoute);

module.exports = router;
