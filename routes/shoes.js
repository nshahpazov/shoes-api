var express = require('express');
var controller = require('../controllers/shoes');
var router = express.Router();

/* GET shoes listing. */
router.get('/shoes', controller.getAllShoeModels);
router.get('/shoes/:id', controller.getShoeModel);
router.post('/shoes', controller.createShoeModel);
router.put('/shoes/:id', controller.updateShoeModel);

module.exports = router;
