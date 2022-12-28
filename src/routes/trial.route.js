const express = require('express');
const router = express.Router();

const trialController = require('../controllers/trial.controller');

router.post('/', trialController.createTrial);
router.get('/', trialController.getAllTrial);
router.get('/:id', trialController.getTrial);
router.patch('/:id', trialController.updateTrial);
router.delete('/:id', trialController.deleteTrial);

module.exports = router;
