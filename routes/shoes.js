const express = require('express');
const controller = require('../controllers/shoes');
const router = express.Router();

router.get('/shoes', controller.getAllShoeModels);
router.get('/shoes/:id', controller.getShoeModel);
router.post('/shoes', controller.createShoeModel);
router.put('/shoes/:id', controller.updateShoeModel);

module.exports = router;
