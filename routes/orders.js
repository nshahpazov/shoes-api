var express = require('express');
var controller = require('../controllers/orders');
var router = express.Router();

router.post('/orders/', controller.createOrder);
router.get('/orders/:id', controller.getOrder);
router.post('/orders/:id/order_items', controller.createOrderItem);
router.get('/orders/:id/order_items', controller.getOrderItems);
router.delete('/orders/:id/order_items/:itemId', controller.createOrderItem);

module.exports = router;
