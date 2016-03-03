var express = require('express');
var controller = require('../controllers/orders');
var router = express.Router();

router.post('/orders', controller.createOrder);
router.get('/orders', controller.getAllOrders);
router.delete('/orders', controller.deleteAllOrders);
router.get('/orders/:id', controller.getOrder);
router.post('/orders/:orderId/order_items', controller.createOrderItem);
router.get('/orders/:orderId/order_items', controller.getOrderItems);
router.delete('/orders/:orderId/order_items/:itemId', controller.deleteOrderItem);

module.exports = router;
