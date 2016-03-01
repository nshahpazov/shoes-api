var express = require('express');
var controller = require('../controllers/shoes');
var router = express.Router();

/* GET shoes listing. */
router.get('/shoes', controller.all);

// CAN HAVE OTHER API ENDPOINTS FOR CREATE, DELETE, ETC

module.exports = router;
