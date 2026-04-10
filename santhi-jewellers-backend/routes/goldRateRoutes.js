const express = require('express');
const router = express.Router();
const goldRateController = require('../controllers/goldRateController');

// GET /api/gold-rate
router.get('/', goldRateController.getCurrentRate);

// POST /api/gold-rate/sync
router.post('/sync', goldRateController.triggerSync);

module.exports = router;
